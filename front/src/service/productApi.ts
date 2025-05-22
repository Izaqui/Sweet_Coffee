import { Product } from '../types/Product';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('http://localhost:3000/product');
  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }
  return response.json();
};