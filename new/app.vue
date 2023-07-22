<template>
<div id="scrollbar">
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
.scrollbar::-webkit-scrollbar {
  display: none;
}


.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
