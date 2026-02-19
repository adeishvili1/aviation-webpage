<template>
  <section id="news" class="py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
        <div>
          <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">სიახლეები</span>
          <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900">უახლესი <span class="text-blue-600">ამბები</span></h2>
        </div>
        <a href="#" class="mt-4 md:mt-0 text-blue-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
          ყველა სიახლე
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="(article, index) in articles"
          :key="article.title"
          class="card-hover rounded-3xl overflow-hidden bg-white shadow-lg reveal"
          :style="{ transitionDelay: index * 0.15 + 's' }"
        >
          <div class="h-52 relative flex items-center justify-center" :class="article.bgClass">
            <svg class="w-20 h-20 text-white/20" fill="currentColor" viewBox="0 0 24 24">
              <path :d="article.icon"/>
            </svg>
            <div class="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
              {{ article.tag }}
            </div>
          </div>
          <div class="p-6">
            <div class="text-sm text-gray-400 mb-3">{{ article.date }}</div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{{ article.title }}</h3>
            <p class="text-gray-500 text-sm line-clamp-3">{{ article.excerpt }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const articles = [
  {
    title: 'ახალი ჰიბრიდული ძრავის წარმატებული ტესტირება',
    excerpt: 'პირველი ჰიბრიდული ძრავი წარმატებით აიტანა რიგორისი ტესტირებას ყველა კატეგორიაში და უახლოეს წლებში გამოშვებაში დაემატება.',
    date: '15 იანვარი, 2026',
    tag: 'ინოვაცია',
    bgClass: 'bg-gradient-to-br from-blue-500 to-blue-700',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  },
  {
    title: 'ახალი მარშრუტი სამხრეთ-აღმოსავლეთ აზიაში',
    excerpt: 'ჩვენი პარტნიორობის გაფართოებით იწყება ახალი რეგიონალური მარშრუტის ტვირთაში, კონტეინერს და კარგოპატარაში.',
    date: '10 იანვარი, 2026',
    tag: 'პარტნიორობა',
    bgClass: 'bg-gradient-to-br from-indigo-500 to-indigo-800',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'AIR Georgia — წლის საუკეთესო რეგიონალური ავიამწარმოებელი',
    excerpt: 'საერთაშორისო ავიაციის ჯილდოზე ჩვენმა კომპანიამ მიიღო წლის საუკეთესო რეგიონალური აეროპლანის ავიამწარმოებლის ტიტული.',
    date: '5 იანვარი, 2026',
    tag: 'ჯილდო',
    bgClass: 'bg-gradient-to-br from-blue-600 to-cyan-700',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
]
</script>
