import { Request, Response } from "express";
import { AddProductOnCartService } from "../../services/Cart/AddProductOnCartService";

export class AddProductOnCartController {
  async handle(request: Request, response: Response) {
    const { product, cart, quantity } = request.body;
    const service = new AddProductOnCartService();
    try {
      const result = await service.execute({ product, cart, quantity });
      return response.json(result);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}