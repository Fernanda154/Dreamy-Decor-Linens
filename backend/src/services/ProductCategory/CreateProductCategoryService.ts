import { ProductCategory } from "../../entities/ProductCategory";
import { ProductCategoryRequest } from "../../types/ProductCategoryRequest";
import { AppDataSource } from "../../../data-source";

export class CreateProductCategoryService {
  async execute({
    fk_product,
    fk_category
  }: ProductCategoryRequest): Promise<ProductCategory | Error> {
    const repo = AppDataSource.getRepository(ProductCategory);
      const product_category = repo.create({
        fk_product,
        fk_category
      });
      await repo.save(product_category);
      return product_category;
    }
}