import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3001/'
})

function getToken() {
  return localStorage.getItem('token')
}

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getToken()
    if (accessToken != null) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  async (error) => {
    await Promise.reject(error)
  }
)

export default axiosInstance
