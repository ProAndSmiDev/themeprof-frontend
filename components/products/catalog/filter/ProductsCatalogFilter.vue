<script setup lang="ts">
import { useProductsStore } from 'store/products'

const emit = defineEmits(['filtersChanged'])

const store = useProductsStore()

const filter: Filter[] = [
  /*{
    caption: 'Категории:',
    count: 4,
    options: [
      {
        caption: 'Одежда',
        value: 'Одежда',
        name: 'clothes',
        isChecked: true
      },
      {
        caption: 'Обувь',
        value: 'Обувь',
        name: 'shoes',
        isChecked: true
      },
      {
        caption: 'Духи',
        value: 'Духи',
        name: 'aroma',
        isChecked: true
      },
      {
        caption: 'Спорт',
        value: 'Спорт',
        name: 'sport',
        isChecked: true
      },
      {
        caption: 'Техника',
        value: 'Техника',
        name: 'technique'
      },
      {
        caption: 'Фрукты',
        value: 'Фрукты',
        name: 'fruits'
      },
      {
        caption: 'Овощи',
        value: 'Овощи',
        name: 'vegetables'
      },
      {
        caption: 'Хлебобулочные изделия',
        value: 'Хлебобулочные изделия',
        name: 'cakes'
      },
      {
        caption: 'Игрушки',
        value: 'Игрушки',
        name: 'toys'
      }
    ]
  },*/
  {
    caption: 'Количество отзывов:',
    options: [
      {
        caption: '10+',
        value: 'more_than_10',
        name: '10'
      },
      {
        caption: '50+',
        value: 'more_than_50',
        name: '50'
      },
      {
        caption: '100+',
        value: 'more_than_100',
        name: '100'
      },
      {
        caption: 'от 4',
        value: 'more_above_4',
        name: '4-stars-and-more'
      }
    ]
  }
]

function handleFiltersChanged(selectedFilters: string[]) {
  emit('filtersChanged', selectedFilters)
}
</script>

<template>
  <ul class="products-catalog-filter">
    <ProductsCatalogFilterItem
        v-for="(filterItem, idx) in filter"
        :key="idx"
        :filter="filterItem"
        @filtersChanged="handleFiltersChanged"
        class="products-catalog-filter__item"
    />
  </ul>
</template>

<style scoped src="./styles/products-catalog-filter.css"></style>
