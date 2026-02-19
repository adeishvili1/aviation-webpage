<template>
  <section class="py-12 bg-white border-t border-b border-gray-100 overflow-hidden">
    <div class="flex whitespace-nowrap">
      <div class="marquee-track flex items-center gap-16 px-8">
        <span
          v-for="(partner, i) in allPartners"
          :key="i"
          class="text-2xl font-bold text-gray-200 tracking-widest"
        >
          {{ partner }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  'LUFTHANSA',
  'EMIRATES',
  'QATAR AIRWAYS',
  'TURKISH AIRLINES',
  'AIR FRANCE',
  'SINGAPORE AIRLINES',
  'BRITISH AIRWAYS',
  'JAPAN AIRLINES',
]

// Duplicate for seamless loop
const allPartners = [...partners, ...partners]
</script>
