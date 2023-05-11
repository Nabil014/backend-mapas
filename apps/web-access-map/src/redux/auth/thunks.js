import apiMapas from '../../api/apiMapas'
import {
  loginError,
  loginUser,
  registerData,
  registerError,
  sesionStatus
} from './AuthSlice'

export const RegisterUser = (datas) => {
  return async (dispatch) => {
    dispatch(sesionStatus())
    datas.rol = 'VENTAS_ROL'
    datas.correo = datas.email
    delete datas.email
    try {
      const { data } = await apiMapas.post('/usuarios', datas)
      dispatch(registerData(data.usuario))
      console.log(data)
    } catch (error) {
      const { response } = error
      const errores = response.data.errors
      console.log(errores)
      dispatch(registerError(errores))
    }
  }
}

export const LoginUser = (datas) => {
  return async (dispatch) => {
    dispatch(sesionStatus())
    datas.correo = datas.username
    delete datas.username
    console.log(datas)
    try {
      const { data } = await apiMapas.post('/auth/login', datas)
      const { uid, name, lastname, username, correo } = data.usuario
      dispatch(loginUser({ uid, name, lastname, username, correo }))
    } catch (error) {
      const { response } = error
      const errores = response.data.msg
      dispatch(loginError(errores))
    }
  }
}
