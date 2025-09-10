<script setup lang="ts">
interface Props {
  products: Object[]
  salePrice: number
}

const props = defineProps<Props>()

const payments: string[] = ['Mir', 'Visa', 'Mastercard', 'Sbp']

const fullPrice = computed(() => {
  let result = 0

  for (const productItem of props.products) {
    result += productItem.product.price
  }

  return Number(result.toFixed(2))
})
const resultPrice = computed(() => Number((fullPrice.value * (1 - props.salePrice / 100)).toFixed(2)))
</script>

<template>
  <div class="cart-result">
    <p class="cart-result__caption">
      Стоимость товаров:
    </p>

    <CartResultCosts
        :products="props.products"
        :fullPrice
        :salePrice="props.salePrice"
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
