import axios from 'axios'
/* global localStorage */

const apiMapas = axios.create({
  baseURL: `${import.meta.env.VITE_API_APP_MAPAS}:3000`
})

apiMapas.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: 'bearer ' + localStorage.getItem('token')
  }

  return config
})
export default apiMapas
