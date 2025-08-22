import type { tariffsName } from 'constants/tariffs'

type TariffsName = typeof tariffsName[keyof typeof tariffsName];

interface ProductsTariffs {
  name: TariffsName
  price: number
  options: string[]
  based: string[]
  icon: string
}

interface ProductsFeedback {
  rate: string
  comments: number
}

interface ProductsPhoto {
  url: string
  alt: string
}

export interface Products {
  id: number
  name: string
  description: string
  photo: ProductsPhoto
  tags: string[]
  feedback: ProductsFeedback
  tariffs: ProductsTariffs[]
}
