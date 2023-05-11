import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status:
    'not-authenticated' /* 'authenticated' 'not-authenticated', 'checking' */,
  data: [],
  error: null
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sesionStatus: (state) => {
      state.status = 'checking'
    },
    registerData: (state, { payload }) => {
      state.status = 'Registrado exitosamente'
      state.data = payload
      state.error = null
    },
    registerError: (state, { payload }) => {
      state.status = 'Error de informacion'
      state.data = null
      state.error = payload
    },
    loginUser: (state, { payload }) => {
      state.status = 'authenticated'
      state.data = payload
      state.error = null
    },
    loginError: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.data = null
      state.error = payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  sesionStatus,
  registerData,
  registerError,
  loginUser,
  loginError
} = AuthSlice.actions
