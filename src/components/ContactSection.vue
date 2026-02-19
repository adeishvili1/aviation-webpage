<template>
  <section id="contact" class="py-24 bg-gradient-to-br from-brand-900 via-brand-950 to-blue-900 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    </div>
    <div class="max-w-4xl mx-auto px-6 text-center relative reveal">
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8">
        <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
        <span class="text-blue-300 text-sm font-medium">ჩვენთან ერთად</span>
      </div>
      <h2 class="text-4xl md:text-6xl font-black text-white leading-tight">
        სადა ხვალ <span class="gradient-text">ისაფრენთ?</span>
      </h2>
      <p class="text-blue-200/70 mt-6 text-xl max-w-2xl mx-auto">
        შეუერთდით 200-ზე მეტ კომპეტენტურ თასამშრომელს მთელი. მაინც, რისი შევძლებთ ჩვენმა
        აეროპლანებმა და მოქმედით თქვენი საჰაერო ფლოტი.
      </p>

      <div class="flex flex-wrap justify-center gap-4 mt-10">
        <a href="#" class="group px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 flex items-center gap-3">
          კომერციული შეხვედრა
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <a href="#" class="px-10 py-4 border-2 border-white/20 hover:border-white/50 text-white font-bold text-lg rounded-full transition-all hover:-translate-y-1">
          კატალოგის ჩამოტვირთვა
        </a>
      </div>

      <!-- Contact cards -->
      <div class="grid md:grid-cols-3 gap-6 mt-16">
        <div v-for="card in contactCards" :key="card.title" class="stat-glow rounded-2xl p-6 text-left">
          <svg class="w-8 h-8 text-blue-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="card.icon"/>
          </svg>
          <div class="text-white font-bold">{{ card.title }}</div>
          <div class="text-blue-300 text-sm mt-1">{{ card.info }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactCards = [
  {
    title: 'ელ. ფოსტა',
    info: 'info@airgeorgia.ge',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'ტელეფონი',
    info: '+995 32 2 00 00 00',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    title: 'მისამართი',
    info: 'თბილისი, საქართველო',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
]
</script>
