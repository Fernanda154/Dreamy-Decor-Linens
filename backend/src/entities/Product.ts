import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { ProductCategory } from "./ProductCategory";

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

  @OneToMany(() => ProductCategory, productCategory => productCategory.product)
  categories: ProductCategory[];
}
