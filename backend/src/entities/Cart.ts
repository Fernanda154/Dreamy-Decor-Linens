import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { Product } from "./Product";
@Entity("product")
export class Cart {
  @PrimaryColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  fk_user: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "fk_user" })
  user_id: User;

  @ManyToMany(() => Product, (product) => product.carts)
  @JoinTable()
  products: Product[];
}
