import type { Product } from "../types/productType";

export type CartItem = Product& {
  quantity: number;
  date: Date;
};
