import { AppDataSource } from "../../../data-source";
import { Cart } from "../../entities/Cart";

export class UpdateCartService {
  async execute({ id, products }) {
    const repo = AppDataSource.getRepository(Cart);
    const cart = await repo.findOne({ where: { id } });
    if (!cart) {
      throw new Error("Carrinho não encontrado");
    }
    cart.products = products;
    await repo.save(cart);
    return cart;
  }
}
