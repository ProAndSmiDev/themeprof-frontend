<script setup lang="ts">
import type {Tariffs} from "interfaces/Tariffs";

interface Props {
  tariffs: Tariffs[]
}

defineProps<Props>()
</script>

<template>
  <ul class="products-catalog-item-tariffs">
    <li
        v-for="(tariffsItem, idx) in tariffs"
        :key="idx"
        class="products-catalog-item-tariffs__item"
    >
      <label class="products-catalog-item-tariffs__area">
        <input
            type="radio"
            :value="tariffsItem.name"
            name="catalogTariff"
            class="products-catalog-item-tariffs__input"
        >
        <span class="products-catalog-item-tariffs__radio"></span>
        <p class="products-catalog-item-tariffs__info">
          <component
              :is="`IconTariffs${tariffsItem.icon}`"
              class="products-catalog-item-tariffs__icon"
          />

          <span class="products-catalog-item-tariffs__text">
            {{ tariffsItem.name }}
          </span>
        </p>
        <p class="products-catalog-item-tariffs__value">{{ tariffsItem.price }}&nbsp;₽</p>
      </label>
    </li>
  </ul>
</template>

<style scoped src="./styles/products-catalog-item-tariffs.css"></style>
