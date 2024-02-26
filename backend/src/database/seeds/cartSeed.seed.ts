import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Cart } from "../../entities/Cart";

export default class CartSeeder implements Seeder {
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const cartRepository = dataSource.getRepository(Cart);

    const cartData = [{ user_id: 1 }, { user_id: 2 }];

    try {
      await cartRepository.insert(cartData);
      console.log("Carrinhos inseridos com sucesso");
    } catch (error) {
      console.error("Erro ao inserir carrinhos:", error);
    }
  }
}
