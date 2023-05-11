import { useState } from 'react'
import { FaMap, FaComments, FaEdit, FaCog } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const NavBarPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const clickClass = (index) => {
    setActiveIndex(index)
  }

  const classFunction = (index) => {
    if (index === activeIndex) {
      return 'nav-item nav-link flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white'
    } else {
      return 'nav-item nav-link group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600'
    }
  }
  return (
    <div className=' min-h-screen bg-gray-100'>
      <div className='sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg'>
        <div className='flex h-screen flex-col justify-between pt-2 pb-6'>
          <div>
            <div className='w-max p-2.5 flex items-center'>
              <img src='../../../public/img/mapalogo.jpg' className='w-10 h-10 -ml-1 ' alt='mapa' />
              <span className='ml-2 font-medium'> ACCESSMAP</span>
            </div>
            <ul className='mt-6 space-y-2 tracking-wide'>
              <li className='min-w-max'>
                <NavLink className={classFunction(1)} to='/mapa' onClick={() => clickClass(1)}>
                  <FaMap className='h-5 w-5 fill-current group-hover:text-cyan-300' />
                  <span className='-mr-1 font-medium'>MAPA</span>
                </NavLink>
              </li>
              <li className='min-w-max'>
                <NavLink className={classFunction(2)} to='/feedback' onClick={() => clickClass(2)}>
                  <FaComments className='h-5 w-5 fill-current group-hover:text-cyan-300' />
                  <span className='-mr-1 font-medium'>FEEDBACK</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='min-w-max '>
            <NavLink className={classFunction(3)} to='/editperfil' onClick={() => clickClass(3)}>
              <FaEdit className='h-5 w-5 fill-current group-hover:text-cyan-300' />
              <span className='-mr-1 font-medium'>Editar Perfil</span>
            </NavLink>
            <NavLink className={classFunction(4)} to='/settings' onClick={() => clickClass(4)}>
              <FaCog className='h-5 w-5 fill-current group-hover:text-cyan-300' />
              <span className='-mr-1 font-medium'>Settings</span>
            </NavLink>
            <div>
              <NavLink className='nav-item nav-link group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600' to='/login'>
                <div className=' hover:shadow-md hover:shadow-cyan-500'>
                  <img src='../../../public/img/perfil.jpeg' alt='foto' className='rounded-full w-5 h-5' />
                </div>
                <span> FRANZ SCHWARTZ</span>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
