<script setup lang="ts">
interface Props {
  options: string[]
}

defineProps<Props>()
</script>

<template>
  <ul class="ui-tariffs-options">
    <li v-for="(optionsItem, idx) in options" :key="idx" class="ui-tariffs-options__item">
      <span class="ui-tariffs-options__point"></span>
      <p class="ui-tariffs-options__caption">
        {{ optionsItem }}
      </p>
    </li>
  </ul>
</template>

<style scoped src="./styles/ui-tariffs-options.css"></style>
