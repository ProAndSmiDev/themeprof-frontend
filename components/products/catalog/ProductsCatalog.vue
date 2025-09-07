<script setup lang="ts">
import { useProductsStore } from "store/products"

const productsStore = useProductsStore()

onMounted(async () => {
  if (productsStore.loading || productsStore.products.length === 0) {
    await productsStore.fetchProducts()
  }
})

const { data: products } = useAsyncData<Object[]>('products', () => fetch('https://fakestoreapi.com/products').then((res) => res.json()));
</script>

<template>
  <section class="products-catalog">
    <UiTitle>
      <template #boldText>
        Выберите
      </template>
      продукт
    </UiTitle>

    <ProductsCatalogSort />

    <div class="products-catalog__wrapper">
      <ProductsCatalogList
          v-if="!productsStore.loading"
          :products="productsStore.products"
          class="products-catalog__list"
      />
      <ProductsCatalogFilter class="products-catalog__filter" />
    </div>
  </section>
</template>

<style scoped src="./styles/products-catalog.css"></style>
