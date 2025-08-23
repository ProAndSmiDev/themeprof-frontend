<script setup lang="ts">
import type {Products} from "interfaces/Products";

interface Props {
  products: Products[]
  recommended: number[] | undefined
}

const props = defineProps<Props>()
const recommendedProducts: Products[] = computed(() => {
  const result: Products[] = []

  for(let i = 0; i < props.products.length; i++) {
    for(let c = 0; c < props.recommended.length; c++) {
      if(props.products[i].id === props.recommended[c]) {
        result.push(props.products[i])
      }
    }
  }

  return result
})
</script>

<template>
  <section class="details-recommended">
    <UiTitle>
      <template #boldText>
        Рекомендуемые
      </template>
      товары
    </UiTitle>

    <ProductsCatalogList :products="recommendedProducts" isRecommended />
  </section>
</template>

<style scoped src="./styles/details-recommended.css"></style>
