<script setup lang="ts">
import { type ButtonType, buttonType } from 'constants/buttonType'
import { type ThemeType, themeType } from 'constants/themeType'

interface Props {
  theme?: ThemeType
  type?: ButtonType
  title: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: themeType.DEFAULT,
  type: buttonType.BUTTON
})
const uiButtonClasses = computed(() => ({
  [`ui-button--theme-${props.theme}`]: Boolean(props.theme)
}))
</script>

<template>
  <button class="ui-button" :type :class="uiButtonClasses">
    <span class="ui-button__wrapper">
      <span class="ui-button__text u-truncate">
        <slot></slot>
      </span>
    </span>
  </button>
</template>

<style scoped src="./ui-button.css"></style>
