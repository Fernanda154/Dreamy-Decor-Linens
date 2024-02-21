import { Request, Response } from "express";
import { ResumeCartService } from "../../services/Cart/ResumeCartService";

export class ResumeCartController {
  async handle(request: Request, response: Response) {
    const service = new ResumeCartService();

    const result = await service.execute({ cart_id: parseInt(request.params.cart_id) });
    return response.json(result);
  }
}
