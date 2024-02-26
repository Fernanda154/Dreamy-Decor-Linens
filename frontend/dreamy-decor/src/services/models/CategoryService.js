import BaseService from '../common/baseService'
import axiosInstance from '../common/axiosInstance'

class CategoryService extends BaseService {
  async getCategory(name) {
    const response = await axiosInstance.get(`categories/${name}`)
    return response
  }
}

export default new CategoryService('/categories')
