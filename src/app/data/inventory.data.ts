import { Product } from '../models/product.model';

export const CompanyInfo = {
  name: 'Fashion Trends',
  ruc: '12345678901', 
  address: 'Calle Falsa 123' 
};

export const PRODUCTS: Product[] = [
  {
    name: 'Vestido de Verano',
    category: 'Vestidos',
    stock: {
      sucursal1: 15,
      sucursal2: 10,
      sucursal3: 5,
      sucursal4: 8,
      sucursal5: 12
    }
  },
  {
    name: 'Jeans Skinny',
    category: 'Pantalones',
    stock: {
      sucursal1: 20,
      sucursal2: 15,
      sucursal3: 10,
      sucursal4: 5,
      sucursal5: 25
    }
  },
  {
    name: 'Blusa de Seda',
    category: 'Blusas',
    stock: {
      sucursal1: 18,
      sucursal2: 22,
      sucursal3: 7,
      sucursal4: 14,
      sucursal5: 9
    }
  },
  {
    name: 'Chaqueta de Cuero',
    category: 'Chaquetas',
    stock: {
      sucursal1: 8,
      sucursal2: 6,
      sucursal3: 4,
      sucursal4: 10,
      sucursal5: 3
    }
  },
  {
    name: 'Falda Plisada',
    category: 'Faldas',
    stock: {
      sucursal1: 12,
      sucursal2: 9,
      sucursal3: 16,
      sucursal4: 7,
      sucursal5: 11
    }
  }
];