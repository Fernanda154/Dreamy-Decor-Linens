import { AppDataSource } from "../../../data-source";
import { CartProduct } from "../../entities/CartProduct";

export class AddProductOnCartService {
  async execute({ products, cart_id, quantity }) {
    function agruparItensIguais(array) {
      return array.reduce(function (acc, item) {
        if (!acc[item]) {
          acc[item] = [item];
        } else {
          acc[item].push(item);
        }
        return acc;
      }, {});
    }

    const repo = AppDataSource.getRepository(CartProduct);
    let item;
    products.map((product) => {
      item = repo.create({
        product: product.id,
        cart: cart_id,
        quantity: quantity,
      });
    });

    await repo.save(item);
    return item;
  }
}
