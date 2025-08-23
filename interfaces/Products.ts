import type {Tariffs} from "interfaces/Tariffs";

export interface ProductsFeedback {
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
  tariffs: Tariffs[]
}
