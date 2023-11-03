<template>
  
  <div class="select-none">
<NuxtLoadingIndicator color="orange"/>
  <NavBar/>
  <NuxtPage/>

</div>  
</template>
<script>
import "preline/dist/preline.js"
</script>
<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
useSeoMeta({
  title: 'ezfps Launcher',
  ogTitle: 'ezfps Launcher',
  description: 'Give your pc god`s power',
  ogDescription: 'Give your pc god`s power',
})
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<style>
::-webkit-scrollbar {
    display: none;
}
html{
  font-family: 'Manrope', sans-serif;
}
</style>
