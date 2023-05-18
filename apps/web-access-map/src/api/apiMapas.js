/* global localStorage */
import axios from 'axios'

const apiMapas = axios.create({
  baseURL: import.meta.env.VITE_API_APP_MAPAS
})

apiMapas.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: 'bearer ' + localStorage.getItem('token')
  }

  return config
})

export default apiMapas
