import { AppDataSource } from "../../../data-source";
import { Category } from "../../entities/Category";

export class GetCategoryService {
  async execute({ name }) {
    const repo = AppDataSource.getRepository(Category);
    const category = await repo.findOne({ where: { name } });
    if (!category) {
      throw new Error("Categoria não encontrada.");
    }
    return category;
  }
}
