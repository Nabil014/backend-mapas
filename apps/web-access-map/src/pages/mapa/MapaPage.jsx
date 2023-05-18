import { NavBarPage } from '../navbar/NavBarPage'

export const MapaPage = () => {
  return (
    <>
      <div className='flex'>
        <NavBarPage />
        <img src='../../../public/img/mapas.png' alt='mapas' className=' w-screen h-screen' />
      </div>
    </>
  )
}
