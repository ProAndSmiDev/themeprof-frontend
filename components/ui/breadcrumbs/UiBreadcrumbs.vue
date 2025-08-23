<script setup lang="ts">
interface Props {
  breadcrumbs: Breadcrumbs[]
}

defineProps<Props>()
</script>

<template>
<ul class="ui-breadcrumbs">
  <li class="ui-breadcrumbs__item">
    <NuxtLink href="/" class="ui-breadcrumbs__link">
      <IconHome />
    </NuxtLink>
  </li>
  <li
      v-for="(breadcrumbsItem, idx) in breadcrumbs"
      :key="idx"
      class="ui-breadcrumbs__item"
  >
    <IconArrowRight class="ui-breadcrumbs__arrow" />
    <NuxtLink
        :href="breadcrumbsItem?.url"
        :title="breadcrumbsItem.title"
        v-html="breadcrumbsItem.name"
        class="ui-breadcrumbs__link"
        :class="!breadcrumbsItem?.url ? 'ui-breadcrumbs__link--active' : ''"
    />
  </li>
</ul>
</template>

<style scoped src="./ui-breadcrumbs.css"></style>
