<script setup lang="ts">
interface Props {
  theme?: string
  title: string
  href: string
  size?: string
  fontSize?: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'default',
  size: 's20',
  fontSize: 's15'
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
