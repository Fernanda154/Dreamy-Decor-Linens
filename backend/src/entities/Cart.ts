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
  user_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "id" })
  fk_user: User;

  @OneToMany(() => CartProduct, cartProduct => cartProduct.cart)
  products: CartProduct[];
}
