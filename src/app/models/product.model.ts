export interface Product {
  name: string;
  category: string;
  stock: {
    [key: string]: number;
  };
}