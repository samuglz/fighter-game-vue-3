<template>
    <img :src="img" width="250" height="230px" />
</template>

<script setup lang="ts">

defineProps({
    img:{
        type: String,
        // required: true
    }
})


</script>

<style lang="postcss" scoped></style>


