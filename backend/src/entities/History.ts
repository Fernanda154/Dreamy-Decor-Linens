import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
  } from "typeorm";
  import { User } from "./User";
  
  @Entity("history")
  export class History {
    @PrimaryColumn()
    id: number;
  
    @Column()
    payment_form: string;

    @Column()
    price: number;

    @Column({ type: "timestamp", nullable: true })
    date: Date | null;

    @Column()
    fk_user: number;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: "fk_user" })
    user_id: User;
  }
  