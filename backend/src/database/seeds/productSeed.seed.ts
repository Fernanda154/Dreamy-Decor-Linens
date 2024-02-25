import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Product } from "../../entities/Product";
import { ProductCategory } from "../../entities/ProductCategory";
import { Category } from "../../entities/Category";

export default class UserSeeder implements Seeder {
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
    const repository = dataSource.getRepository(Product);
    const repository2 = dataSource.getRepository(ProductCategory);

    await repository.insert([
      {
        name: "Toalha de banho",
        price: 10,
        description: "Toalha grande",
      },
      {
        name: "Toalha de rosto",
        price: 90,
        description: "Toalha pequena",
      },
      {
        name: "Vela aromática",
        price: 10,
        description: "Vela aromática decorativa",
      },
      {
        name: "Sabonete",
        price: 10,
        description: "Sabonete líquido",
      },
      {
        name: "Creme para as mãos",
        price: 10,
        description: "Creme para as mãos",
      },
      {
        name: "Creme de corpo",
        price: 10,
        description: "Creme para o corpo",
      },
      {
        name: "Creme de rosto",
        price: 100,
        description: "Creme para o rosto",
      },
      {
        name: "Creme para os pés",
        price: 150,
        description: "Creme para os pés",
      },
    ]);
    // const categories = ['Categoria 1', 'Categoria 2'];
    // const productCategories = [];

    // for (const categoryName of categories) {
    //   for (const productId of products.map((idObj: any) => idObj.id)) {
    //     productCategories.push(repository2.create({ product, categoryId: category.id }));
    //   }
    // }

    // await repository2.insert(productCategories);

    //   console.log('Products and categories seeded successfully');
    // }
  }
}
