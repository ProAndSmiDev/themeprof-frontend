<script setup lang="ts">
import { sizeType } from 'constants/sizeType'
import { themeType } from 'constants/themeType'
import type { Products } from 'interfaces/Products'

interface Props {
  product: Products
}

defineProps<Props>()
</script>

<template>
  <li class="products-catalog-item">
    <article class="products-catalog-item__card">
      <img
          :src="product.photo.url"
          :alt="product.photo.alt"
          class="products-catalog-item__photo"
      >

      <ProductsCatalogItemFeedback
          :feedback="product.feedback"
          class="products-catalog-item__feedback"
      />

      <header class="products-catalog-item__header">
        <p class="products-catalog-item__part">
          Артикул <strong>{{ product.id }}</strong>
        </p>

        <h3 class="products-catalog-item__title" v-html="product.name"></h3>
      </header>

      <p class="products-catalog-item__description" v-html="product.description"></p>

      <footer class="products-catalog-item__footer">
        <ProductsCatalogItemTariffs :tariffs="product.tariffs" />

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
          <UiButton title="Добавить шаблон в корзину">
            Добавить в корзину
          </UiButton>
        </div>
      </footer>
    </article>
  </li>
</template>

<style scoped src="./styles/products-catalog-item.css"></style>
