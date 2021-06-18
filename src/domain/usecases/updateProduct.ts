import {Product} from '../entities/product'

export interface UpdateProduct {
  update: (data: Partial<Product>) => Promise<Product>
}
