<script setup lang="ts">
interface Props {
  filter: Filter
}

const emit = defineEmits(['filtersChanged'])

defineProps<Props>()

function updateReviewFilter(selectedOptions: string[]) {
  emit('filtersChanged', selectedOptions)
}
</script>

<template>
  <li class="products-catalog-filter-item">
    <ProductsCatalogFilterRating
        :filter
        @update:filter="updateReviewFilter"
        class="products-catalog-filter-item__rating"
    />
  </li>
</template>

<style scoped src="./styles/products-catalog-filter-item.css"></style>
