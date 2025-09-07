<script setup lang="ts">
interface Props {
  product: Object
}

defineProps<Props>()
</script>

<template>
  <div class="details-info">
    <ul class="details-info__tabs">
      <li class="details-info__tabs-item">
        <button class="details-info__tabs-clicker details-info__tabs-clicker--active">
          Описание
        </button>
      </li>
      <li class="details-info__tabs-item">
        <button class="details-info__tabs-clicker">
          Характеристики
        </button>
      </li>
      <li class="details-info__tabs-item">
        <button class="details-info__tabs-clicker">
          Отзывы ({{ product.rating.count }})
        </button>
      </li>
    </ul>

    <div class="details-info__content">
      <p class="detailes-info__article">
        Артикул: <span class="details-info__number">{{ product.id }}</span>
        <button type="button" class="details-info__copy">
          <IconCopy />
        </button>
      </p>

      <img :src="product.image" :alt="product.title" class="details-info__photo" />

      <p class="details-info__text" v-html="product.description"></p>
    </div>
  </div>
</template>

<style scoped src="./styles/details-info.css"></style>
