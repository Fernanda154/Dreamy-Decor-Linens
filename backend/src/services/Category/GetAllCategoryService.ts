import { AppDataSource } from "../../../data-source";
import { Category } from "../../entities/Category";

export class GetAllCategoryService {
  async execute(): Promise<Category[]> {
    const repository = AppDataSource.getRepository(Category);
    const categories = await repository.find();
    return categories;
  }
}
