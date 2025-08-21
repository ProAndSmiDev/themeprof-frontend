<script setup lang="ts">
interface Props {
  menu: Menu[]
  place: 'header' | 'footer'
  uppercase: boolean
}

const props = withDefaults(defineProps<Props>(), {
  place: 'header'
})
const uiMenuClasses = computed(() => ({
  [`ui-menu--${props.place}`]: Boolean(props.place)
}))
const uiMenuLinkClasses = computed(() => ({
  'ui-menu__link--uppercase': props.uppercase
}))
</script>

<template>
  <ul class="ui-menu" :class="uiMenuClasses">
    <li v-for="(menuItem, idx) in menu" :key="idx" class="ui-menu__item">
      <NuxtLink :href="menuItem.url.path" :title="menuItem.url.title" class="ui-menu__link" activeClass="ui-menu__link--active" :class="uiMenuLinkClasses">
        {{ menuItem.caption }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped src="./ui-menu.css"></style>
