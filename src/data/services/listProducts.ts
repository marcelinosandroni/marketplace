import {Product} from '../../domain/entities/product'
import {ListProducts} from '../../domain/usecases/listProducts'
import {ProductRepository} from '../contracts/productRepository'

export class ListProductsService implements ListProducts {
  constructor(private readonly repository: ProductRepository) {}

  async list(): Promise<Product[]> {
    const allProducts = await this.repository.findAll()
    if (!allProducts) {
      throw new Error('cant get product list')
    }

    return allProducts
  }
}
