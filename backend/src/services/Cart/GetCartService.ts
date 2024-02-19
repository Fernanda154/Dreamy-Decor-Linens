import { AppDataSource } from "../../../data-source";
import { Cart } from "../../entities/Cart";

export class GetCartService {
  async execute({ id }) {
    const repo = AppDataSource.getRepository(Cart);
    const cart = await repo.findOne({ where: { id } });
    if (!cart) {
      throw new Error("Carrinho não encontrado");
    }
    return cart;
  }
}