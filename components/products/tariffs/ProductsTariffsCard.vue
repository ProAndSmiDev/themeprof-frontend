<script setup lang="ts">
import type { Tariffs } from 'interfaces/Tariffs'

interface Props {
  tariff: Tariffs
}

defineProps<Props>()
</script>

<template>
  <article class="products-tariffs-card">
    <component :is="`IconTariffs${tariff.icon}`" filled class="products-tariffs-card__icon" />

    <div class="products-tariffs-card__wrapper">
      <header class="products-tariffs-card__header">
        <h3 class="products-tariffs-card__title">
          {{ tariff.name }}
        </h3>
      </header>

      <UiTariffsOptions :options="tariff.options" class="products-tariffs-card__options" />
      <UiTariffsBases :bases="tariff.bases" class="products-tariffs-card__bases" />
    </div>
  </article>
</template>

<style scoped src="./styles/products-tariffs-card.css"></style>
