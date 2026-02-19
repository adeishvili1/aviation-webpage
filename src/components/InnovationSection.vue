<template>
  <section id="innovation" class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Content -->
        <div class="reveal">
          <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">ინოვაცია</span>
          <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900 leading-tight">
            ტექნოლოგიის <span class="text-blue-600">მომავლის</span> ფრონტისთვის
          </h2>
          <p class="text-gray-500 mt-6 text-lg leading-relaxed">
            ჩვენი თითოეული უახლესი ტექნოლოგიის და ინოვაციური სისტემის, რომ შევქმნათ
            აეროპლანები, რომლებიც განსაზღვრავს ავიაციის მომავალს.
          </p>

          <div class="mt-10 space-y-6">
            <div v-for="feature in features" :key="feature.title" class="flex gap-5 group">
              <div class="shrink-0 w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <svg class="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">{{ feature.title }}</h4>
                <p class="text-gray-500 mt-1">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Cockpit Dashboard -->
        <div class="reveal relative" style="transition-delay:0.2s">
          <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-900 to-brand-950 p-12 min-h-[500px] flex items-center justify-center">
            <svg viewBox="0 0 400 300" class="w-full" fill="none">
              <rect x="20" y="20" width="360" height="260" rx="20" stroke="#3b82f6" stroke-width="1.5" opacity="0.3"/>
              <rect x="40" y="40" width="150" height="100" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1" opacity="0.5"/>
              <rect x="210" y="40" width="150" height="100" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1" opacity="0.5"/>
              <circle cx="115" cy="90" r="35" fill="#0c1e4a" stroke="#60a5fa" stroke-width="1"/>
              <line x1="80" y1="90" x2="150" y2="90" stroke="#60a5fa" stroke-width="1"/>
              <path d="M100 90 L115 80 L130 90" stroke="#3b82f6" stroke-width="1.5" fill="none"/>
              <rect x="215" y="50" width="60" height="80" rx="4" fill="#0c1e4a" stroke="#60a5fa" stroke-width="0.5"/>
              <text x="245" y="95" text-anchor="middle" fill="#60a5fa" font-size="18" font-weight="bold">556</text>
              <text x="245" y="110" text-anchor="middle" fill="#3b82f6" font-size="8">KM/H</text>
              <rect x="290" y="50" width="60" height="80" rx="4" fill="#0c1e4a" stroke="#60a5fa" stroke-width="0.5"/>
              <text x="320" y="95" text-anchor="middle" fill="#60a5fa" font-size="16" font-weight="bold">7620</text>
              <text x="320" y="110" text-anchor="middle" fill="#3b82f6" font-size="8">M ALT</text>
              <rect x="40" y="160" width="320" height="100" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="0.5" opacity="0.3"/>
              <circle cx="80" cy="210" r="15" fill="#0c1e4a" stroke="#3b82f6" stroke-width="1"/>
              <circle cx="80" cy="210" r="5" fill="#3b82f6" opacity="0.5"/>
              <circle cx="140" cy="210" r="15" fill="#0c1e4a" stroke="#3b82f6" stroke-width="1"/>
              <circle cx="200" cy="210" r="15" fill="#0c1e4a" stroke="#60a5fa" stroke-width="1.5"/>
              <text x="200" y="214" text-anchor="middle" fill="#60a5fa" font-size="8" font-weight="bold">AP</text>
              <circle cx="260" cy="210" r="15" fill="#0c1e4a" stroke="#3b82f6" stroke-width="1"/>
              <circle cx="320" cy="210" r="15" fill="#0c1e4a" stroke="#3b82f6" stroke-width="1"/>
              <circle cx="50" cy="170" r="3" fill="#22c55e"/>
              <circle cx="65" cy="170" r="3" fill="#22c55e"/>
              <circle cx="80" cy="170" r="3" fill="#3b82f6"/>
              <circle cx="95" cy="170" r="3" fill="#3b82f6"/>
            </svg>
            <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-blue-600/10 blur-3xl rounded-full"></div>
          </div>
          <div class="absolute -top-4 -right-4 w-24 h-24 opacity-20" style="background-image: radial-gradient(#3b82f6 1.5px, transparent 1.5px); background-size: 12px 12px;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'ჰიბრიდული ძრავა',
    desc: 'ელექტრო-საწვავის ჰიბრიდული სისტემა 40%-ით ნაკლები გაფრქვევა',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'ციფრული კაბინა',
    desc: 'სრულიად ციფრული კაბინა AI-ით გაძლიერებული ფრენის მართვა',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'მსუბუქი კომპოზიტები',
    desc: 'ახალი თაობის კომპოზიტური მასალების წონის შემცირება',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]
</script>
