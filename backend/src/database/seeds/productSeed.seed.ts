import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Product } from "../../entities/Product";
import { ProductCategory } from "../../entities/ProductCategory";

export default class ProductSeeder implements Seeder {
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
    
    const products = await repository.insert([
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
    const productCategories = [];
    
    products.generatedMaps.map((product)=>{
      productCategories.push(repository2.create({ product: product, category: {name: 'Cremes'} }));
    });
  }
}
