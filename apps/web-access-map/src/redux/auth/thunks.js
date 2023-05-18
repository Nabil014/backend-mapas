/* global localStorage */
import apiMapas from '../../api/apiMapas'
import { TokenAcces } from '../../helper/TokenAcces'
import { loginUser, logoutUser, sesionStatus } from './AuthSlice'

export const RegisterUser = (datas) => {
  return async (dispatch) => {
    dispatch(sesionStatus())
    const { data } = await apiMapas.post('/auth/singup', datas)
    localStorage.setItem('token', data.token)
    const tokensito = localStorage.getItem('token')
    const { id, name, lastname, email } = TokenAcces(tokensito)
    dispatch(loginUser({ id, name, lastname, email }))
  }
}

export const LoginUser = (datas) => {
  return async (dispatch) => {
    dispatch(sesionStatus())
    datas.email = datas.username
    delete datas.username
    const { data } = await apiMapas.post('/auth/singin', datas)
    localStorage.setItem('token', data.token)
    const tokensito = localStorage.getItem('token')
    const { id, name, lastname, email } = TokenAcces(tokensito)
    dispatch(loginUser({ id, name, lastname, email }))
  }
}

export const TokenAccess = (token) => {
  return async (dispatch) => {
    const { id, name, lastname, email } = TokenAcces(token)
    dispatch(loginUser({ id, name, lastname, email }))
  }
}

export const LogoutUser = () => {
  return async (dispatch) => {
    localStorage.removeItem('token')
    dispatch(logoutUser())
  }
}
