import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { Cart } from "./Cart";

@Entity("product")
export class Product {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @ManyToMany(() => Cart, (cart) => cart.products)
  @JoinTable()
  carts: Cart[];
}
