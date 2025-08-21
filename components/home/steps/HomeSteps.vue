<script setup lang="ts">
const steps: Steps[] = [
  {
    title: {
      colored: 'Выберите ',
      normal: 'подходящий продукт и&nbsp;тариф',
    },
    icon: 'Choice',
  },
  {
    title: {
      colored: 'Добавьте ',
      normal: 'выбранный продукт в&nbsp;корзину',
    },
    icon: 'Cart',
  },
  {
    title: {
      colored: 'Оформите ',
      normal: 'свой заказ',
    },
    icon: 'Order',
  },
  {
    title: {
      colored: 'Получите ',
      normal: 'продукт',
    },
    icon: 'Email',
  },
]
</script>

<template>
  <section class="home-steps">
    <UiTitle class="home-steps__title">
      <template #boldText>
        С&nbsp;нами работать
      </template>
      очень просто
    </UiTitle>

    <HomeStepsList :steps />
  </section>
</template>

<style scoped src="./styles/home-steps.css"></style>
