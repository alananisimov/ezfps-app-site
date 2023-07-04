<template>
  <div id="example">

  
  <NavBar v-if="new1w3"/>
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
let page = useRoute()
let new1w3 = false
if(page.name !== 'shop'){
    new1w3 = true
}
</script>
<style>
.example::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
