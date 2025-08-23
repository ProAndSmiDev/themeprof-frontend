<script setup lang="ts">
import type { Products } from 'interfaces/Products'

interface Props {
  product: Products
}

defineProps<Props>()
</script>

<template>
  <article class="home-releases-card">
    <header class="home-releases-card__header">
      <img :src="product.photo.url" :alt="product.photo.alt" class="home-releases-card__photo">
      <h3 class="home-releases-card__title" v-html="product.name"></h3>
    </header>

    <p class="home-releases-card__description" v-html="product.description"></p>

    <UiTags :tags="product.tags" class="home-releases-card__tags" />
  </article>
</template>

<style scoped src="./styles/home-releases-card.css"></style>
