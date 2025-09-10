<script setup lang="ts">
import type { SortType } from 'constants/sortType'

interface Props {
  sortedBy: SortType
}

defineProps<Props>()

const emit = defineEmits(['update:sortedBy'])

const sortData = [
  { icon: 'Default', caption: 'По умолчанию', value: 'default' },
  { icon: 'Expensive', caption: 'Сначала дорогие', value: 'expensive' },
  { icon: 'Cheap', caption: 'Сначала дешевые', value: 'cheap' }
]

function selectSort(sortValue: string) {
  emit('update:sortedBy', sortValue)
}
</script>

<template>
  <ul class="products-catalog-sort">
    <li v-for="(sortItem, idx) in sortData" :key="idx" class="products-catalog-sort__item">
      <button
          @click="selectSort(sortItem.value)"
          class="products-catalog-sort__toggler"
          type="button"
          :class="{'products-catalog-sort__toggler--active': sortItem.value === sortedBy}"
      >
        <component :is="`IconOrder${sortItem.icon}`" class="products-catalog-sort__icon" />
        <span class="products-catalog-sort__caption">{{ sortItem.caption }}</span>
      </button>
    </li>
  </ul>
</template>

<style scoped src="./styles/products-catalog-sort.css"></style>
