<script setup lang="ts">
import HomeStatsCard from "components/home/stats/HomeStatsCard.vue";

interface Props {
  stats: Stats[]
}

defineProps<Props>()
</script>

<template>
  <ul class="home-stats-list">
    <li v-for="(stat, idx) in stats" :key="idx" class="home-stats-list__item">
      <HomeStatsCard :stat />
    </li>
  </ul>
</template>

<style scoped src="./styles/home-stats-list.css"></style>
