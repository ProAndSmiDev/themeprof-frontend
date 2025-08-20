interface ProductsTariffs {
  name: Tariffs
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

interface Products {
  id: number
  name: string
  description: string
  photo: ProductsPhoto
  tags: string[]
  feedback: ProductsFeedback
  tariffs: ProductsTariffs[]
}
