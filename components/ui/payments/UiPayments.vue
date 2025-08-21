<script setup lang="ts">
interface Props {
  payments: string[]
}

defineProps<Props>()
</script>

<template>
  <ul class="ui-payments">
    <li
        v-for="(payment, idx) in payments"
        :key="idx"
        class="ui-payments__item"
        :class="`ui-payments__item--${payment.toLowerCase()}`"
    >
      <component filled :is="`IconPayments${payment}`" />
    </li>
  </ul>
</template>

<style scoped src="./ui-payments.css"></style>
