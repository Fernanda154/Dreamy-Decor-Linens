import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
import { Cart } from "./Cart";
import { Product } from "./Product";
  
  @Entity("cart_product")
  export class CartProduct {
    @PrimaryColumn()
    id: number;
  
    @Column()
    fk_cart: number;

    @Column()
    fk_product: number;

    @Column()
    quantity: number;
  
    @ManyToOne(() => Cart)
    @JoinColumn({ name: "fk_cart" })
    cart_id: Cart;

    @ManyToOne(() => Product)
    @JoinColumn({ name: "fk_product" })
    product_id: Product;
  }
  