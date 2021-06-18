import {Product} from '../entities/product'

export interface ListProducts {
  list: () => Promise<Product[]>
}
