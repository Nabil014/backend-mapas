import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment } = AuthSlice.actions
