import React from 'react'
import { AuthPage } from '../auth/pages/AuthPage'
import { Navigate, Route, Routes } from 'react-router-dom'

export const RouterPrincipal = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<AuthPage />} />

        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    </>
  )
}
