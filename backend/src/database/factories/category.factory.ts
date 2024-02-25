import { setSeederFactory } from "typeorm-extension";
import { Category } from "../../entities/Category";

export default setSeederFactory(Category, (faker) => {
  const category = new Category();
  category.name = faker.company.name();
  return category;
});
