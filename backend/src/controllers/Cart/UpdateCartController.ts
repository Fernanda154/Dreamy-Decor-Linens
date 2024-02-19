import { Request, Response } from "express";
import { UpdateCartService } from "../../services/Cart/UpdateCartService";

export class UpdateCartController {
  async handle(request: Request, response: Response) {
    const { products } = request.body;
    const { id } = request.params;

    const service = new UpdateCartService();

    try {
      const result = await service.execute({ id, products });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}
