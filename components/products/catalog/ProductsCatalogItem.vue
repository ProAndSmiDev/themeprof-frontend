<script setup lang="ts">
import { sizeType } from 'constants/sizeType'
import { themeType } from 'constants/themeType'
import { useCartStore } from 'store/cart'

interface Props {
  product: Object
}

const props = defineProps<Props>()
const cart = useCartStore()
const product = props.product

function addToCart() {
  cart.addProduct(product, 1)
}
</script>

<template>
  <article class="products-catalog-item__card">
    <img
        :src="product.image"
        :alt="product.title"
        class="products-catalog-item__photo"
    >

    <ProductsCatalogItemFeedback
        :feedback="{rate: product.rating.rate, comments: product.rating.count}"
        class="products-catalog-item__feedback"
    />

    <header class="products-catalog-item__header">
      <p class="products-catalog-item__part">
        Артикул <strong>{{ product.id }}</strong>
      </p>

      <h3 class="products-catalog-item__title" v-html="product.title"></h3>
    </header>

    <p class="products-catalog-item__description" v-html="product.description"></p>

    <footer class="products-catalog-item__footer">
      <ProductsCatalogItemTariffs v-if="product.tariffs" :tariffs="product.tariffs" />

      <p class="products-catalog-item__price">
        {{ product.price }}$
      </p>

      <div class="products-catalog-item__actions">
        <UiLink
            :href="`/products/${product.id}`"
            :theme="themeType.LIGHT"
            title="Подробнее о продукте"
            :size="sizeType.S15"
            :fontSize="sizeType.S12"
        >
          Подробнее
        </UiLink>
        <UiButton
            @click="addToCart"
            title="Добавить шаблон в корзину"
        >
          Добавить в корзину
        </UiButton>
      </div>
    </footer>
  </article>
</template>

<style scoped src="./styles/products-catalog-item.css"></style>
