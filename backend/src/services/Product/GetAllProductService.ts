import { AppDataSource } from "../../../data-source";
import { Product } from "../../entities/Product";

export class GetAllProductService {
  async execute(): Promise<Product[]> {
    const repository = AppDataSource.getRepository(Product);
    const products = await repository.find();
    return products;
  }
}
