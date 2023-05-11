import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const token = import.meta.env.VITE_GOOGLE_MAPS_TOKEN

function Map () {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), [])

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
      <Marker position={center} />
    </GoogleMap>
  )
}

function LoadMap () {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: token })

  if (!isLoaded) return <div>Loading...</div>

  return <Map />
}

export default LoadMap
