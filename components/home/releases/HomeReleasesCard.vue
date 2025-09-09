<script setup lang="ts">
interface Props {
  product: Object
}

defineProps<Props>()
</script>

<template>
  <article class="home-releases-card">
    <header class="home-releases-card__header">
      <img :src="product.image" :alt="product.title" class="home-releases-card__photo">
      <h3 class="home-releases-card__title" v-html="product.title"></h3>
    </header>

    <p class="home-releases-card__description" v-html="product.description"></p>

    <UiTags v-if="product.tags" :tags="product.tags" class="home-releases-card__tags" />
  </article>
</template>

<style scoped src="./styles/home-releases-card.css"></style>
