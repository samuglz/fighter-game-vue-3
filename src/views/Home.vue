<template>
  <section class="flex border-2">
    <GridImage v-for="(img, index) in images" :key="index"/>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useFighers from '../modules/fighter/composables/useFighter'
import GridImage from '@/components/grid-image/GridImage.vue'

const { characters, getimgCharacters } = useFighers()
const images = ref([]);

onMounted(() => {
  images.value = getimgCharacters()
  //
})



</script>

<style lang="postcss" scoped></style>