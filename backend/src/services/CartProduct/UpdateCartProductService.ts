import { AppDataSource } from "../../../data-source";
import { CartProduct } from "../../entities/CartProduct";

export class UpdateCartProductService {
  async execute({ id, quantity }) {
    const repo = AppDataSource.getRepository(CartProduct);
    const cart_product = await repo.findOne({ where: { id } });
    if (!cart_product) {
      throw new Error("Produto não encontrado");
    }
    cart_product.quantity = quantity;
    await repo.save(cart_product);
    return cart_product;
  }
}