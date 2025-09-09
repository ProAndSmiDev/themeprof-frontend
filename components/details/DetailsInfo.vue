<script setup lang="ts">
import { type TabType, tabType } from 'constants/tabType'
import type { Tabs } from 'interfaces/Tabs'

interface Props {
  product: Object
}

defineProps<Props>()

const activeTab = ref<TabType>(tabType.INFO)
const tabsList: Tabs[] = [
  {
    name: 'Описание',
    value: tabType.INFO
  },
  {
    name: 'Характеристики',
    value: tabType.CHARS
  },
  {
    name: 'Отзывы',
    value: tabType.FEEDBACK
  }
]

function setTab(tab: TabType) {
  activeTab.value = tab
}
</script>

<template>
  <div class="details-info">
    <ul class="details-info__tabs">
      <li
          v-for="(tab, idx) in tabsList"
          :key="idx"
          class="details-info__tabs-item"
      >
        <button
            @click="setTab(tab.value)"
            :class="{'details-info__tabs-clicker--active': activeTab === tab.value}"
            class="details-info__tabs-clicker "
        >
          {{ tab.name }}
          <template v-if="tab.value === 'feedback'">
            ({{ product.rating.count }})
          </template>
        </button>
      </li>
    </ul>

    <div class="details-info__content">
      <template v-if="activeTab === 'info'">
        <p class="detailes-info__article">
          Артикул: <span class="details-info__number">{{ product.id }}</span>
          <button type="button" class="details-info__copy">
            <IconCopy />
          </button>
        </p>

        <img :src="product.image" :alt="product.title" class="details-info__photo" />

        <p class="details-info__text" v-html="product.description"></p>
      </template>
      <template v-if="activeTab === 'chars'">
        <p class="details-info__text">
          Здесь будут характеристики продукта
        </p>
      </template>
      <template v-if="activeTab === 'feedback'">
        <p class="details-info__text">
          Здесь будут отзывы
        </p>
      </template>
    </div>
  </div>
</template>

<style scoped src="./styles/details-info.css"></style>
