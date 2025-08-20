<script setup lang="ts">

</script>

<template>
  <h2 class="ui-title">
    <strong>
      <slot name="boldText"></slot>
    </strong>

    <slot></slot>
  </h2>
</template>

<style scoped src="./ui-title.css"></style>
