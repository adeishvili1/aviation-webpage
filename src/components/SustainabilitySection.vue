<template>
  <section id="sustainability" class="py-24 bg-brand-950 relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left visual -->
        <div class="reveal relative order-2 lg:order-1">
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(item, index) in statsItems"
              :key="item.label"
              class="stat-glow rounded-2xl p-8 text-center"
              :class="{ 'mt-8': index % 2 === 1 }"
            >
              <div class="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" :class="item.iconBg">
                <svg class="w-8 h-8" :class="item.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
                </svg>
              </div>
              <div class="text-3xl font-black text-white">{{ item.value }}</div>
              <div class="text-blue-300 text-sm mt-1">{{ item.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right text -->
        <div class="reveal order-1 lg:order-2">
          <span class="text-emerald-400 font-semibold text-sm tracking-widest uppercase">მდგრადობა</span>
          <h2 class="text-4xl md:text-5xl font-black mt-3 text-white leading-tight">
            მწვანე <span class="text-emerald-400">მომავალი</span> ავიაციაში
          </h2>
          <p class="text-blue-200/70 mt-6 text-lg leading-relaxed">
            ჩვენი ამჯერი, რომ მომავალი შევძლებთ იყოს მდგრადობის მომავალთან.
            ჩვენი აეროპლანები უფრო ფრენილები ნაკლებ საწვავის და კარბონული ნაკადი
            ფოკუსი რამ ახშობილ მომავლის თემის ყველას ახალი მომავალი.
          </p>

          <div class="mt-8 space-y-4">
            <div v-for="point in bulletPoints" :key="point" class="flex items-center gap-3">
              <div class="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span class="text-blue-100">{{ point }}</span>
            </div>
          </div>

          <a href="#" class="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-full transition-all hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1">
            გაიგეთ მეტი
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const statsItems = [
  {
    value: '40%',
    label: 'ნაკლები CO₂',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    value: '50%',
    label: 'ნაკლები ხმაური',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    value: 'SAF',
    label: 'მდგრადი საწვავი',
    icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
  },
  {
    value: '100%',
    label: 'რეციკლირება მასალა',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    iconBg: 'bg-violet-500/10',
    iconColor: 'text-violet-400',
  },
]

const bulletPoints = [
  '100% SAF თავსებადი ძრავები',
  'კარბონ-ნეიტრალური წარმოება 2030 წლისთვის',
  'ხმაურის შემცირების ინოვაციური ტექნოლოგია',
  'ეკო-ეფექტური ექსპლუატაცია',
]
</script>
