<script setup lang="ts">
import type {Cart} from "interfaces/Cart";

interface Props {
  products: Cart[]
}

defineProps<Props>()
</script>

<template>
  <ul class="cart-products">
    <li
        v-for="(product, idx) in products"
        :key="idx"
        class="cart-products__item"
    >
      <img :src="product.photo.url" :alt="product.photo.alt" class="cart-products__photo">

      <div class="cart-products__info">
        <p class="cart-products__article">
          Артикул: <strong class="cart-products__article-id">{{ product.id }}</strong>
        </p>

        <p class="cart-products__caption" v-html="product.name"></p>

        <UiTags :tags="product.tags" />

        <p class="cart-products__description" v-html="product.description"></p>

        <p class="cart-products__tariff">
          <component :is="`IconTariffs${product.tariff.icon}`" class="cart-products__tariff-icon" />
          <span class="cart-products__tariff-name">
            {{ product.tariff.name }}
          </span>
        </p>

      </div>

      <div class="cart-products__extra">
        <p class="cart-products__price">
          {{ product.price }}&nbsp;₽
        </p>

        <button type="button" class="cart-products__remove">
          <IconCartRemove />
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped src="./cart-products.css"></style>
