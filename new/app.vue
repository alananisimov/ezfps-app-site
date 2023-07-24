<template>

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
::-webkit-scrollbar {
    display: none;
}
html{
font-family: 'Varela Round', sans-serif;
}
</style>
