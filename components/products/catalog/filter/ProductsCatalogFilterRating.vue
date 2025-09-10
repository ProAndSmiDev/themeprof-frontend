<script setup lang="ts">
interface Props {
  filter: Filter
}

const props = defineProps<Props>()

const emit = defineEmits(['update:filter'])
const selectedOptions = ref<string[]>(props.filter.options.filter((opt) => opt.isChecked).map((opt) => opt.value))

watch(selectedOptions, (newVal) => {
  emit('update:filter', newVal)
})
</script>

<template>
  <article class="products-catalog-filter-rating">
    <header class="products-catalog-filter-rating__header">
      <h3 class="products-catalog-filter-rating__title">
        Количество отзывов:
      </h3>
    </header>

    <ul class="products-catalog-filter-rating__options">
      <li
          v-for="(optionsItem, idx) in filter.options"
          :key="idx"
          class="products-catalog-filter-rating__item"
      >
        <input
            type="checkbox"
            :value="optionsItem.value"
            :checked="optionsItem.isChecked"
            v-model="selectedOptions"
            :id="`filter-${optionsItem.name}`"
            class="products-catalog-filter-rating__input"
        />
        <label
            :for="`filter-${optionsItem.name}`"
            class="products-catalog-filter-rating__area">
              <span class="products-catalog-filter-rating__checkbox" :class="{'products-catalog-filter-rating__checkbox--checked': optionsItem.isChecked}">
                <IconTickDefault class="products-catalog-filter-rating__tick" />
              </span>

          <span class="products-catalog-filter-rating__caption">
            {{ optionsItem.caption }}
            <IconStar v-if="optionsItem.value === 'more_above_4'" class="products-catalog-filter-rating__star" />
          </span>
        </label>
      </li>
    </ul>
  </article>
</template>

<style scoped src="./styles/products-catalog-filter-rating.css"></style>
