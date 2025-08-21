<script setup lang="ts">
interface Props {
  tags: string[]
}

defineProps<Props>()
</script>

<template>
  <ul class="ui-tags">
    <li v-for="(tag, idx) in tags" :key="idx" class="ui-tags__item">
      #{{ tag }}
    </li>
  </ul>
</template>

<style scoped src="./ui-tags.css"></style>
