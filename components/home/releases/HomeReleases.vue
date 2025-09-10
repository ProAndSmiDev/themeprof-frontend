<script setup lang="ts">
import {useProductsStore} from "store/products";

const store = useProductsStore()
const releaseProducts = computed(() => store.products.slice(-4))

onMounted(async () => {
  if (store.loading || store.products.length === 0) {
    await store.fetchProducts()
  }
})
</script>

<template>
  <section class="home-releases">
    <header class="home-releases__header">
      <UiTitle>
        <template #boldText>
          Новинки
        </template>
        этого месяца
      </UiTitle>
      <p class="home-releases__description">
        <strong>Свежие продукты этого месяца только для вас!</strong>
        Покупайте новые продукты по выгодной цене и только у нас!
      </p>
    </header>

    <HomeReleasesList :products="releaseProducts" />

    <UiLink
        href="/products"
        title="Посмотреть все текущие новинки этого месяца"
        class="home-releases__link"
    >
      <template #icon>
        <IconArrowUpRight />
      </template>
      Все новинки
    </UiLink>
  </section>
</template>

<style scoped src="./styles/home-releases.css"></style>
