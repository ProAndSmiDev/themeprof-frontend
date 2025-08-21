<script setup lang="ts">
interface Props {
  steps: Steps[]
}
defineProps<Props>()
</script>

<template>
  <ul class="home-steps-list">
    <li v-for="(step, idx) in steps" :key="idx" class="home-steps-list__item">
      <component filled :is="`IconSteps${step.icon}`" class="home-steps-list__icon" />

      <h3 class="home-steps-list__title">
        <span class="home-steps-list__title--colored">
          {{ step.title.colored }}
        </span>
        <span v-html="step.title.normal"></span>
      </h3>
    </li>
  </ul>
</template>

<style scoped src="./styles/home-steps-list.css"></style>
