<template>
  <SectionLayout
    heroTitle="რაკეტები"
    heroSubtitle="სარაკეტო სისტემები"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-8">
        <h3 class="text-2xl font-bold text-white">R-60 and R-73 Missiles</h3>
        <p class="text-blue-200/60 text-sm mt-1">„ჰაერი-ჰაერი" ტიპის IR საბრძოლო რაკეტები</p>
      </div>
      <div class="space-y-6">
        <div v-for="missile in missiles" :key="missile.name" class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <div class="flex items-start gap-4">
            <div class="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
              <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </div>
            <div>
              <h4 class="text-white font-bold text-xl mb-2">{{ missile.name }}</h4>
              <p class="text-blue-200/70 leading-relaxed">{{ missile.desc }}</p>
              <div class="flex flex-wrap gap-2 mt-4">
                <span v-for="tag in missile.tags" :key="tag" class="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/20">{{ tag }}</span>
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

const sidebarLinks = getSidebarLinks('products')

const missiles = [
  {
    name: 'R-60',
    desc: 'R-60 — „ჰაერი-ჰაერი" ტიპის მოკლე მანძილის ინფრაწითელი მიმდევარი რაკეტა. ქარხანა, 90-იანი წლებამდე, R-60 საბრძოლო რაკეტებს აწარმოებდა.',
    tags: ['Air-to-Air', 'IR Guided', 'Short Range'],
  },
  {
    name: 'R-73',
    desc: 'R-73 — „ჰაერი-ჰაერი" ტიპის მაღალი მანევრულობის ინფრაწითელი მიმდევარი რაკეტა. 90-იანი წლებამდე „თბილავიამშენი" R-73 IR საბრძოლო რაკეტებსაც აწარმოებდა.',
    tags: ['Air-to-Air', 'IR Guided', 'High Maneuverability'],
  },
]
</script>
