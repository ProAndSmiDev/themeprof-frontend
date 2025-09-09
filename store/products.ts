import {defineStore} from "pinia"
import type {Products} from "interfaces/Products"
import {type SortType, sortType} from "constants/sortType";

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Object[],
    product: {} as Object,
    filteredProducts: [] as Object[],
    reviewFilters: [] as string[],
    loading: true,
    error: null as string | null,
    sortType: sortType.DEFAULT as SortType,
  }),
  getters: {
    sortedAndFiltered(): Object[] {
      let result = [...this.filteredProducts.length > 0 ? this.filteredProducts : this.products]

      if (this.sortType === sortType.EXPENSIVE) {
        result.sort((a, b) => b.price - a.price)
      } else if (this.sortType === sortType.CHEAP) {
        result.sort((a, b) => a.price - b.price)
      }

      return result
    }
  },
  actions: {
    async fetchProducts() {
      this.error = null

      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) throw new Error('Ошибка сети')
        const data: Products[] = await response.json()
        this.products = data

        localStorage.setItem('products', JSON.stringify(data))
      } catch (err) {
        this.error = 'Ошибка загрузки продуктов'

        const cached = localStorage.getItem('products')
        if (cached) {
          this.products = JSON.parse(cached)
        }
      } finally {
        this.loading = false
      }
    },

    async getProductById(id: number) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!response.ok) throw new Error('Ошибка сети')
        this.product = await response.json()
      } catch (err) {
        this.error = 'Ошибка загрузки данных продукта'
      } finally {
        this.loading = false
      }
    },

    setReviewFilters(filters: string[]) {
      this.reviewFilters = filters
      this.applyFilters()
    },

    applyFilters() {
      if (this.reviewFilters.length === 0) {
        this.filteredProducts = this.products
      } else {
        this.filteredProducts = this.products.filter(product => {
          return this.reviewFilters.every(filter => {
            if (filter === 'more_than_10') {
              return product.rating.count > 10
            } else if (filter === 'more_than_50') {
              return product.rating.count > 50
            } else if (filter === 'more_than_100') {
              return product.rating.count > 100
            } else if (filter === 'more_above_4') {
              return product.rating.rate >= 4
            }

            return true
          })
        })
      }
    },

    setSortType(sortType: SortType) {
      this.sortType = sortType
    }
  }
})
