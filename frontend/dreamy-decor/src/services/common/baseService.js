import axiosInstance from './axiosInstance'

class BaseService {
  serviceUrl = ''

  constructor(serviceUrl) {
    this.serviceUrl = serviceUrl
  }

  async getAll() {
    const response = await axiosInstance.get(`${this.serviceUrl}/`)
    return response
  }

  async get(id) {
    const response = await axiosInstance.get(`${this.serviceUrl}/${id}/`)
    return response
  }

  async post(data) {
    const response = await axiosInstance.post(`${this.serviceUrl}/`, data)
    return response
  }

  async put(id, data) {
    const response = await axiosInstance.put(`${this.serviceUrl}/${id}/`, data)
    return response
  }

  async patch(id, data) {
    const response = await axiosInstance.patch(`${this.serviceUrl}/${id}/`, data)
    return response
  }

  async delete(id) {
    const response = await axiosInstance.delete(`${this.serviceUrl}/${id}/`)
    return response
  }
}

export default BaseService
