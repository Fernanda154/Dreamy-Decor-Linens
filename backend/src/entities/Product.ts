import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";
import { ProductCategory } from "./ProductCategory";
import { CartProduct } from "./CartProduct";
import { Cart } from "./Cart";

@Entity("product")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @OneToMany(() => ProductCategory, productCategory => productCategory.product)
  categories: ProductCategory[];

  @OneToMany(() => CartProduct, cartProduct => cartProduct.product)
  carts: CartProduct[];
 
}
