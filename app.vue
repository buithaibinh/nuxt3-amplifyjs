<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { $auth } = useNuxtApp();
console.log('app.vue', $auth);
</script>
