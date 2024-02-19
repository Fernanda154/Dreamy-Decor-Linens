import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./Category";
import { Product } from "./Product";

@Entity("product_category")
export class ProductCategory {
  @PrimaryColumn()
  id: string;

  @Column()
  fk_product: number;

  @Column()
  fk_category: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "fk_product" })
  product_id: Product;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "fk_category" })
  category_id: Category;
}