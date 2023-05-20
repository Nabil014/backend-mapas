import { MapsContainer } from '../../containers/maps/MapsContainer'
import { NavBarPage } from '../navbar/NavBarPage'
import { useJsApiLoader } from '@react-google-maps/api'

export const MapaPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBY6YE5UAzuLnBqV9lYCFs0St1SGkyhKkE'
  })

  if (!isLoaded) return <div> loading ....</div>
  return (
    <>
      <div className='flex'>
        <NavBarPage />
        <MapsContainer className=' relative' />
        <input
          type='text'
          placeholder='ESCRIBA LA UBICACION DEL MAPA'
          className=' w-1/2 h-10 absolute top-0 right-0 mt-10 mr-48'
        />
      </div>
    </>
  )
}
