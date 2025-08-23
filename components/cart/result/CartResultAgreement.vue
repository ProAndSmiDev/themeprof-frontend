<script setup lang="ts"></script>

<template>
  <p class="cart-result-agreement">
    Нажимая на кнопку «Оплатить» я&nbsp;соглашаюсь на
    <NuxtLink
        href="/"
        title="Ознакомиться с обработкой персональных данных"
        class="cart-result-agreement__link"
    >
      Обработку персональных данных
    </NuxtLink>
    и подтверждаю ознакомление с
    <NuxtLink
        href="/"
        title="Ознакомиться с правилами возврата"
        class="cart-result-agreement__link"
    >
      Правилами возврата
    </NuxtLink>
  </p>
</template>

<style scoped src="./styles/cart-result-agreement.css"></style>
