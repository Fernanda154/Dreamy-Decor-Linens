import { Product } from "../../entities/Product";
import { ProductRequest } from "../../types/ProductRequest";
import { AppDataSource } from "../../../data-source";

export class CreateProductService {
  async execute({
    name,
    description,
    price,
    carts,
  }: ProductRequest): Promise<Product | Error> {
    const repo = AppDataSource.getRepository(Product);
    const check_product = await repo.findOne({ where: { name } });
    if (!check_product) {
      const product = repo.create({
        name,
        description,
        price,
        carts,
      });
      await repo.save(product);
      return product;
    } else {
      throw new Error("Já existe um produto com este nome.");
    }
  }
}
