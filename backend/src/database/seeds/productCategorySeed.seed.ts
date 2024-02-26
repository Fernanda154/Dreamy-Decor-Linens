import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { DataSource } from "typeorm";
import { Product } from "../../entities/Product";
import { ProductCategory } from "../../entities/ProductCategory";
import { Category } from "../../entities/Category";

export default class ProductCategorySeeder implements Seeder {
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const productRepository = dataSource.getRepository(Product);
    const productCategoryRepository = dataSource.getRepository(ProductCategory);
    const categoryRepository = dataSource.getRepository(Category);

    const products = await productRepository.find();
    const categories = await categoryRepository.find();

    const productCategories = [];

    products.forEach((product) => {
      categories.forEach((category) => {
        const productCategory = new ProductCategory();
        productCategory.product = product;
        productCategory.category = category;
        productCategories.push(productCategory);
      });
    });

    await productCategoryRepository.save(productCategories);

    console.log(
      "Tabela relacionada de produtos e categorias populada com sucesso."
    );
  }
}
