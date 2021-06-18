import {Product} from '../../domain/entities/product'
import {RegisterProduct} from '../../domain/usecases/registerProduct'
import {ProductRepository} from '../contracts/productRepository'
import {generateId} from './generateId'

export class RegisterProductService implements RegisterProduct {
  constructor(private readonly repository: ProductRepository) {}

  async register(data: Omit<Product, 'id'>): Promise<Product> {
    const id = generateId()
    const product = {
      id,
      ...data
    }
    const createdProduct = await this.repository.save(product)

    if (!createdProduct) {
      throw new Error('cant create product')
    }

    return createdProduct
  }
}
