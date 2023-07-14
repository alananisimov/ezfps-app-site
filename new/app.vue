<template>
<div class="h-screen">
  <div class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500" />
  <NavBar/>
  <NuxtPage/>
</div>

</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

let loading = ref(false);
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
const nuxtApp = useNuxtApp();

  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
</script>
<style>

</style>
