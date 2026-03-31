<template>
  <section id="fleet" class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal" data-parallax="0.06">
        <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">{{ $t('fleet.label') }}</span>
        <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900">{{ $t('fleet.title1') }} <span class="text-blue-600">{{ $t('fleet.title2') }}</span></h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">{{ $t('fleet.desc') }}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in categories"
          :key="category.titleKey"
          class="card-hover rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg reveal"
          :style="{ transitionDelay: index * 0.15 + 's' }"
        >
          <div class="h-56 relative overflow-hidden">
            <img :src="category.image" :alt="$t(category.titleKey)" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            <div class="absolute top-4 right-4 px-3 py-1 text-white text-xs font-bold rounded-full" :class="category.badgeClass">
              {{ $t(category.badgeKey) }}
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ $t(category.titleKey) }}</h3>
            <p class="text-gray-500 mb-6">{{ $t(category.descKey) }}</p>
            <ul class="space-y-1 mb-6">
              <li v-for="item in category.items" :key="item" class="flex items-center gap-2 text-sm text-gray-600">
                <span class="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></span>
                {{ item }}
              </li>
            </ul>
            <router-link :to="category.link" class="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all text-sm">
              {{ $t('fleet.details') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    titleKey: 'fleet.cat1_title',
    descKey: 'fleet.cat1_desc',
    badgeKey: 'fleet.cat1_badge',
    badgeClass: 'bg-blue-600',
    image: new URL('../assets/docx-images/image26.jpeg', import.meta.url).href,
    link: '/products/military/helicopters',
    items: ['LaGG-3, La-5, Yak-3', 'Yak-15, Yak-17, Yak-23', 'MiG-15, MiG-17, MiG-21', 'Su-25, Su-25UB'],
  },
  {
    titleKey: 'fleet.cat2_title',
    descKey: 'fleet.cat2_desc',
    badgeKey: 'fleet.cat2_badge',
    badgeClass: 'bg-emerald-500',
    image: new URL('../assets/docx-images/image25.jpeg', import.meta.url).href,
    link: '/products/military/helicopters',
    items: ['Mi-8 / Mi-17 / Mi-171', 'Mi-24 / Mi-35', 'Mi-17 Modernization', 'Mi-24/Mi-35 Life Extension'],
  },
  {
    titleKey: 'fleet.cat3_title',
    descKey: 'fleet.cat3_desc',
    badgeKey: 'fleet.cat3_badge',
    badgeClass: 'bg-indigo-600',
    image: new URL('../assets/docx-images/image26.jpeg', import.meta.url).href,
    link: '/products/services',
    items: ['Su-25 Overhaul', 'Su-25UB Overhaul', 'Su-25 Modernization', 'GE-31 Development'],
  },
]
</script>
