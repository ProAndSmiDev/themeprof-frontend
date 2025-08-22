<script setup lang="ts">
import { tariffsName } from 'constants/tariffs'
import type { Tariffs } from 'interfaces/Tariffs'

const tariffs: Tariffs[] = [
  {
    name: tariffsName.DEFAULT,
    icon: 'Rocket',
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
    bases: ['ощущениях', 'ароматах', 'восприятии']
  },
  {
    name: tariffsName.STANDARD,
    icon: 'Fire',
    options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5'],
    bases: ['ощущениях', 'ароматах', 'восприятии', 'отзывах', 'оценках', 'актуальности', 'качестве']
  },
  {
    name: tariffsName.ADVANCED,
    icon: 'Lightning',
    options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6', 'Опция 7'],
    bases: [
      'ощущениях',
      'ароматах',
      'восприятии',
      'отзывах',
      'оценках',
      'актуальности',
      'качестве',
      'истории',
      'стоимости',
      'красоте',
      'комфорте',
      'уюте'
    ]
  }
]
</script>

<template>
  <section class="products-tariffs">
    <UiTitle class="products-tariffs__title">
      <template #boldText>
        Выберите идеальный план:
      </template>

      наши гибкие тарифы для каждого бюджета!
    </UiTitle>

    <ul class="products-tariffs__list">
      <li
          v-for="(tariff, idx) in tariffs"
          :key="idx"
          class="products-tariffs__item"
      >
        <ProductsTariffsCard :tariff class="products-tariffs__card" />
      </li>
    </ul>
  </section>
</template>

<style scoped src="./styles/products-tariffs.css"></style>
