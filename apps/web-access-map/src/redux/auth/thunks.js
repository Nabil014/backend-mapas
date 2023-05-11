import apiMapas from '../../api/apiMapas'
import { loginUser, sesionStatus } from './AuthSlice'
/* global localStorage */
export const RegisterUser = (datas) => {
  return async (dispatch) => {
    dispatch(sesionStatus())
    const { data } = await apiMapas.post('/auth/singup', datas)
    localStorage.setItem('token', data.token)
    const tokensito = localStorage.getItem('token')
    const [, payload] = tokensito.split('.')
    const decodedPayload = atob(payload)
    const datos = JSON.parse(decodedPayload)
    const { id, name, lastname, email } = datos
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
    const [, payload] = tokensito.split('.')
    const decodedPayload = atob(payload)
    const datos = JSON.parse(decodedPayload)
    const { id, name, lastname, email } = datos
    dispatch(loginUser({ id, name, lastname, email }))
  }
}
