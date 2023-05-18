import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const RouterPublic = ({ children }) => {
  const { status } = useSelector((state) => state.auth)
  return (status !== 'authenticated') ? children : <Navigate to='/mapa' />
}