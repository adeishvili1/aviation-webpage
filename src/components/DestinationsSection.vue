<template>
  <section id="partners" class="bg-white py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-10 md:mb-16">
        <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">{{ $t('partners.label') }}</span>
        <h2 class="mt-3 text-3xl font-black text-gray-900 md:text-5xl">{{ $t('partners.title1') }} <span class="text-blue-600">{{ $t('partners.title2') }}</span></h2>
        <p class="mt-4 max-w-2xl mx-auto text-base text-gray-500 md:text-lg">{{ $t('partners.desc') }}</p>
      </div>
    </div>

    <!-- World Map — full width -->
    <div class="w-full px-0 mb-10">
      <div class="overflow-hidden shadow-2xl shadow-black/10">
        <WorldMap />
      </div>
    </div>

    <!-- Button -->
    <div class="max-w-7xl mx-auto px-6 mt-8 md:mt-10 mb-6 md:mb-0 text-center">
      <router-link
        to="/partners"
        class="inline-flex w-full max-w-[18rem] items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-base font-bold text-white transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 md:w-auto md:max-w-none md:px-8"
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
