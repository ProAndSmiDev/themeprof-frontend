<script setup lang="ts">
import type {Cart} from "interfaces/Cart";
import {tariffsName} from "constants/tariffs";

const breadcrumbs = [
  {
    name: 'Корзина'
  },
]
const cartProducts: Cart[] = [
  {
    id: 321056,
    photo: {
      url: '/img/products/examples/01.jpg',
      alt: 'Макет шаблона «Wordpress 01»'
    },
    name: 'Готовый сайт на&nbsp;WordPress&nbsp;&mdash; Выкуп авто',
    description:
        'Комплексное решение с&nbsp;разработкой UI/UX, реализация на&nbsp;Laravel. Более 60*2 экранов сервиса, интерактивный прототип, frontend, backend',
    tags: ['Адаптивный', 'Лендинг', 'Интернет-магазин'],
    tariff: {
      icon: "Rocket",
      name: "Быстрый старт"
    },
    price: 1000,
  },
  {
    id: 300656,
    photo: {
      url: '/img/products/examples/02.jpg',
      alt: 'Макет шаблона «Школа подготовительных курсов»'
    },
    name: 'Шаблон сайта школы подготовительных курсов',
    description:
        'Комплексное решение с&nbsp;разработкой UI/UX, реализация на&nbsp;Laravel. Более 60*2 экранов сервиса, интерактивный прототип, frontend, backend',
    tags: ['Адаптивный', 'Лендинг', 'Каталог'],
    tariff: {
      icon: "Fire",
      name: "Оптимальный"
    },
    price: 2000,
  },
  {
    id: 187560,
    photo: {
      url: '/img/products/examples/03.jpg',
      alt: 'Макет шаблона «Доставка еды»'
    },
    name: 'Шаблон доставки еды, пиццы с&nbsp;ингредиентами',
    description:
        'Комплексное решение с&nbsp;разработкой UI/UX, реализация на&nbsp;Laravel. Более 60*2 экранов сервиса, интерактивный прототип, frontend, backend',
    tags: ['Адаптивный', 'Лендинг'],
    tariff: {
      icon: "Lightning",
      name: "Под ключ",
    },
    price: 3000,
  },
  {
    id: 65321,
    photo: {
      url: '/img/products/examples/04.jpg',
      alt: 'Макет шаблона «Сайт сантехника»'
    },
    name: 'Лендинг шаблон сайта сантехника - WordPress',
    description:
        'Комплексное решение с&nbsp;разработкой UI/UX, реализация на&nbsp;Laravel. Более 60*2 экранов сервиса, интерактивный прототип, frontend, backend',
    tags: ['Адаптивный', 'Лендинг'],
    tariff: {
      icon: "Fire",
      name: "Оптимальный"
    },
    price: 2000,
  },
]
</script>

<template>
  <div class="cart">
    <UiBreadcrumbs :breadcrumbs class="cart__breadcrumbs" />
    <UiFirstScreen title="Корзина" class="cart__first-screen" />

    <div class="cart__content">
      <CartProducts :products="cartProducts" class="cart__products" />
    </div>
  </div>
</template>

<style scoped src="./cart.css"></style>
