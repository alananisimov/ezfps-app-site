<template>
  <div v-if="loading" class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500" />
  <NuxtLayout>
  <NavBar/>
  <NuxtPage/>
  </NuxtLayout>

</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const nuxtApp = useNuxtApp();
  const loading = ref(false);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>
<style>

</style>
