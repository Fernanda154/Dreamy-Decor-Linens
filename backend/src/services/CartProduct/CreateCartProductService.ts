import { CartProduct } from "../../entities/CartProduct";
import { CartProductRequest } from "../../types/CartProductRequest";
import { AppDataSource } from "../../../data-source";

export class CreateProductCategoryService {
  async execute({
    fk_product,
    fk_cart,
    quantity
  }: CartProductRequest): Promise<CartProduct | Error> {
    const repo = AppDataSource.getRepository(CartProduct);
      const cart_product = repo.create({
        fk_product,
        fk_cart,
        quantity
      });
      await repo.save(cart_product);
      return cart_product;
    }
}