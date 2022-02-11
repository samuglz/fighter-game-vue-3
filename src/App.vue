
<script setup lang="ts">
import { useStore } from 'vuex'
import { onBeforeMount } from 'vue';

const store = useStore()

onBeforeMount(async() =>{
  await store.dispatch('fighters/fetchCharacters')

})
</script>

<template>
  <router-view />
</template>

<style lang="postcss">
html {
  font-size: 62.5%;
}

body {
  font-family: 'Press Start 2P', cursive;
  font-size: 2rem;
}

.border-main {
  border: 1rem solid;
}

.gap-main {
  gap: 2rem;
}
</style>