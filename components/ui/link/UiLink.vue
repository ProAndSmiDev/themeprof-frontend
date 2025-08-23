<script setup lang="ts">
import { type SizeType, sizeType } from 'constants/sizeType'
import { type ThemeType, themeType } from 'constants/themeType'

interface Props {
  theme?: ThemeType
  title: string
  href: string
  size?: SizeType
  fontSize?: SizeType
}

const props = withDefaults(defineProps<Props>(), {
  theme: themeType.DEFAULT,
  size: sizeType.S20,
  fontSize: sizeType.S15
})
const uiLinkClasses = computed(() => ({
  [`ui-link--theme-${props.theme}`]: Boolean(props.theme),
  [`ui-link--size-${props.size}`]: Boolean(props.size),
  [`ui-link--font-${props.fontSize}`]: Boolean(props.fontSize)
}))
</script>

<template>
  <NuxtLink
      :href
      :title
      :class="['ui-link', uiLinkClasses]"
  >
    <span class="ui-link__wrapper">
      <span class="ui-link__text u-truncate">
        <slot></slot>
      </span>

      <span v-if="$slots.icon" class="ui-link__icon">
        <slot name="icon"></slot>
      </span>
    </span>
  </NuxtLink>
</template>

<style scoped src="./styles/main.css"></style>
