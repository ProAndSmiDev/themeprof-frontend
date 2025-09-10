<script setup lang="ts">
import { useCartStore } from 'store/cart'

interface Props {
  products: Object[]
}

defineProps<Props>()

const cart = useCartStore()

function removeProductFromCart(productId: number) {
  cart.removeProduct(productId)
}
</script>

<template>
  <ul class="cart-products">
    <li
        v-for="(productItem, idx) in products"
        :key="idx"
        class="cart-products__item"
    >
      <img :src="productItem.product.image" :alt="productItem.product.title" class="cart-products__photo">

      <div class="cart-products__info">
        <p class="cart-products__article">
          Артикул: <strong class="cart-products__article-id">{{ productItem.product.id }}</strong>
        </p>

        <p class="cart-products__caption" v-html="productItem.product.title"></p>

        <UiTags v-if="productItem.tags" :tags="product.tags" />

        <p class="cart-products__description" v-html="productItem.product.description"></p>

        <p v-if="productItem.tariff" class="cart-products__tariff">
          <component :is="`IconTariffs${productItem.product.tariff.icon}`" class="cart-products__tariff-icon" />
          <span class="cart-products__tariff-name">
            {{ productItem.product.tariff.name }}
          </span>
        </p>

      </div>

      <div class="cart-products__extra">
        <p class="cart-products__price">
          {{ productItem.product.price }}&nbsp;$
        </p>

        <button @click="removeProductFromCart(productItem.product.id)" type="button" class="cart-products__remove">
          <IconCartRemove />
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped src="./styles/cart-products.css"></style>
