import { Entity, Column, PrimaryColumn, OneToMany,  } from "typeorm";
import { ProductCategory } from "./ProductCategory";

@Entity("category")
export class Category {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ProductCategory, productCategory => productCategory.category)
  products: ProductCategory[];
}