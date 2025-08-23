<script setup lang="ts">
import type {Products} from "interfaces/Products";
import {tariffsName} from "constants/tariffs";

const products: Products[] = [
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
    feedback: {
      rate: '4.1',
      comments: 132
    },
    tariffs: [
      {
        name: tariffsName.DEFAULT,
        price: 1200,
        options: ['Опция 1', 'Опция 2', 'Опция 3'],
        bases: ['ощущениях', 'ароматах', 'восприятии'],
        icon: 'rocket'
      },
      {
        name: tariffsName.STANDARD,
        price: 2600,
        options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6'],
        bases: ['ощущениях', 'ароматах', 'восприятии', 'отзывах', 'оценках', 'актуальности', 'качестве'],
        icon: 'fire'
      },
      {
        name: tariffsName.ADVANCED,
        price: 4500,
        options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6', 'Опция 7', 'Опция 8', 'Опция 9'],
        bases: [
          'ощущениях',
          'ароматах',
          'восприятии',
          'отзывах',
          'оценках',
          'актуальности',
          'качестве',
          'истории',
          'стоимости',
          'красоте',
          'комфорте',
          'уюте'
        ],
        icon: 'lightning'
      }
    ]
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
    feedback: {
      rate: '3.2',
      comments: 156
    },
    tariffs: [
      {
        name: tariffsName.DEFAULT,
        price: 2400,
        options: ['Опция 1', 'Опция 2', 'Опция 3'],
        bases: ['ощущениях', 'ароматах', 'восприятии'],
        icon: 'rocket'
      },
      {
        name: tariffsName.STANDARD,
        price: 4800,
        options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6'],
        bases: ['ощущениях', 'ароматах', 'восприятии', 'отзывах', 'оценках', 'актуальности', 'качестве'],
        icon: 'fire'
      },
      {
        name: tariffsName.ADVANCED,
        price: 7200,
        options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6', 'Опция 7', 'Опция 8', 'Опция 9'],
        bases: [
          'ощущениях',
          'ароматах',
          'восприятии',
          'отзывах',
          'оценках',
          'актуальности',
          'качестве',
          'истории',
          'стоимости',
          'красоте',
          'комфорте',
          'уюте'
        ],
        icon: 'lightning'
      }
    ]
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
    feedback: {
      rate: '5.0',
      comments: 86
    },
    tariffs: [
      {
        name: tariffsName.DEFAULT,
        price: 1400,
        options: ['Опция 1', 'Опция 2', 'Опция 3'],
        bases: ['ощущениях', 'ароматах', 'восприятии'],
        icon: 'rocket'
      },
      {
        name: tariffsName.STANDARD,
        price: 1800,
        options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6'],
        bases: ['ощущениях', 'ароматах', 'восприятии', 'отзывах', 'оценках', 'актуальности', 'качестве'],
        icon: 'fire'
      },
      {
        name: tariffsName.ADVANCED,
        price: 2500,
        options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6', 'Опция 7', 'Опция 8', 'Опция 9'],
        bases: [
          'ощущениях',
          'ароматах',
          'восприятии',
          'отзывах',
          'оценках',
          'актуальности',
          'качестве',
          'истории',
          'стоимости',
          'красоте',
          'комфорте',
          'уюте'
        ],
        icon: 'lightning'
      }
    ]
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
    feedback: {
      rate: '2.7',
      comments: 12
    },
    tariffs: [
      {
        name: tariffsName.DEFAULT,
        price: 1750,
        options: ['Опция 1', 'Опция 2', 'Опция 3'],
        bases: ['ощущениях', 'ароматах', 'восприятии'],
        icon: 'rocket'
      },
      {
        name: tariffsName.STANDARD,
        price: 2200,
        options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6'],
        bases: ['ощущениях', 'ароматах', 'восприятии', 'отзывах', 'оценках', 'актуальности', 'качестве'],
        icon: 'fire'
      },
      {
        name: tariffsName.ADVANCED,
        price: 3450,
        options: ['Опция 1', 'Опция 2', 'Опция 3', 'Опция 4', 'Опция 5', 'Опция 6', 'Опция 7', 'Опция 8', 'Опция 9'],
        bases: [
          'ощущениях',
          'ароматах',
          'восприятии',
          'отзывах',
          'оценках',
          'актуальности',
          'качестве',
          'истории',
          'стоимости',
          'красоте',
          'комфорте',
          'уюте'
        ],
        icon: 'lightning'
      }
    ]
  }
]
const router = useRouter()
const productId = computed(() => router.currentRoute.value.params.details)
const product = computed(() => {
  for(let i = 0; i < products.length; i++) {
    if(products[i].id === Number(productId.value)) {
      return products[i]
    }
  }
})
const breadcrumbs: Breadcrumbs[] = [
  {
    "name":  "Шаблоны",
    "url":   "/products",
    "title": "Перейти на каталог продуктов"
  },
  {
    "name": product.value.name
  }
]
</script>

<template>
  <div class="details">
    <UiBreadcrumbs :breadcrumbs class="details__breadcrumbs" />
    <UiFirstScreen
        v-if="product?.name"
        class="details__first-screen"
        :title="product.name"
    />
  </div>
</template>

<style scoped src="./styles/details.css"></style>
