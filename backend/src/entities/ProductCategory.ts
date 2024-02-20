import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./Category";
import { Product } from "./Product";

@Entity("product_category")
export class ProductCategory {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Product, product => product.categories)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => Category, category => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  
}