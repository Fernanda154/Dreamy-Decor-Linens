import { Cart } from "../../entities/Cart";
import { CartRequest } from "../../types/CartRequest";
import { AppDataSource } from "../../../data-source";

export class CreateCartService {
  async execute({
    quantity,
    fk_user,
    products,
  }: CartRequest): Promise<Cart | Error> {
    const repo = AppDataSource.getRepository(Cart);
    const cart = repo.create({
      quantity,
      fk_user,
      products,
    });
    await repo.save(cart);
    return cart;
  }
}
