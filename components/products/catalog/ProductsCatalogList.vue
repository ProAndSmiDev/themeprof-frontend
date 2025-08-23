<script setup lang="ts">
import ProductsCatalogItem from 'components/products/catalog/ProductsCatalogItem.vue'
import type { Products } from 'interfaces/Products'

interface Props {
  products: Products[]
  isRecommended?: boolean
}

const props = defineProps<Props>()

const productsCatalogListItemClasses = computed(() => ({
  'products-catalog-list__item--catalog': !props.isRecommended,
  'products-catalog-list__item--recommended': props.isRecommended
}))
</script>

<template>
  <ul class="products-catalog-list">
    <ProductsCatalogItem
        v-for="product in products"
        :key="product.id"
        :product
        class="products-catalog-list__item"
        :class="productsCatalogListItemClasses" />
  </ul>
</template>

<style scoped src="./styles/products-catalog-list.css"></style>
