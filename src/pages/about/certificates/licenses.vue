<template>
  <SectionLayout
    heroTitle="ლიცენზიები"
    heroSubtitle="ადგილობრივი ლიცენზიები"
    sidebarTitle="ჩვენს შესახებ"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-8">
        <h3 class="text-2xl font-bold text-white">გენერალური ლიცენზიები</h3>
        <p class="text-blue-200/60 text-sm mt-1">გაცემული 2008 წლის 27 მაისს</p>
      </div>

      <div class="space-y-6">
        <div v-for="lic in licenses" :key="lic.number" class="bg-blue-500/10 rounded-xl border border-blue-500/20 overflow-hidden">
          <div v-if="lic.image" class="bg-white p-4">
            <img :src="lic.image" :alt="'License ' + lic.number" class="w-full max-h-64 object-contain mx-auto" />
          </div>
          <div class="p-6">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
                <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <span class="px-3 py-1 bg-blue-600/30 rounded-full text-blue-300 text-xs font-bold">№ {{ lic.number }}</span>
                  <span class="text-white/40 text-xs">{{ lic.date }}</span>
                </div>
                <h4 class="text-white font-semibold text-lg mb-1">{{ lic.title }}</h4>
                <p class="text-blue-200/70 text-sm">{{ lic.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../../data/navigation.js'
import lic407img from '../../../assets/docx-images/image12.png'
import lic408img from '../../../assets/docx-images/image13.png'
import lic409img from '../../../assets/docx-images/image14.png'

const sidebarLinks = getSidebarLinks('about')

const licenses = [
  {
    number: '407',
    date: '2008 წლის 27 მაისი',
    title: 'სამხედრო-საბრძოლო იარაღის დამზადება და წარმოება',
    desc: 'სამხედრო-საბრძოლო იარაღის დამზადებისა და წარმოების გენერალური ლიცენზია.',
    image: lic407img,
  },
  {
    number: '408',
    date: '2008 წლის 27 მაისი',
    title: 'სამხედრო-საბრძოლო იარაღის შეკეთება და მოდერნიზება',
    desc: 'სამხედრო-საბრძოლო იარაღის შეკეთების (მოდერნიზებისა და ადგილზე მომსახურების ჩათვლით) გენერალური ლიცენზია.',
    image: lic408img,
  },
  {
    number: '409',
    date: '2008 წლის 27 მაისი',
    title: 'სამხედრო-საბრძოლო იარაღით ვაჭრობა',
    desc: 'სამხედრო-საბრძოლო იარაღით ვაჭრობის გენერალური ლიცენზია.',
    image: lic409img,
  },
]
</script>
