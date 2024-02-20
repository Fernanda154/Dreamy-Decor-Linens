import { Category } from "../../entities/Category";
import { CategoryRequest } from "../../types/CategoryRequest";
import { AppDataSource } from "../../../data-source";

export class CreateCategoryService {
  async execute({
    name
  }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);
    const check_category = await repo.findOne({ where: { name } });
    if (!check_category) {
      const category = repo.create({
        name
      });
      await repo.save(category);
      return category;
    } else {
      throw new Error("Já existe uma categoria com este nome.");
    }
  }
}