<script setup lang="ts">
interface Props {
  bases: string[]
  theme?: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'default'
})
const uiTariffsBasesClasses = computed(() => ({
  [`ui-tariffs-bases--theme-${props.theme}`]: Boolean(props.theme),
}))
</script>

<template>
  <div class="ui-tariffs-bases" :class="uiTariffsBasesClasses">
    <p class="ui-tariffs-bases__caption">Основано на:</p>

    <ul class="ui-tariffs-bases__list">
      <li v-for="(basesItem, idx) in bases" :key="idx" class="ui-tariffs-bases__item">
        {{ basesItem }}
      </li>
    </ul>
  </div>
</template>

<style scoped src="./styles/ui-tariffs-bases.css"></style>
