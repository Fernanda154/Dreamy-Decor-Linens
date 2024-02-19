import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("cart")
export class Cart {
  @PrimaryColumn()
  id: number;

  @Column()
  fk_user: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "fk_user" })
  user_id: User;
}
