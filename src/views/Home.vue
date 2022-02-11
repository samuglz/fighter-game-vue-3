<template>
  <section class="flex border-2">
    <GridImage v-for="(character, index) in characters" :key="index" :img="character.img"/>
  </section>
</template>

<!-- <script setup lang="ts">
import { onMounted, ref } from 'vue'
import useFighers from '../modules/fighter/composables/useFighter'
import GridImage from '@/components/grid-image/GridImage.vue'

const { characters, getimgCharacters } = useFighers()
const images = ref([]);

onMounted(() => {
  console.log(characters.value)
  images.value = getimgCharacters()
  console.log(images.value)
  
})
</script>
   -->
<script lang="ts">
import { onMounted, ref } from 'vue'
import useFighers from '../modules/fighter/composables/useFighter'
import GridImage from '@/components/grid-image/GridImage.vue'

export default {
    name: 'Home',
    components: {
      GridImage
    },
    setup() {
    const { characters } = useFighers()

      onMounted(() => {
        console.log(characters.value)
    })

      return{
        characters
      }
    }
}
  
</script>

<style lang="postcss" scoped></style>