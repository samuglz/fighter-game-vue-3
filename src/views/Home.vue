<template>
  <div>{{ characters }}</div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue'

const store = useStore()

const characters = computed(() => store.getters['fighters/getCharacters'])

onMounted(async () => {
  console.log(store);
  await store.dispatch('fighters/fetchCharacters')
})

</script>

<style scoped>
</style>