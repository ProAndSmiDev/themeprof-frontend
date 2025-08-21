<script setup lang="ts">
interface Props {
  socials: Socials[]
}

defineProps<Props>()
</script>

<template>
  <ul class="ui-socials">
    <li v-for="(social, idx) in socials" :key="idx" class="ui-socials__item">
      <a :href="social.url.path" :title="social.url.title" target="_blank" class="ui-socials__link">
        <component filled :is="`IconSocials${social.icon}`" />
      </a>
    </li>
  </ul>
</template>

<style scoped src="./ui-socials.css"></style>
