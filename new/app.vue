<template>
<div class="h-screen">
  <NavBar/>
  <NuxtPage/>
</div>

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
