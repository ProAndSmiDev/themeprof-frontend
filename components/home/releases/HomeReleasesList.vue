<script setup lang="ts">
interface Props {
  products: Object[]
}

defineProps<Props>()
</script>

<template>
  <ul class="home-releases-list">
    <li v-for="product in products" :key="product.id" class="home-releases-list__item">
      <HomeReleasesCard class="home-releases-list__card" :product />
    </li>
  </ul>
</template>

<style scoped src="./styles/home-releases-list.css"></style>
