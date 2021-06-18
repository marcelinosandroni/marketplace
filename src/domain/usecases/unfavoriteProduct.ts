import {Product} from '../entities/product'

export interface UnfavoriteProduct {
  unfavorite: (id: Product['id']) => Promise<boolean>
}
