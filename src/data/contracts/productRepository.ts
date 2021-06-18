import {Product} from '../../domain/entities/product'

export interface ProductRepository {
  save: (data: Product) => Promise<any>
  findAll: () => Promise<Product[]>
}
