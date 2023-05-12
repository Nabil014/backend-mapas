import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingPage } from '../pages/auth/LoadingPage'
import { TokenAccess } from '../redux/auth/thunks'
import { RouterAuth } from './RouterAuth'
import { RouterMain } from './RouterMain'
import { RouterPublic } from './RouterPublic'
import { RouterPrivate } from './RouterPrivate'
/* global localStorage */

export const RouterPrincipal = () => {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      dispatch(TokenAccess(token))
    }
  }, [])

  if (status === 'checking') return <LoadingPage />

  console.log(status)

  return (
    <Routes>
      <Route
        path='/auth/*'
        element={
          <RouterPublic>
            <RouterAuth />
          </RouterPublic>
        }
      />
      <Route
        path='/*'
        element={
          <RouterPrivate>
            <RouterMain />
          </RouterPrivate>
        }
      />
    </Routes>
  )
}
