import { Request, Response } from "express";
import { GetAllProductService } from "../../services/Product/GetAllProductService";

export class GetAllProductsController {
  async handle(_: Request, response: Response) {
    const service = new GetAllProductService();

    const result = await service.execute();
    return response.json(result);
  }
}
