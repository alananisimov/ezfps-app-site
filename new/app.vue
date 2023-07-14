<template>

  <NuxtLayout>
  <NavBar/>
  <NuxtPage/>
  </NuxtLayout>

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
