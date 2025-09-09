<script setup lang="ts">
import {type SortType, sortType} from 'constants/sortType'
import type { Catalog } from 'interfaces/Catalog'
import { useProductsStore } from 'store/products'

const store = useProductsStore()
const catalog = ref<Catalog>({})
const activeFilters = ref<string[]>([])
const products = computed(() => store.sortedAndFiltered)

watch([products, () => store.loading], ([newProducts, loading]) => {
  catalog.value = {
    products: newProducts,
    loaded: !loading,
    sortedBy: store.sortType,
    filteredBy: [...activeFilters.value]
  }
})

onMounted(async () => {
  if (store.loading || store.products.length === 0) {
    await store.fetchProducts()
  }

  store.applyFilters()
})

function updateSort(newSort: SortType) {
  store.setSortType(newSort)
}

function changeFilters(newFilters: string[]) {
  activeFilters.value = newFilters
  store.setReviewFilters(newFilters)
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

    <ProductsCatalogSort :sortedBy="store.sortType" @update:sortedBy="updateSort" />

    <div class="products-catalog__wrapper">
      <ProductsCatalogList
          v-if="catalog.loaded"
          :products="catalog.products"
          class="products-catalog__list"
      />
      <div v-else class="products-catalog__list">
        Загрузка продуктов...
      </div>
      <ProductsCatalogFilter @filtersChanged="changeFilters" class="products-catalog__filter" />
    </div>
  </section>
</template>

<style scoped src="./styles/products-catalog.css"></style>
