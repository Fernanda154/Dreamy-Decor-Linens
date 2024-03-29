import { Router } from "express";
import { GetAllProductsController } from "./controllers/Product/GetAllProductsController";
import { CreateProductController } from "./controllers/Product/CreateProductController";
import { UpdateProductController } from "./controllers/Product/UpdateProductController";
import {CreateCategoryController} from "./controllers/Category/CreateCategoryController";
import { GetAllCategoryController} from "./controllers/Category/GetAllCategoryController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AddProductOnCartController } from "./controllers/Cart/AddProductOnCartController";
import { ResumeCartController } from "./controllers/Cart/ResumeCartController";
import { GetCategoryController } from "./controllers/Category/GetCategoryController";

const routes = Router();

// Rotas de produtos
routes.get("/products/:search?", new GetAllProductsController().handle);
routes.post("/products", new CreateProductController().handle);
routes.put("/products/:id", new UpdateProductController().handle);

// Rotas de categorias
routes.get("/categories", new GetAllCategoryController().handle);
routes.post("/categories", new CreateCategoryController().handle);
routes.put("/categories/:name", new GetCategoryController().handle);

// Rotas de usuários
routes.post("/users", new CreateUserController().handle);

//Rotas do carrinho
routes.post("/cart", new AddProductOnCartController().handle);
routes.get("/cart/:cart_id", new ResumeCartController().handle);


export { routes };
