import { defineStore } from "pinia"
import type { Products } from "interfaces/Products"

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Products[],
    loading: true,
    error: null as string | null,
  }),
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

    getProductById(id: number): Products | undefined {
      return this.products.find(product => product.id === id)
    }
  }
})
