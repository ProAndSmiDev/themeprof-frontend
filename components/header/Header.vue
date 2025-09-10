<script setup lang="ts">
import { useCartStore } from 'store/cart'

const cart = useCartStore()
const cartItemCount = computed(() => cart.totalItems)

const menu: Menu[] = [
  {
    caption: 'Продукты',
    url: {
      path: '/products',
      title: 'Перейти на страницу «Продукты»'
    }
  }
]
</script>

<template>
  <header class="header">
    <NuxtLink
        href="/"
        title="Перейти на главную"
        class="header__action header__action--left"
        activeClass="header__action--active"
    >
      <IconLogo filled class="header__logo" />
    </NuxtLink>

    <div class="header__wrapper u-container">
      <UiMenu class="header__menu" :menu />

      <button type="button" class="header__callback">
        <span class="header__callback-text">Связаться с&nbsp;нами</span>
        <IconArrowUpRight filled class="header__callback-icon" />
      </button>

      <NuxtLink
          href="/cart"
          title="Перейти в корзину"
          class="header__action header__action--mobile header__action--desktop-hidden"
      >
        <span class="header__action-wrapper">
          <IconCartOrder class="header__cart" />

          <span class="header__cart-count">{{ cartItemCount }}</span>
        </span>
      </NuxtLink>
    </div>

    <NuxtLink
        href="/cart"
        title="Перейти в корзину"
        class="header__action header__action--right header__action--mobile-hidden"
    >
      <span class="header__action-wrapper">
        <IconCartOrder class="header__cart" />

        <span class="header__cart-count">{{ cartItemCount }}</span>
      </span>
    </NuxtLink>

    <NuxtLink
        href="/"
        title="Открыть/Закрыть меню"
        aria-label="Открыть/Закрыть меню"
        class="header__action header__action--right header__action--desktop-hidden"
    >
      <span class="header__action-line"></span>
      <span class="header__action-line"></span>
      <span class="header__action-line"></span>
    </NuxtLink>
  </header>
</template>

<style scoped src="./header.css"></style>
