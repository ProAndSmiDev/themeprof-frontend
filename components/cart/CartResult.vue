<script setup lang="ts">
import type { Cart } from 'interfaces/Cart'

interface Props {
  products: Cart[]
}

const props = defineProps<Props>()

const payments: string[] = ['Mir', 'Visa', 'Mastercard', 'Sbp']

const fullPrice = computed(() => {
  let result = 0

  for (let i = 0; i < props.products.length; i++) {
    result += props.products[i].price
  }

  return result
})
const salePrice = 1500
const resultPrice = computed(() => fullPrice.value - salePrice)
</script>

<template>
  <div class="cart-result">
    <p class="cart-result__caption">
      Стоимость товаров:
    </p>

    <CartResultCosts
        :products
        :fullPrice
        :salePrice
        class="cart-result__costs"
    />

    <CartResultPrice :resultPrice class="cart-result__price" />

    <UiButton title="Совершить покупку" class="cart-result__buy">
      оплатить
    </UiButton>

    <UiPayments :payments class="cart-result__payments" />
    <CartResultAgreement class="cart-result__agreement" />
  </div>
</template>

<style scoped src="./styles/cart-result.css"></style>
