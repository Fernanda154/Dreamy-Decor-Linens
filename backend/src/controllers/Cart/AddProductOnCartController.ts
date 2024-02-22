import { Request, Response } from "express";
import { AddProductOnCartService } from "../../services/Cart/AddProductOnCartService";

export class AddProductOnCartController {
  async handle(request: Request, response: Response) {
    const { product_id, cart_id, quantity } = request.body;
    const service = new AddProductOnCartService();
    try {
      const result = await service.execute({ product_id, cart_id, quantity });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}