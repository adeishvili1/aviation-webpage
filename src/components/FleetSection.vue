<template>
  <section id="fleet" class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">პროდუქცია</span>
        <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900">წარმოებული <span class="text-blue-600">საფრენი აპარატები</span></h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">85 წლის მანძილზე 8 500-ზე მეტი სხვადასხვა ტიპის საფრენი აპარატის წარმოება და რემონტი</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(category, index) in categories"
          :key="category.title"
          class="card-hover rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg reveal"
          :style="{ transitionDelay: index * 0.15 + 's' }"
        >
          <div class="h-56 relative overflow-hidden">
            <img :src="category.image" :alt="category.title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            <div class="absolute top-4 right-4 px-3 py-1 text-white text-xs font-bold rounded-full" :class="category.badgeClass">
              {{ category.badge }}
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ category.title }}</h3>
            <p class="text-gray-500 mb-6">{{ category.description }}</p>
            <ul class="space-y-1 mb-6">
              <li v-for="item in category.items" :key="item" class="flex items-center gap-2 text-sm text-gray-600">
                <span class="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0"></span>
                {{ item }}
              </li>
            </ul>
            <router-link :to="category.link" class="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all text-sm">
              დეტალურად
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
    title: 'წარმოებული თვითმფრინავები',
    description: 'ისტორიის მანძილზე კომპანიამ 8 500-ზე მეტი სხვადასხვა ტიპის საფრენი აპარატი აწარმოა, LaGG-3-დან Su-25-მდე.',
    badge: 'წარმოება',
    badgeClass: 'bg-blue-600',
    image: new URL('../assets/docx-images/image27.jpeg', import.meta.url).href,
    link: '/products/military/helicopters',
    items: ['LaGG-3, La-5, Yak-3', 'Yak-15, Yak-17, Yak-23', 'MiG-15, MiG-17, MiG-21', 'Su-25, Su-25UB'],
  },
  {
    title: 'შვეულმფრენების რემონტი',
    description: 'Mi-8, Mi-17, Mi-24 და Mi-35 ტიპის შვეულმფრენების სრული ოვერჰოლი, მოდერნიზება და ტექნიკური მომსახურება.',
    badge: 'სერვისი',
    badgeClass: 'bg-emerald-500',
    image: new URL('../assets/docx-images/image25.jpeg', import.meta.url).href,
    link: '/products/military/helicopters',
    items: ['Mi-8 / Mi-17 / Mi-171', 'Mi-24 / Mi-35', 'Mi-17 Modernization', 'Mi-24/Mi-35 Life Extension'],
  },
  {
    title: 'თვითმფრინავების რემონტი',
    description: 'Su-25 და Su-25UB ტიპის საბრძოლო თვითმფრინავების სრული ოვერჰოლი, მოდერნიზება და Su-25 GE-31 პროექტი.',
    badge: 'ოვერჰოლი',
    badgeClass: 'bg-indigo-600',
    image: new URL('../assets/docx-images/image26.jpeg', import.meta.url).href,
    link: '/products/services',
    items: ['Su-25 Overhaul', 'Su-25UB Overhaul', 'Su-25 Modernization', 'GE-31 Development'],
  },
]
</script>
