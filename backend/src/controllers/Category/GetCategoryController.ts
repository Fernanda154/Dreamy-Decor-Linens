import { Request, Response } from "express";
import { GetCategoryService } from "../../services/Category/GetCategoryService";

export class GetCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.params;
    const service = new GetCategoryService();

    try {
      const result = await service.execute({ name });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}
