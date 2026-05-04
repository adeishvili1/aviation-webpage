<template>
  <div class="min-h-screen bg-brand-950">
    <PageHero :title="pageText.title" :subtitle="pageText.subtitle" />

    <div class="relative z-10 -mt-10 space-y-6 pb-20">
      <section class="w-full px-0">
        <div class="overflow-hidden border border-white/10 shadow-2xl shadow-black/20">
          <WorldMap />
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-6">
        <div class="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm">
          <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300/70">{{ pageText.regionsLabel }}</p>
              <h2 class="mt-3 text-3xl font-black text-white">{{ pageText.regionsTitle }}</h2>
            </div>
          </div>

          <div class="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div
              v-for="region in regions"
              :key="region.name"
              class="rounded-3xl border border-white/10 bg-brand-900/60 p-5"
            >
              <div class="mb-4 flex items-center gap-3">
                <span class="h-3 w-3 rounded-full" :style="{ backgroundColor: region.color }"></span>
                <h3 class="text-sm font-bold uppercase tracking-[0.12em] text-white">{{ region.name }}</h3>
              </div>
              <ul class="space-y-2">
                <li v-for="country in region.countries" :key="country" class="text-sm text-blue-100/75">
                  {{ country }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHero from '../../components/PageHero.vue'
import WorldMap from '../../components/WorldMap.vue'

const { locale } = useI18n()

const pageText = computed(() => {
  if (locale.value === 'en') {
    return {
      title: 'Partners',
      subtitle: 'Our international partners',
      regionsLabel: 'Regions',
      regionsTitle: 'Partner Regions',
      regions: [
        { name: 'Europe', color: '#0ea5e9', countries: ['Eastern Europe', 'Central Europe', 'South-Eastern Europe', 'Western Europe'] },
        { name: 'Asia', color: '#3b82f6', countries: ['South Asia', 'Central Asia', 'East Asia', 'Middle East', 'Inner Asia', 'South Caucasus'] },
        { name: 'Africa', color: '#0284c7', countries: ['West Africa', 'East Africa', 'Central Africa', 'Southern Africa', 'North Africa'] },
        { name: 'Americas', color: '#0369a1', countries: ['North America', 'South America'] },
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      title: '\u041f\u0430\u0440\u0442\u043d\u0451\u0440\u044b',
      subtitle: '\u041d\u0430\u0448\u0438 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0435 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u044b',
      regionsLabel: '\u0420\u0435\u0433\u0438\u043e\u043d\u044b',
      regionsTitle: '\u0420\u0435\u0433\u0438\u043e\u043d\u044b \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u0442\u0432\u0430',
      regions: [
        { name: '\u0415\u0432\u0440\u043e\u043f\u0430', color: '#0ea5e9', countries: ['\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u0430\u044f \u0415\u0432\u0440\u043e\u043f\u0430', '\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0415\u0432\u0440\u043e\u043f\u0430', '\u042e\u0433\u043e-\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u0430\u044f \u0415\u0432\u0440\u043e\u043f\u0430', '\u0417\u0430\u043f\u0430\u0434\u043d\u0430\u044f \u0415\u0432\u0440\u043e\u043f\u0430'] },
        { name: '\u0410\u0437\u0438\u044f', color: '#3b82f6', countries: ['\u042e\u0436\u043d\u0430\u044f \u0410\u0437\u0438\u044f', '\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0410\u0437\u0438\u044f', '\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u0430\u044f \u0410\u0437\u0438\u044f', '\u0411\u043b\u0438\u0436\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a', '\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0410\u0437\u0438\u044f', '\u042e\u0436\u043d\u044b\u0439 \u041a\u0430\u0432\u043a\u0430\u0437'] },
        { name: '\u0410\u0444\u0440\u0438\u043a\u0430', color: '#0284c7', countries: ['\u0417\u0430\u043f\u0430\u0434\u043d\u0430\u044f \u0410\u0444\u0440\u0438\u043a\u0430', '\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u0430\u044f \u0410\u0444\u0440\u0438\u043a\u0430', '\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0410\u0444\u0440\u0438\u043a\u0430', '\u042e\u0436\u043d\u0430\u044f \u0410\u0444\u0440\u0438\u043a\u0430', '\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0410\u0444\u0440\u0438\u043a\u0430'] },
        { name: '\u0410\u043c\u0435\u0440\u0438\u043a\u0430', color: '#0369a1', countries: ['\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0410\u043c\u0435\u0440\u0438\u043a\u0430', '\u042e\u0436\u043d\u0430\u044f \u0410\u043c\u0435\u0440\u0438\u043a\u0430'] },
      ],
    }
  }

  return {
    title: '\u10de\u10d0\u10e0\u10e2\u10dc\u10d8\u10dd\u10e0\u10d4\u10d1\u10d8',
    subtitle: '\u10e9\u10d5\u10d4\u10dc\u10d8 \u10e1\u10d0\u10d4\u10e0\u10d7\u10d0\u10e8\u10dd\u10e0\u10d8\u10e1\u10dd \u10de\u10d0\u10e0\u10e2\u10dc\u10d8\u10dd\u10e0\u10d4\u10d1\u10d8',
    regionsLabel: '\u10e0\u10d4\u10d2\u10d8\u10dd\u10dc\u10d4\u10d1\u10d8',
    regionsTitle: '\u10de\u10d0\u10e0\u10e2\u10dc\u10d8\u10dd\u10e0\u10d8 \u10e0\u10d4\u10d2\u10d8\u10dd\u10dc\u10d4\u10d1\u10d8',
    regions: [
      { name: '\u10d4\u10d5\u10e0\u10dd\u10de\u10d0', color: '#0ea5e9', countries: ['\u10d0\u10e6\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10d4\u10d7 \u10d4\u10d5\u10e0\u10dd\u10de\u10d0', '\u10ea\u10d4\u10dc\u10e2\u10e0\u10d0\u10da\u10e3\u10e0\u10d8 \u10d4\u10d5\u10e0\u10dd\u10de\u10d0', '\u10e1\u10d0\u10db\u10ee\u10e0\u10d4\u10d7-\u10d0\u10e6\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10d4\u10d7 \u10d4\u10d5\u10e0\u10dd\u10de\u10d0', '\u10d3\u10d0\u10e1\u10d0\u10d5\u10da\u10d4\u10d7 \u10d4\u10d5\u10e0\u10dd\u10de\u10d0'] },
      { name: '\u10d0\u10d6\u10d8\u10d0', color: '#3b82f6', countries: ['\u10e1\u10d0\u10db\u10ee\u10e0\u10d4\u10d7 \u10d0\u10d6\u10d8\u10d0', '\u10ea\u10d4\u10dc\u10e2\u10e0\u10d0\u10da\u10e3\u10e0\u10d8 \u10d0\u10d6\u10d8\u10d0', '\u10d0\u10e6\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10d4\u10d7 \u10d0\u10d6\u10d8\u10d0', '\u10d0\u10ee\u10da\u10dd \u10d0\u10e6\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10d4\u10d7\u10d8', '\u10e8\u10e3\u10d0 \u10d0\u10d6\u10d8\u10d0', '\u10e1\u10d0\u10db\u10ee\u10e0\u10d4\u10d7 \u10d9\u10d0\u10d5\u10d9\u10d0\u10e1\u10d8\u10d0'] },
      { name: '\u10d0\u10e4\u10e0\u10d8\u10d9\u10d0', color: '#0284c7', countries: ['\u10d3\u10d0\u10e1\u10d0\u10d5\u10da\u10d4\u10d7 \u10d0\u10e4\u10e0\u10d8\u10d9\u10d0', '\u10d0\u10e6\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10d4\u10d7 \u10d0\u10e4\u10e0\u10d8\u10d9\u10d0', '\u10ea\u10d4\u10dc\u10e2\u10e0\u10d0\u10da\u10e3\u10e0\u10d8 \u10d0\u10e4\u10e0\u10d8\u10d9\u10d0', '\u10e1\u10d0\u10db\u10ee\u10e0\u10d4\u10d7 \u10d0\u10e4\u10e0\u10d8\u10d9\u10d0', '\u10e9\u10e0\u10d3\u10d8\u10da\u10dd\u10d4\u10d7 \u10d0\u10e4\u10e0\u10d8\u10d9\u10d0'] },
      { name: '\u10d0\u10db\u10d4\u10e0\u10d8\u10d9\u10d0', color: '#0369a1', countries: ['\u10e9\u10e0\u10d3\u10d8\u10da\u10dd\u10d4\u10d7 \u10d0\u10db\u10d4\u10e0\u10d8\u10d9\u10d0', '\u10e1\u10d0\u10db\u10ee\u10e0\u10d4\u10d7 \u10d0\u10db\u10d4\u10e0\u10d8\u10d9\u10d0'] },
    ],
  }
})

const regions = computed(() => pageText.value.regions)
</script>
