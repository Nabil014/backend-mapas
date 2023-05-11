import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/auth/LoginPage'
import { NavBarPage } from '../pages/navbar/NavBarPage'
import { MapaPage } from '../pages/mapa/MapaPage'
import { RegisterPage } from '../pages/auth/RegisterPage'

export const RouterPrincipal = () => {
  return (
    <>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/main' element={<NavBarPage />} />
        <Route path='/mapa' element={<MapaPage />} />
        <Route path='/feddback' element={<NavBarPage />} />
        <Route path='/editperfil' element={<NavBarPage />} />
        <Route path='/settings' element={<NavBarPage />} />
        <Route path='/user' element={<NavBarPage />} />
      </Routes>
    </>
  )
}
