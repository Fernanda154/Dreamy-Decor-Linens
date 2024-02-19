import { Request, Response } from "express";
import { CreateProductService } from "../../services/Product/CreateProductService";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price } = request.body;

    const service = new CreateProductService();

    try {
      const result = await service.execute({ name, description, price });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}
