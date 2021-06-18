import {Category} from './category'

export interface Product {
  id: string
  name: string
  category: Category
  pictures: string[]
  price: number
}
