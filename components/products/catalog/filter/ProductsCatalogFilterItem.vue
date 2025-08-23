<script setup lang="ts">
interface Props {
  filter: Object
}

defineProps<Props>()
</script>

<template>
  <li class="products-catalog-filter-item">
    <article class="products-catalog-filter-item__card">
      <header class="products-catalog-filter-item__header">
        <h3 class="products-catalog-filter-item__title">
          {{ filter.caption }}
        </h3>

        <span v-if="filter.count" class="products-catalog-filter-item__counter">
          {{ filter.count }}
        </span>
      </header>

      <ul class="products-catalog-filter-item__options">
        <li
            v-for="(optionsItem, idx) in filter.options"
            :key="idx"
            class="products-catalog-filter-item__options-item"
        >
          <input
              type="checkbox"
              :value="optionsItem.value"
              :checked="optionsItem.isChecked"
              :id="`filter-${optionsItem.name}`"
              class="products-catalog-filter-item__options-input"
          />
            <label
                :for="`filter-${optionsItem.name}`"
                class="products-catalog-filter-item__options-area">
              <span class="products-catalog-filter-item__options-checkbox" :class="{'products-catalog-filter-item__options-checkbox--checked': optionsItem.isChecked}">
                <IconTickDefault class="products-catalog-filter-item__options-tick" />
              </span>

              <span class="products-catalog-filter-item__options-caption">
                {{ optionsItem.caption }}
              </span>
            </label>
        </li>
      </ul>
    </article>
  </li>
</template>

<style scoped src="./styles/products-catalog-filter-item.css"></style>
