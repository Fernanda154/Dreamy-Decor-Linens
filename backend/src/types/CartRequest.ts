import { ProductRequest } from "./ProductRequest";

export type CartRequest = {
  id?: number;
  quantity: number;
  fk_user: number;
  products?: ProductRequest[];
};
