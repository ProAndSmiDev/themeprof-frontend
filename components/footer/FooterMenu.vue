<script setup lang="ts">
interface Props {
  footerMenu: Menu[]
}

defineProps<Props>()
</script>

<template>
  <ul class="footer-menu">
    <li v-for="(footerMenuItem, idx) in footerMenu" :key="idx" class="footer-menu__item">
      <NuxtLink :href="footerMenuItem.url.path" :title="footerMenuItem.url.title" class="footer-menu__link" activeClass="footer-menu__link--active">
        {{ footerMenuItem.caption }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped src="./styles/footer-menu.css"></style>
