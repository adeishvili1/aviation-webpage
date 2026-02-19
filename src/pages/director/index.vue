<template>
  <div class="bg-brand-950 min-h-screen">
    <!-- Hero Banner -->
    <div class="relative overflow-hidden pt-40 pb-20">
      <div class="absolute inset-0 bg-linear-to-b from-brand-900/50 to-brand-950"></div>
      <div class="absolute top-0 left-0 w-full h-full">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h1 class="text-4xl font-bold text-white mb-4">დირექტორი</h1>
        <p class="text-xl text-blue-300/80">სს თბილავიამშენის დირექტორი</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 pb-20 -mt-10 relative z-10">
      <div class="flex flex-col lg:flex-row gap-8">

        <main class="lg:w-2/3 space-y-8">
          <!-- Profile Card -->
          <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="md:w-64 shrink-0">
                <img
                  :src="directorPhoto"
                  alt="მიხეილ ქუთათელაძე"
                  class="rounded-lg shadow-lg shadow-black/30 w-full"
                >
              </div>

              <div class="flex-1">
                <h2 class="text-3xl font-bold text-white mb-2">მიხეილ ქუთათელაძე</h2>
                <div class="border-l-4 border-blue-400 pl-4 mb-6">
                  <p class="text-lg text-blue-300 font-medium">
                    სს თბილავიათმშენის დირექტორი
                  </p>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <div class="flex items-center mb-2">
                      <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      <span class="font-semibold text-blue-300/80 text-sm">დაბადების თარიღი</span>
                    </div>
                    <p class="text-white font-medium">1965 წლის 30 აგვისტო</p>
                  </div>

                  <div class="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <div class="flex items-center mb-2">
                      <svg class="w-4 h-4 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span class="font-semibold text-blue-300/80 text-sm">ენები</span>
                    </div>
                    <p class="text-white font-medium">ქართული, ინგლისური, რუსული</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Biography Card -->
          <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8 mt-8">
            <div class="border-l-4 border-blue-400 pl-6 mb-6">
              <h3 class="text-2xl font-bold text-white">ბიოგრაფია</h3>
            </div>

            <div class="text-blue-200/80 leading-relaxed space-y-4">
              <p>
                მიხეილ ქუთათელაძეს საჯარო სექტორში მუშაობის მრავალწლიანი გამოცდილება გააჩნია.
              </p>
              <p>
                სს „თბილავიამშენის" დირექტორად დანიშვნამდე, მუშაობდა სხვადასხვა საინჟინრო და სამრეწველო ორგანიზაციებში.
              </p>
              <p>
                1988–1992 წწ მუშაობდა საქართველოს მეცნიერებათა აკადემიის კიბერნეტიკის ინსტიტუტში ინჟინრის თანამდებობაზე.
              </p>
              <p>
                1992–1995 წწ მუშაობდა სს „თბილავიამშენში" (ყოფილი თბილისის საავიაციო ქარხანა) ინჟინრის, უფროსი ინჟინრის თანამდებობაზე.
              </p>
              <p>
                1995–2005 წწ მუშაობდა სს „ელმავალმშენებელში" საწარმოო განყოფილების უფროსის, ტექნიკური დირექტორის მოადგილის თანამდებობაზე.
              </p>
              <p>
                2005–2010 წწ მუშაობდა შპს „საქართველოს რკინიგზის" ლოკომოტივების სარემონტო ქარხანაში მთავარი ინჟინრის თანამდებობაზე.
              </p>
              <p>
                2010 წლიდან დღემდე მუშაობს სს „თბილავიამშენში" დირექტორის თანამდებობაზე.
              </p>
              <p>
                მიხეილ ქუთათელაძემ დაამთავრა საქართველოს ტექნიკური უნივერსიტეტი, მექანიკის ფაკულტეტი, ინჟინერ-მექანიკოსის სპეციალობით.
              </p>
            </div>
          </div>
        </main>

        <!-- Sidebar -->
        <aside class="lg:w-1/3">
          <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 sticky top-28">
            <div class="p-6 border-b border-blue-500/15">
              <h3 class="text-xl font-bold text-white border-l-4 border-blue-400 pl-4">
                კომპანია
              </h3>
            </div>

            <nav class="p-6">
              <ul class="space-y-3">
                <li v-for="item in sidebarLinks" :key="item.to">
                  <router-link
                    :to="item.to"
                    class="flex items-center p-3 rounded-lg transition-colors"
                    :class="item.active
                      ? 'bg-blue-600/20 text-white font-semibold border border-blue-500/30'
                      : 'text-blue-200/70 hover:bg-white/5 hover:text-white'"
                  >
                    <svg class="w-5 h-5 mr-3 shrink-0" :class="item.active ? 'text-blue-400' : 'text-blue-500/50'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
                    </svg>
                    <span>{{ item.label }}</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

      </div>
    </div>
  </div>
</template>

<script setup>
import directorPhoto from '../../assets/director-photo.jpg'

const sidebarLinks = [
  { to: '/company/about', label: 'კომპანია', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', active: false },
  { to: '/director', label: 'დირექტორი', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', active: true },
  { to: '/company/deputies', label: 'მოადგილეები', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', active: false },
  { to: '/company/vacancies', label: 'ვაკანსია', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', active: false },
  { to: '/company/audit', label: 'აუდირებული ფინანსური ანგარიშება', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', active: false },
  { to: '/company/business-plan', label: 'ბიზნეს-გეგმა', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', active: false },
  { to: '/company/personal', label: 'პერსონალური ოფიცერი', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', active: false },
  { to: '/company/quality', label: 'ხარისხის პოლიტიკა', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', active: false },
]
</script>
