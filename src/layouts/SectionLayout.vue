<template>
  <div class="bg-brand-950 min-h-screen">
    <PageHero :title="heroTitle" :subtitle="heroSubtitle" />

    <div class="max-w-7xl mx-auto px-6 pb-20 -mt-10 relative z-10">
      <div class="flex flex-col lg:flex-row gap-8">
        <main class="lg:w-2/3 space-y-8">
          <slot />
        </main>
        <PageSidebar :title="sidebarTitle" :links="sidebarLinks" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../components/PageHero.vue'
import PageSidebar from '../components/PageSidebar.vue'

defineProps({
  heroTitle: String,
  heroSubtitle: String,
  sidebarTitle: String,
  sidebarLinks: Array,
})
</script>
