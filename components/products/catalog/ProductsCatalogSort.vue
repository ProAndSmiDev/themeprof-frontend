<script setup lang="ts">
const sortData = [
  {
    icon:     'Default',
    caption:  'По умолчанию',
    isActive: true,
  },
  {
    icon:    'Expensive',
    caption: 'Сначала дорогие',
  },
  {
    icon:    'Cheap',
    caption: 'Сначала дешевые',
  },
]
</script>

<template>
  <ul class="products-catalog-sort">
    <li v-for="(sortItem, idx) in sortData" :key="idx" class="products-catalog-sort__item">
      <button
          class="products-catalog-sort__toggler"
          type="button"
          :class="{'products-catalog-sort__toggler--active': sortItem?.isActive}"
      >
        <component :is="`IconOrder${sortItem.icon}`" class="products-catalog-sort__icon" />
        <span class="products-catalog-sort__caption">{{ sortItem.caption }}</span>
      </button>
    </li>
  </ul>
</template>

<style scoped src="./styles/products-catalog-sort.css"></style>
