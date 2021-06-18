import {Product} from '../entities/product'

export interface FavoriteProduct {
  favorite: (id: Product['id']) => Promise<boolean>
}
