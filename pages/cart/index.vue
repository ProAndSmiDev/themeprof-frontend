<script setup lang="ts">
import { useCartStore } from "store/cart"

const breadcrumbs = [
  {
    name: 'Корзина'
  }
]
const cart = useCartStore()
const productsInCart = computed(() => cart.items)
const salePrice = 5
</script>

<template>
  <div class="cart">
    <UiBreadcrumbs :breadcrumbs class="cart__breadcrumbs" />
    <UiFirstScreen title="Корзина" class="cart__first-screen" />

    <div class="cart__content">
      <CartProducts v-if="productsInCart.length" :products="productsInCart" class="cart__products" />
      <div class="cart__products" v-else>
        Время совершать новые покупки!
      </div>
      <CartResult :products="productsInCart" :salePrice class="cart__result" />
    </div>
  </div>
</template>

<style scoped src="./cart.css"></style>
