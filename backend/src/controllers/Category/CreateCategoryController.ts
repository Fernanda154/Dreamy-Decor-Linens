import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/Category/CreateCategoryService";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const service = new CreateCategoryService();

    try {
      const result = await service.execute({ name });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}
