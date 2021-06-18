import {Product} from '../entities/product'

export interface RegisterProduct {
  register: (product: Omit<Product, 'id'>) => Promise<Product>
}
