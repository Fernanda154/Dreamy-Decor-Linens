import { Request, Response } from "express";
import { GetAllProductService } from "../../services/Product/GetAllProductService";

export class GetAllProductsController {
  async handle(request: Request, response: Response) {
    console.log('testeee', request.params );
    const service = new GetAllProductService();

    const result = await service.execute({ search: parseInt(request.params.search) });
    return response.json(result);
  }
}
