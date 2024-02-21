import { AppDataSource } from "../../../data-source";
import { Product } from "../../entities/Product";

export class GetAllProductService {
  async execute({search}: { search?: number } = {}): Promise<Product[]> {
    const repository = AppDataSource.getRepository(Product);
    if(search){
      try {
          const productsFiltered = repository.createQueryBuilder('product')
          .leftJoinAndSelect('product.categories', 'product_category')
          .leftJoinAndSelect('product_category.category', 'category')
          .where('category.id = :id', {id: search})
          .getMany();
    
          return productsFiltered;
      } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error("Já existe um produto com este nome.");
      }
    }else{
      const products = await repository.find();
      return products;
    }
  }
}
