import { AppDataSource } from "../../../data-source";
import { CartProduct } from "../../entities/CartProduct";

export class AddProductOnCartService {
  async execute({ product, cart, quantity }) {
    const repo = AppDataSource.getRepository(CartProduct);
    console.log("product_id", product);
    console.log("cart_id", cart);
    const item = repo.create({
      product: product,
      cart: cart,
      quantity: quantity,
    });
    await repo.save(item);
    return item;
  }
}