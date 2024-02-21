import { AppDataSource } from "../../../data-source";
import { CartProduct } from "../../entities/CartProduct";
import { CartProductRequest } from "../../types/CartProductRequest";

export class AddProductOnCartService {
  async execute({ product_id, cart_id, quantity } ) {
    const repo = AppDataSource.getRepository(CartProduct);
    const item = repo.create({
      product: product_id,
      cart: cart_id,
      quantity: quantity
    });
    await repo.save(item);
    return item;
  }
}
