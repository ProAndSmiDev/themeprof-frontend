<script setup lang="ts">
import {useProductsStore} from "store/products"

const route = useRoute()
const store = useProductsStore()

const productIdByRoute = Number(route.params.details)
const product = ref<Object | undefined>(undefined)
const breadcrumbs = computed(() => [
  {
    name: 'Шаблоны',
    url: '/products',
    title: 'Перейти на каталог продуктов'
  },
  {
    name: product.value?.title || '',
  }
])

onMounted(async () => {
  await store.getProductById(productIdByRoute)

  product.value = store.product
})
</script>

<template>
  <div class="details">
    <UiBreadcrumbs :breadcrumbs class="details__breadcrumbs" />
    <UiFirstScreen
        v-if="product?.title"
        class="details__first-screen"
        :title="product.title"
    />

    <!--div v-if="product" class="details__content">
      <DetailsInfo :product class="details__info" />
      <DetailsTariffs :tariffs="product.tariffs" class="details__tariffs" />
    </div-->

    <!--DetailsRecommended :products :recommended="product?.recommended" class="details__recommended" /-->
  </div>
</template>

<style scoped src="./styles/details.css"></style>
