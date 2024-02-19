import { Cart } from "../../entities/Cart";
import { CartRequest } from "../../types/CartRequest";
import { AppDataSource } from "../../../data-source";

export class CreateCartService {
  async execute({
    fk_user
  }: CartRequest): Promise<Cart | Error> {
    const repo = AppDataSource.getRepository(Cart);
    const cart = repo.create({
      fk_user,
    });
    await repo.save(cart);
    return cart;
  }
}
