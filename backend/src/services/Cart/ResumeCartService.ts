import { AppDataSource } from "../../../data-source";
import { Cart } from "../../entities/Cart";

export class ResumeCartService {

    
  async execute({cart_id}: { cart_id?: number } = {}): Promise<Cart[]> {
    console.log("AAAAAAA", cart_id);
    const repository = AppDataSource.getRepository(Cart);
      try {
          const resume = repository.createQueryBuilder('cart')
          .leftJoinAndSelect('cart.products', 'cart_product')
          .leftJoinAndSelect('cart_product.product', 'product')
          .where('cart.id = :id', {id: cart_id})
          .getMany();
    
          return resume;
      } catch (error) {
        console.error('Error fetching products on cart:', error);
        throw new Error("Erro ao listar carrinho.");
      }
  }
}
