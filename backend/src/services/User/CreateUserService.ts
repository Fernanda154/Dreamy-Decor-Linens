import { User } from "../../entities/User";
import { Cart } from "../../entities/Cart";
import { UserRequest } from "../../types/UserRequest";

import { AppDataSource } from "../../../data-source";

export class CreateUserService {
  async execute({ name, email, password }: UserRequest): Promise<User | Error> {
    const repo = AppDataSource.getRepository(User);
    const repo2 = AppDataSource.getRepository(Cart);
    const user = repo.create({
      name,
      email,
      password,
    });
    const final_user = await repo.save(user);
    if(final_user){
      const cart = repo2.create({
        user_id: final_user.id
      });
      await repo2.save(cart);
    }
    return user;
  }
}
