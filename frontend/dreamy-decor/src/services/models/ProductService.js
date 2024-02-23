import BaseService from '../common/baseService'
import axiosInstance from '../common/axiosInstance'

class ProductService extends BaseService {
  async getWithFilter(category) {
    const response = await axiosInstance.get(`products/${category}`)
    return response
  }
}

export default new ProductService('/products')
