<script setup lang="ts">
interface Props {
  resultPrice: number
}

defineProps<Props>()
</script>

<template>
  <p class="cart-result-price">
    <span>Итого</span>
    <span class="cart-result-price__value">
        {{ resultPrice }}&nbsp;₽
      </span>
  </p>
</template>

<style scoped src="./styles/cart-result-price.css"></style>
