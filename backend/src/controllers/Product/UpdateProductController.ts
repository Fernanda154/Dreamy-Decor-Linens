import { Request, Response } from "express";
import { UpdateProductService } from "../../services/Product/UpdateProductService";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price } = request.body;
    const { id } = request.params;

    const service = new UpdateProductService();

    try {
      const result = await service.execute({ id, name, description, price });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}
