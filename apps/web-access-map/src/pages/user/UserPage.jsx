import React from 'react'
import { NavBarPage } from '../navbar/NavBarPage'
import { useDispatch } from 'react-redux'
import { LogoutUser } from '../../redux/auth/thunks'

export const UserPage = () => {
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(LogoutUser())
  }
  return (
    <>
      <div className='flex'>
        <NavBarPage />
        <h1>salir:</h1>
        <button onClick={() => onLogout()} className='bg-blue-500 h-10 mt-2'>
          LogOut
        </button>
      </div>
    </>
  )
}
