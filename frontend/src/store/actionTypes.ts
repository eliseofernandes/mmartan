export const PRODUCT_SET = 'PRODUCT_SET';
export const PRODUCT_FILTER_SET = 'PRODUCT_FILTER_SET';
export const PRODUCT_LOADING = 'PRODUCT_LOADING';
export const PRODUCT_ERROR = 'PRODUCT_ERROR';

export type ProductImage = {
  id: string;
  product_id: string;
  name: string;
  url: string;
  created_at: Date;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discount_price: number;
  images: ProductImage[];
  created_at: Date;
};

export type ProductList = {
  products: Product[];
  total: number;
};

export type Filter = {
  name?: string;
  page?: number;
  limit?: number;
};

export interface ProductSet {
  type: typeof PRODUCT_SET;
  payload: ProductList;
}

export interface ProductFilterSet {
  type: typeof PRODUCT_FILTER_SET;
  payload: Filter;
}

export interface ProductLoading {
  type: typeof PRODUCT_LOADING;
}

export interface ProductError {
  type: typeof PRODUCT_ERROR;
}

export type ProductDispatchTypes =
  | ProductSet
  | ProductFilterSet
  | ProductLoading
  | ProductError;
