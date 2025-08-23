import type { ProductsPhoto } from 'interfaces/Products'

interface CartTariff {
  icon: string
  name: string
}

export interface Cart {
  id: number
  photo: ProductsPhoto
  name: string
  tags: string[]
  description: string
  tariff: CartTariff
  price: number
}
