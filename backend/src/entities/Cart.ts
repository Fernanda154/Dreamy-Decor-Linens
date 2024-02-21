import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToMany,
  JoinTable
} from "typeorm";
import { User } from "./User";
import { Product } from "./Product";
import { CartProduct } from "./CartProduct";

@Entity("cart")
export class Cart {
  @PrimaryColumn()
  id: number;

  @Column()
  fk_user: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "fk_user" })
  user_id: User;

  @OneToMany(() => CartProduct, cartProduct => cartProduct.cart)
  products: CartProduct[];
}
