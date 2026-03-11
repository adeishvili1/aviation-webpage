<template>
  <section id="partners" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">პარტნიორები</span>
        <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900">ჩვენი <span class="text-blue-600">პარტნიორები</span></h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">10-ზე მეტ ქვეყანაში საერთაშორისო პარტნიორობა</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
        <div
          v-for="partner in partners"
          :key="partner.name"
          class="group relative rounded-3xl overflow-hidden h-64 cursor-pointer"
        >
          <div class="absolute inset-0" :class="partner.bgGradient"></div>
          <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          <div class="absolute inset-0 opacity-10" :style="patternStyle"></div>
          <div class="absolute inset-0 p-6 flex flex-col justify-end transform group-hover:-translate-y-2 transition-transform duration-500">
            <div class="text-4xl mb-2">{{ partner.flag }}</div>
            <div class="text-2xl font-black text-white mb-1">{{ partner.name }}</div>
            <div class="mt-2 w-12 h-1 rounded-full group-hover:w-20 transition-all" :class="partner.lineColor"></div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <router-link to="/partners" class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1">
          ყველა პარტნიორი
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const patternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
}

const partners = [
  {
    name: 'თურქეთი',
    flag: '🇹🇷',
    bgGradient: 'bg-gradient-to-br from-red-700 to-red-900',
    lineColor: 'bg-red-400',
  },
  {
    name: 'ისრაელი',
    flag: '🇮🇱',
    bgGradient: 'bg-gradient-to-br from-blue-600 to-blue-900',
    lineColor: 'bg-blue-300',
  },
  {
    name: 'პოლონეთი',
    flag: '🇵🇱',
    bgGradient: 'bg-gradient-to-br from-red-600 to-rose-900',
    lineColor: 'bg-rose-300',
  },
  {
    name: 'უკრაინა',
    flag: '🇺🇦',
    bgGradient: 'bg-gradient-to-br from-yellow-500 to-blue-700',
    lineColor: 'bg-yellow-300',
  },
  {
    name: 'ჩეხეთი',
    flag: '🇨🇿',
    bgGradient: 'bg-gradient-to-br from-blue-700 to-red-800',
    lineColor: 'bg-blue-400',
  },
  {
    name: 'ბულგარეთი',
    flag: '🇧🇬',
    bgGradient: 'bg-gradient-to-br from-green-700 to-red-800',
    lineColor: 'bg-green-400',
  },
  {
    name: 'ყაზახეთი',
    flag: '🇰🇿',
    bgGradient: 'bg-gradient-to-br from-cyan-600 to-blue-900',
    lineColor: 'bg-cyan-400',
  },
  {
    name: 'აზერბაიჯანი',
    flag: '🇦🇿',
    bgGradient: 'bg-gradient-to-br from-sky-600 to-green-900',
    lineColor: 'bg-sky-400',
  },
]
</script>
