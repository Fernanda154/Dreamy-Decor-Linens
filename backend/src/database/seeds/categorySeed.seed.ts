import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Category } from "../../entities/Category";

export default class CategorySeeder implements Seeder {
  /**
   * Track seeder execution.
   *
   * Default: false
   */
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const repository = dataSource.getRepository(Category);
    await repository.insert([
      {
        name: "Toalha de banho",
      },
    ]);

    // ---------------------------------------------------

    const categoryFactory = await factoryManager.get(Category);
    await categoryFactory.save();
    await categoryFactory.saveMany(5);
  }
}
