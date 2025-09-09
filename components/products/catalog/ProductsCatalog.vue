<script setup lang="ts">
import {type SortType, sortType} from 'constants/sortType'
import type { Catalog } from 'interfaces/Catalog'
import { useProductsStore } from 'store/products'

const productsStore = useProductsStore()
const catalog = ref<Catalog>({})
const sortedBy = ref<SortType>(sortType.DEFAULT)
const filteredProducts = computed(() => {
  let products = productsStore.products

  if (sortedBy.value === sortType.EXPENSIVE) {
    products = [...products].sort((a, b) => b.price - a.price)
  } else if (sortedBy.value === sortType.CHEAP) {
    products = [...products].sort((a, b) => a.price - b.price)
  }

  return products
})

onMounted(async () => {
  if (productsStore.loading || productsStore.products.length === 0) {
    await productsStore.fetchProducts()
  }

  catalog.value = {
    products: productsStore.products,
    loaded: !productsStore.loading,
    sortedBy: sortType.DEFAULT,
    filteredBy: ['одежда', 'спорт']
  }
})

function updateSort(newSort: SortType) {
  sortedBy.value = newSort
  catalog.value.products = filteredProducts.value
}
</script>

<template>
  <section class="products-catalog">
    <UiTitle>
      <template #boldText>
        Выберите
      </template>
      продукт
    </UiTitle>

    <ProductsCatalogSort :sortedBy @update:sortedBy="updateSort" />

    <div class="products-catalog__wrapper">
      <ProductsCatalogList
          v-if="catalog.loaded"
          :products="catalog.products"
          class="products-catalog__list"
      />
      <div v-else class="products-catalog__list">
        Загрузка продуктов...
      </div>
      <ProductsCatalogFilter class="products-catalog__filter" />
    </div>
  </section>
</template>

<style scoped src="./styles/products-catalog.css"></style>
