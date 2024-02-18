import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";
@Entity("product")
export class Cart {
  @PrimaryColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  product_id: number;

  @Column()
  quantity: number;

  @Column()
  fk_user: number;

  @ManyToMany(() => Product, product => product.carts)
  @JoinTable()
  products: Product[];
}
