<template>
  <div class="relative overflow-hidden pt-40 pb-20">
    <div class="absolute inset-0 bg-linear-to-b from-brand-900/50 to-brand-950"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
      <h1 class="text-4xl font-bold text-white mb-4">{{ title }}</h1>
      <p class="text-xl text-blue-300/80">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>
