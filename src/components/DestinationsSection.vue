<template>
  <section id="destinations" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">მიმართულებები</span>
        <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900">სადაც ჩვენ <span class="text-blue-600">ვფრინავთ</span></h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">100-ზე მეტ ქვეყანაში, ისაფრისის ყველა კუთხეში</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
        <div
          v-for="dest in destinations"
          :key="dest.name"
          class="group relative rounded-3xl overflow-hidden h-80 cursor-pointer"
        >
          <div class="absolute inset-0" :class="dest.bgGradient"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div class="absolute inset-0 opacity-10" :style="patternStyle"></div>
          <div class="absolute inset-0 p-6 flex flex-col justify-end transform group-hover:-translate-y-2 transition-transform duration-500">
            <div class="text-3xl font-black text-white mb-1">{{ dest.name }}</div>
            <div class="text-blue-200 text-sm">{{ dest.routes }}</div>
            <div class="mt-3 w-12 h-1 rounded-full group-hover:w-20 transition-all" :class="dest.lineColor"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const patternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
}

const destinations = [
  {
    name: 'ევროპა',
    routes: '45+ მარშრუტი',
    bgGradient: 'bg-gradient-to-br from-blue-600 to-indigo-800',
    lineColor: 'bg-blue-400',
  },
  {
    name: 'აზია',
    routes: '30+ მარშრუტი',
    bgGradient: 'bg-gradient-to-br from-cyan-600 to-blue-800',
    lineColor: 'bg-cyan-400',
  },
  {
    name: 'აფრიკა',
    routes: '20+ მარშრუტი',
    bgGradient: 'bg-gradient-to-br from-blue-700 to-violet-900',
    lineColor: 'bg-violet-400',
  },
  {
    name: 'ამერიკა',
    routes: '25+ მარშრუტი',
    bgGradient: 'bg-gradient-to-br from-sky-600 to-blue-900',
    lineColor: 'bg-sky-400',
  },
]
</script>
