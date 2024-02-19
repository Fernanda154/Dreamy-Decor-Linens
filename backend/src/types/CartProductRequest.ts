export type CartProductRequest = {
    id?: number;
    fk_product: number;
    fk_cart: number;
    quantity: number;
};