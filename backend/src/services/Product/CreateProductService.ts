import { Product } from "../../entities/Product";
import { ProductRequest } from "../../types/ProductRequest";
import { ProductCategory } from "../../entities/ProductCategory";
import { AppDataSource } from "../../../data-source";

export class CreateProductService {
  async execute({
    name,
    description,
    price,
    categories
  }: ProductRequest): Promise<Product | Error> {
    const repo = AppDataSource.getRepository(Product);
    const repo2 = AppDataSource.getRepository(ProductCategory);

    const check_product = await repo.findOne({ where: { name } });
    if (!check_product) {
      if(categories != undefined){
        const product = repo.create({
          name,
          description,
          price
        });
        const final_product = await repo.save(product);
        if(final_product.id && categories.length > 0){
          for (const id of categories) {
              const product_category = repo2.create({
                  product: { id: final_product.id },
                  category: id
              });
              await repo2.save(product_category);
          }
        }
        return product;
      }else{
        throw new Error("Selecione uma categoria.");
      }
      
    } else {
      throw new Error("Já existe um produto com este nome.");
    }
  }
}
