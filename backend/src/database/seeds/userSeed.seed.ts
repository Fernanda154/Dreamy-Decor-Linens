import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { User } from "../../entities/User";

export default class UserSeeder implements Seeder {
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const userRepository = dataSource.getRepository(User);

    const userData = [
      { name: "Tonny Weslley", email: "tonny@example.com", password: "123" },
      { name: "Israel Kleber", email: "israel@example.com", password: "123" },
      { name: "Roberto Campos", email: "roberto@example.com", password: "123" },
      {
        name: "Fernanda Guilherme",
        email: "fernanda@example.com",
        password: "123",
      },
    ];

    try {
      await userRepository.insert(userData);

      console.log("Usuários inseridos com sucesso");
    } catch (error) {
      console.error("Erro ao inserir usuários:", error);
    }
  }
}
