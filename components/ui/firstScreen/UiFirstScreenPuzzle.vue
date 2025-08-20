<script setup lang="ts"></script>

<template>
  <section class="ui-first-screen-puzzle">
    <h1 v-if="$slots.title" class="ui-first-screen-puzzle__title">
      <slot name="title"></slot>
    </h1>

    <slot></slot>
  </section>
</template>

<style scoped src="./styles/ui-first-screen-puzzle.css"></style>
