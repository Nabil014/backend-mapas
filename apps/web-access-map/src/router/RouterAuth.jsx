import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/auth/LoginPage'
import { RegisterPage } from '../pages/auth/RegisterPage'
import { MapaPage } from '../pages/mapa/MapaPage'

export const RouterAuth = () => {
  return (
    <Routes>
      <Route path='/mapa' element={<MapaPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
