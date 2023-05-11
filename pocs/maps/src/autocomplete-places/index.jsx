import { useState, useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach-ui-fork/combobox'
import '@reach-ui-fork/combobox/styles.css'

const token = import.meta.env.VITE_GOOGLE_MAPS_TOKEN

function AutocompletePlaces () {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: token,
    libraries: ['places']
  })

  if (!isLoaded) return <div>Loading...</div>

  return <Map />
}

function Map () {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), [])
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className='places-container'>
        <PlacesAutocomplete setSelected={setSelected} />
      </div>
      <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  )
}

function PlacesAutocomplete ({ setSelected }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete()

  const handleSelect = async (address) => {
    setValue(address, false) // no fetch aditional data
    clearSuggestions()

    const result = await getGeocode({ address })
    const { lat, lng } = await getLatLng(result[0])

    setSelected({ lat, lng })
  }
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className='combobox-input'
        placeholder='Search an address'
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' && data.map(({ place_id: id, description }) => <ComboboxOption key={id} value={description} />)}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}

export default AutocompletePlaces
