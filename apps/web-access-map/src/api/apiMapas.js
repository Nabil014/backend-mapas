import axios from 'axios'

const apiMapas = axios.create({
  baseURL: import.meta.env.VITE_API_APP_MAPAS
})

export default apiMapas
