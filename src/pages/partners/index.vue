<template>
  <div class="bg-brand-950 min-h-screen">
    <PageHero title="პარტნიორები" subtitle="ჩვენი საერთაშორისო პარტნიორები" />

    <div class="max-w-7xl mx-auto px-6 pb-20 -mt-10 relative z-10">
      <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-8">
          <h3 class="text-2xl font-bold text-white">პარტნიორი ქვეყნები</h3>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div v-for="country in countries" :key="country.name" class="bg-blue-500/10 rounded-xl p-6 text-center border border-blue-500/15 hover:bg-blue-500/20 transition-colors">
            <div class="text-4xl mb-3">{{ country.flag }}</div>
            <p class="text-white text-sm font-medium">{{ country.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'

const countries = [
  { name: 'საქართველო', flag: '🇬🇪' },
  { name: 'თურქეთი', flag: '🇹🇷' },
  { name: 'ისრაელი', flag: '🇮🇱' },
  { name: 'უკრაინა', flag: '🇺🇦' },
  { name: 'პოლონეთი', flag: '🇵🇱' },
  { name: 'ჩეხეთი', flag: '🇨🇿' },
  { name: 'ბულგარეთი', flag: '🇧🇬' },
  { name: 'რუმინეთი', flag: '🇷🇴' },
  { name: 'აზერბაიჯანი', flag: '🇦🇿' },
  { name: 'ყაზახეთი', flag: '🇰🇿' },
]
</script>
