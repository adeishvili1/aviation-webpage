<template>
  <div class="bg-brand-950 min-h-screen">
    <PageHero title="პარტნიორები" subtitle="ჩვენი საერთაშორისო პარტნიორები" />

    <div class="pb-20 -mt-10 relative z-10 space-y-6">
      <!-- World Map — full width -->
      <WorldMap />

    </div>
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import WorldMap from '../../components/WorldMap.vue'

</script>
