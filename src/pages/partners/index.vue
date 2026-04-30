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
            <p class="max-w-2xl text-sm leading-7 text-blue-100/70">{{ pageText.regionsDesc }}</p>
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
      regionsDesc: 'The same partnership map is shown above, with the covered regions listed below for quick reference.',
      regions: [
        { name: 'South Caucasus', color: '#0ea5e9', countries: ['Georgia', 'Azerbaijan', 'Armenia'] },
        { name: 'Eastern Europe', color: '#3b82f6', countries: ['Ukraine', 'Poland', 'Czech Republic', 'Bulgaria'] },
        { name: 'Middle East', color: '#0284c7', countries: ['Turkey', 'Israel'] },
        { name: 'Central Asia', color: '#0369a1', countries: ['Kazakhstan'] },
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      title: '\u041f\u0430\u0440\u0442\u043d\u0451\u0440\u044b',
      subtitle: '\u041d\u0430\u0448\u0438 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0435 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u044b',
      regionsLabel: '\u0420\u0435\u0433\u0438\u043e\u043d\u044b',
      regionsTitle: '\u0420\u0435\u0433\u0438\u043e\u043d\u044b \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u0442\u0432\u0430',
      regionsDesc: '\u0422\u0430 \u0436\u0435 \u043a\u0430\u0440\u0442\u0430 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u0442\u0432\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u0432\u044b\u0448\u0435, \u0430 \u043d\u0438\u0436\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0440\u0435\u0433\u0438\u043e\u043d\u044b \u0434\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0439 \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u0438.',
      regions: [
        { name: '\u042e\u0436\u043d\u044b\u0439 \u041a\u0430\u0432\u043a\u0430\u0437', color: '#0ea5e9', countries: ['\u0413\u0440\u0443\u0437\u0438\u044f', '\u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043d', '\u0410\u0440\u043c\u0435\u043d\u0438\u044f'] },
        { name: '\u0412\u043e\u0441\u0442\u043e\u0447\u043d\u0430\u044f \u0415\u0432\u0440\u043e\u043f\u0430', color: '#3b82f6', countries: ['\u0423\u043a\u0440\u0430\u0438\u043d\u0430', '\u041f\u043e\u043b\u044c\u0448\u0430', '\u0427\u0435\u0445\u0438\u044f', '\u0411\u043e\u043b\u0433\u0430\u0440\u0438\u044f'] },
        { name: '\u0411\u043b\u0438\u0436\u043d\u0438\u0439 \u0412\u043e\u0441\u0442\u043e\u043a', color: '#0284c7', countries: ['\u0422\u0443\u0440\u0446\u0438\u044f', '\u0418\u0437\u0440\u0430\u0438\u043b\u044c'] },
        { name: '\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0410\u0437\u0438\u044f', color: '#0369a1', countries: ['\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d'] },
      ],
    }
  }

  return {
    title: '\u10de\u10d0\u10e0\u10e2\u10dc\u10d8\u10dd\u10e0\u10d4\u10d1\u10d8',
    subtitle: '\u10e9\u10d5\u10d4\u10dc\u10d8 \u10e1\u10d0\u10d4\u10e0\u10d7\u10d0\u10e8\u10dd\u10e0\u10d8\u10e1\u10dd \u10de\u10d0\u10e0\u10e2\u10dc\u10d8\u10dd\u10e0\u10d4\u10d1\u10d8',
    regionsLabel: '\u10e0\u10d4\u10d2\u10d8\u10dd\u10dc\u10d4\u10d1\u10d8',
    regionsTitle: '\u10de\u10d0\u10e0\u10e2\u10dc\u10d8\u10dd\u10e0\u10d8 \u10e0\u10d4\u10d2\u10d8\u10dd\u10dc\u10d4\u10d1\u10d8',
    regionsDesc: '\u10d8\u10d2\u10d8\u10d5\u10d4 \u10de\u10d0\u10e0\u10e2\u10dc\u10d8\u10dd\u10e0\u10d4\u10d1\u10d8\u10e1 \u10e0\u10e3\u10d9\u10d0 \u10d6\u10d4\u10db\u10dd\u10d7\u10d0\u10d0 \u10dc\u10d0\u10e9\u10d5\u10d4\u10dc\u10d4\u10d1\u10d8, \u10ee\u10dd\u10da\u10dd \u10e5\u10d5\u10d4\u10db\u10dd\u10d7 \u10e9\u10d0\u10db\u10dd\u10d7\u10d5\u10da\u10d8\u10da\u10d8\u10d0 \u10e0\u10d4\u10d2\u10d8\u10dd\u10dc\u10d4\u10d1\u10d8 \u10e1\u10ec\u10e0\u10d0\u10e4\u10d8 \u10dd\u10e0\u10d8\u10d4\u10dc\u10e2\u10d0\u10ea\u10d8\u10d8\u10e1\u10d7\u10d5\u10d8\u10e1.',
    regions: [
      { name: '\u10e1\u10d0\u10db\u10ee\u10e0\u10d4\u10d7 \u10d9\u10d0\u10d5\u10d9\u10d0\u10e1\u10d8\u10d0', color: '#0ea5e9', countries: ['\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd', '\u10d0\u10d6\u10d4\u10e0\u10d1\u10d0\u10d8\u10ef\u10d0\u10dc\u10d8', '\u10e1\u10dd\u10db\u10ee\u10d4\u10d7\u10d8'] },
      { name: '\u10d0\u10e6\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10d4\u10d7 \u10d4\u10d5\u10e0\u10dd\u10de\u10d0', color: '#3b82f6', countries: ['\u10e3\u10d9\u10e0\u10d0\u10d8\u10dc\u10d0', '\u10de\u10dd\u10da\u10dd\u10dc\u10d4\u10d7\u10d8', '\u10e9\u10d4\u10ee\u10d4\u10d7\u10d8', '\u10d1\u10e3\u10da\u10d2\u10d0\u10e0\u10d4\u10d7\u10d8'] },
      { name: '\u10d0\u10ee\u10da\u10dd \u10d0\u10e6\u10db\u10dd\u10e1\u10d0\u10d5\u10da\u10d4\u10d7\u10d8', color: '#0284c7', countries: ['\u10d7\u10e3\u10e0\u10e5\u10d4\u10d7\u10d8', '\u10d8\u10e1\u10e0\u10d0\u10d4\u10da\u10d8'] },
      { name: '\u10e8\u10e3\u10d0 \u10d0\u10d6\u10d8\u10d0', color: '#0369a1', countries: ['\u10e7\u10d0\u10d6\u10d0\u10ee\u10d4\u10d7\u10d8'] },
    ],
  }
})

const regions = computed(() => pageText.value.regions)
</script>
