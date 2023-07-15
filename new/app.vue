<template>
<head>
  <script src="
https://cdn.jsdelivr.net/npm/electron@25.3.0/index.min.js
"></script>

</head>
  <NavBar/>
  <NuxtPage/>


</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>
<style>

</style>
