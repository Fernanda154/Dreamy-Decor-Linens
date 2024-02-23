import axiosInstance from '@/services/common/axiosInstance.js'

class cartService {
  async insert(data) {
    const response = await axiosInstance.post('cart/', data)
    return response
  }
}

export default new cartService()
