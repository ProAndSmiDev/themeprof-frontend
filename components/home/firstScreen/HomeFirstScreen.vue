<script setup lang="ts"></script>

<template>
  <UiFirstScreenPuzzle class="home-first-screen">
    <template #title>
      <span class="home-first-screen__title">
        Уникальные продукты для клиентов
      </span>
    </template>
    <p class="home-first-screen__description">
      <IconTickSquare class="home-first-screen__icon"/>
      <span class="home-first-screen__text">Ещё никогда не было так просто сделать заказ</span>
    </p>

    <UiLink
        href="/products"
        title="Заказать продукт"
        class="home-first-screen__link"
    >
      <template #icon>
        <IconArrowUpRight />
      </template>
    </UiLink>
  </UiFirstScreenPuzzle>
</template>

<style scoped src="./styles/home-first-screen.css"></style>
