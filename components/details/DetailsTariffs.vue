<script setup lang="ts">
import type { Tariffs } from 'interfaces/Tariffs'

interface Props {
  tariffs: Tariffs[]
}

defineProps<Props>()
</script>

<template>
  <ul class="details-tariffs">
    <li
        v-for="(tariff, idx) in tariffs"
        :key="idx"
        class="details-tariffs__item"
    >
      <p class="details-tariffs__info">
        <component :is="`IconTariffs${tariff.icon}`" class="details-tariffs__icon" />
        <strong class="details-tariffs__caption">
          {{ tariff.name }}
        </strong>
        <span class="details-tariffs__price">
          {{ tariff.price }}&nbsp;₽
        </span>
      </p>

      <UiTariffsOptions :options="tariff.options" />
      <UiTariffsBases :bases="tariff.bases" />
      <UiButton title="Добавить продукт в корзину">
        Добавить в корзину
      </UiButton>
    </li>
  </ul>
</template>

<style scoped src="./styles/details-tariffs.css"></style>
