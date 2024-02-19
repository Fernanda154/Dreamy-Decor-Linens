import { AppDataSource } from "../../../data-source";
import { Product } from "../../entities/Product";

export class UpdateProductService {
  async execute({ id, name, description, price }) {
    const repo = AppDataSource.getRepository(Product);
    const product = await repo.findOne({ where: { id } });
    if (!product) {
      throw new Error("Produto não encontrado");
    }
    product.name = name;
    product.description = description;
    product.price = price;
    await repo.save(product);
    return product;
  }
}
