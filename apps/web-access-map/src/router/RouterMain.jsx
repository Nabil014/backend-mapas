import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MapaPage } from '../pages/mapa/MapaPage'
import { NavBarPage } from '../pages/navbar/NavBarPage'
import { UserPage } from '../pages/user/UserPage'

export const RouterMain = () => {
  return (
    <Routes>
      <Route path='/mapa' element={<MapaPage />} />
      <Route path='/feddback' element={<NavBarPage />} />
      <Route path='/editperfil' element={<NavBarPage />} />
      <Route path='/settings' element={<UserPage />} />
      <Route path='/user' element={<UserPage />} />
      <Route path='/*' element={<Navigate to='/mapa' />} />
    </Routes>
  )
}
