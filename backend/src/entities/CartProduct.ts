import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
import { Cart } from "./Cart";
import { Product } from "./Product";
  
  @Entity("cart_product")
  export class CartProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;
  
    @ManyToOne(() => Product, product => product.carts)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @ManyToOne(() => Cart, cart => cart.products)
    @JoinColumn({ name: 'cart_id' })
    cart: Cart;
  }
  