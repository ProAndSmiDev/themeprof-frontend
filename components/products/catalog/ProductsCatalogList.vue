<script setup lang="ts">
interface Props {
  products?: Object[]
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
    <li
        v-for="product in products"
        :key="product.id"
        class="products-catalog-list__item"
        :class="productsCatalogListItemClasses"
    >
      <ProductsCatalogItem
          v-if="product"
          :product="product"
          class="products-catalog-list__card"
      />
    </li>
  </ul>
</template>

<style scoped src="./styles/products-catalog-list.css"></style>
