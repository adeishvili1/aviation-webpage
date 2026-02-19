<template>
  <div class="bg-brand-950 min-h-screen">
    <PageHero title="ხელმძღვანელობა" subtitle="სს თბილავიამშენის ხელმძღვანელობა" />

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
          <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
            <div class="border-l-4 border-blue-400 pl-6 mb-6">
              <h3 class="text-2xl font-bold text-white">ბიოგრაფია</h3>
            </div>

            <div class="text-blue-200/80 leading-relaxed space-y-4">
              <p>მიხეილ ქუთათელაძეს საჯარო სექტორში მუშაობის მრავალწლიანი გამოცდილება გააჩნია.</p>
              <p>სს „თბილავიამშენის" დირექტორად დანიშვნამდე, მუშაობდა სხვადასხვა საინჟინრო და სამრეწველო ორგანიზაციებში.</p>
              <p>1988–1992 წწ მუშაობდა საქართველოს მეცნიერებათა აკადემიის კიბერნეტიკის ინსტიტუტში ინჟინრის თანამდებობაზე.</p>
              <p>1992–1995 წწ მუშაობდა სს „თბილავიამშენში" (ყოფილი თბილისის საავიაციო ქარხანა) ინჟინრის, უფროსი ინჟინრის თანამდებობაზე.</p>
              <p>1995–2005 წწ მუშაობდა სს „ელმავალმშენებელში" საწარმოო განყოფილების უფროსის, ტექნიკური დირექტორის მოადგილის თანამდებობაზე.</p>
              <p>2005–2010 წწ მუშაობდა შპს „საქართველოს რკინიგზის" ლოკომოტივების სარემონტო ქარხანაში მთავარი ინჟინრის თანამდებობაზე.</p>
              <p>2010 წლიდან დღემდე მუშაობს სს „თბილავიამშენში" დირექტორის თანამდებობაზე.</p>
              <p>მიხეილ ქუთათელაძემ დაამთავრა საქართველოს ტექნიკური უნივერსიტეტი, მექანიკის ფაკულტეტი, ინჟინერ-მექანიკოსის სპეციალობით.</p>
            </div>
          </div>
        </main>

        <PageSidebar title="ჩვენს შესახებ" :links="sidebarLinks" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
import PageSidebar from '../../components/PageSidebar.vue'
import { getSidebarLinks } from '../../data/navigation.js'
import directorPhoto from '../../assets/director-photo.jpg'

const sidebarLinks = getSidebarLinks('about')
</script>
