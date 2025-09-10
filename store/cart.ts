import { defineStore } from "pinia"

interface CartItem {
  product: Object
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: (state => state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0))
  },
  actions: {
    addProduct(product: Object, quantity: number = 1) {
      const existingItem = this.items.find(item => item.product.id === product.id)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        this.items.push({ product, quantity })
      }
    },

    removeProduct(productId: number) {
      this.items = this.items.filter(item => item.product.id !== productId)
    },
    clearCart() {
      this.items = []
    }
  }
})
