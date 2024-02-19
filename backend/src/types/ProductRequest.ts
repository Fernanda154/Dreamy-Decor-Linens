import { CartRequest } from "./CartRequest";
export type ProductRequest = {
  id?: number;
  name: string;
  description: string;
  price: number;
  fk_user?: number;
  carts?: CartRequest[];
};
