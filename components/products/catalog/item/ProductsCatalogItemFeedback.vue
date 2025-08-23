<script setup lang="ts">
import type {ProductsFeedback} from "interfaces/Products";

interface Props {
  feedback: ProductsFeedback
}
const props = defineProps<Props>()
const fullStarCount = parseInt(props.feedback.rate, 10)
const emptyStarCount = computed(() => 5 - fullStarCount)
</script>

<template>
  <div class="products-catalog-item-feedback">
    <div class="products-catalog-item-feedback__rate">
      <ul class="products-catalog-item-feedback__stars">
        <li
            v-for="fullStarItem in fullStarCount"
            :key="fullStarItem"
            class="products-catalog-item-feedback__star products-catalog-item-feedback__star--active"
        >
          <IconStar />
        </li>
        <li
            v-for="emptyStarItem in emptyStarCount"
            :key="emptyStarItem"
            class="products-catalog-item-feedback__star">
          <IconStar />
        </li>
      </ul>

      <p class="products-catalog-item-feedback__count">
        {{ feedback.rate }}/5.0
      </p>
    </div>

    <div class="products-catalog-item-feedback__comments">
      <IconChat class="products-catalog-item-feedback__icon" />
      <p class="products-catalog-item-feedback__count">
        {{ feedback.comments }}
      </p>
    </div>
  </div>
</template>

<style scoped src="./styles/products-catalog-item-feedback.css"></style>
