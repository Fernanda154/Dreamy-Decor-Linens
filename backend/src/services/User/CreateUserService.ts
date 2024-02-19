import { User } from "../../entities/User";
import { UserRequest } from "../../types/UserRequest";
import { AppDataSource } from "../../../data-source";

export class CreateUserService {
  async execute({ name, email, password }: UserRequest): Promise<User | Error> {
    const repo = AppDataSource.getRepository(User);

    const user = repo.create({
      name,
      email,
      password,
    });
    await repo.save(user);
    return user;
  }
}
