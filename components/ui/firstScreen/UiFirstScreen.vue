<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <section class="ui-first-screen">
    <UiFirstScreenTitle class="ui-first-screen__title" v-html="title" />
  </section>
</template>

<style scoped src="./styles/ui-first-screen.css"></style>
