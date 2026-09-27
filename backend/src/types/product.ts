export interface Product {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  categoryId: number | null;
  createdAt: Date;
}

export interface CreateProductDTO {
  name: string;
  description?: string;
  price: number;
  stock?: number;
  categoryId?: number;
}

export interface UpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  categoryId?: number;
}
