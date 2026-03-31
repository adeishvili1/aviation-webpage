<template>
  <section id="partners" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal" data-parallax="0.06">
        <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">{{ $t('partners.label') }}</span>
        <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900">{{ $t('partners.title1') }} <span class="text-blue-600">{{ $t('partners.title2') }}</span></h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">{{ $t('partners.desc') }}</p>
      </div>
    </div>

    <!-- World Map — full width -->
    <div class="reveal mb-10">
      <WorldMap />
    </div>

    <!-- Button -->
    <div class="max-w-7xl mx-auto px-6 mt-10 text-center">
      <router-link
        to="/partners"
        class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1"
      >
        {{ $t('partners.all') }}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import WorldMap from './WorldMap.vue'
</script>
