<script setup lang="ts">
interface Props {
  stat: Stats
}

defineProps<Props>()
</script>

<template>
  <article class="home-stats-card">
    <header class="home-stats-card__header">
      <p class="home-stats-card__bg">
        <component :is="`IconStats${stat.icon}`" filled class="home-stats-card__icon"/>
      </p>

      <h3 class="home-stats-card__title" v-html="stat.title"></h3>
    </header>

    <p class="home-stats-card__counter" v-html="stat.info.counter"></p>
    <p class="home-stats-card__caption">
      {{ stat.info.caption }}
    </p>
  </article>
</template>

<style scoped src="./styles/home-stats-card.css"></style>
