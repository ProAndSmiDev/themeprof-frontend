<script setup lang="ts">
const stats: Stats[] = [
  {
    "icon": "Rocket",
    "title": "Экспертность",
    "info": {
      "counter": "560+",
      "caption": "Продуктов продано"
    }
  },
  {
    "icon": "Hands",
    "title": "Нам&nbsp;доверяют",
    "info": {
      "counter": "780+",
      "caption": "Довольных клиентов"
    }
  },
  {
    "icon": "UmbrellaWithMoney",
    "title": "С&nbsp;нами выгодно",
    "info": {
      "counter": "1&nbsp;900&nbsp;678&nbsp;₽",
      "caption": "Сэкономили своим клиентам"
    }
  }
]
</script>

<template>
  <section class="home-stats">
    <UiTitle>
      <template #boldText>
        У&nbsp;нас
      </template>
      за&nbsp;всё время
    </UiTitle>

    <HomeStatsList :stats />
  </section>
</template>

<style scoped src="./styles/home-stats.css"></style>
