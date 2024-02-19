import { Router } from "express";
import { GetAllProductsController } from "./controllers/Product/GetAllProductsController";
import { CreateProductController } from "./controllers/Product/CreateProductController";
import { UpdateProductController } from "./controllers/Product/UpdateProductController";
import { UpdateCartController } from "./controllers/Cart/UpdateCartController";

const routes = Router();

// Rotas de produtos
routes.get("/products", new GetAllProductsController().handle);
routes.post("/products", new CreateProductController().handle);
routes.put("/products/:id", new UpdateProductController().handle);

// Rotas de carrinho
routes.put("/cart/:id", new UpdateCartController().handle);

export { routes };
