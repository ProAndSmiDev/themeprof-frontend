<script setup lang="ts">
import UiFirstScreenTitle from "components/ui/firstScreen/UiFirstScreenTitle.vue";
</script>

<template>
  <section class="ui-first-screen-puzzle">
    <UiFirstScreenTitle v-if="$slots.title">
      <slot name="title"></slot>
    </UiFirstScreenTitle>

    <slot></slot>
  </section>
</template>

<style scoped src="./styles/ui-first-screen-puzzle.css"></style>
