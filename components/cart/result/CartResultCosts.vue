<script setup lang="ts">
import type { Cart } from 'interfaces/Cart'

interface Props {
  products: Cart[]
  fullPrice: number
  salePrice: number
}

const props = defineProps<Props>()

const productsTextCounter = computed(() => {
  const lastTwoDigits = props.products.length % 100
  const lastDigit = props.products.length % 10

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'продуктов'
  }

  switch (lastDigit) {
    case 1:
      return 'продукт'
    case 2:
    case 3:
    case 4:
      return 'продукта'
    default:
      return 'продуктов'
  }
})
</script>

<template>
  <ul class="cart-result-costs">
    <li class="cart-result-costs__item">
      <p class="cart-result-costs__caption">
        {{ `${products.length} ${productsTextCounter}` }}
      </p>

      <p class="cart-result-costs__value">
        {{ fullPrice }}&nbsp;₽
      </p>
    </li>
    <li class="cart-result-costs__item">
      <p class="cart-result-costs__caption">
        Скидка:
      </p>
      <p class="cart-result-costs__value">
        -{{ salePrice }}&nbsp;₽
      </p>
    </li>
  </ul>
</template>

<style scoped src="./styles/cart-result-costs.css"></style>
