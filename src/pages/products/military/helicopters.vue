<template>
  <SectionLayout
    heroTitle="ვერტმფრენები & თვითმფრინავები"
    heroSubtitle="საჰაერო ხომალდები"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <!-- Helicopters -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">Helicopters</h3>
        <p class="text-blue-200/60 text-sm mt-1">შვეულმფრენების ოვერჰოლი და მოდერნიზება</p>
      </div>

      <!-- Helicopter photos -->
      <div class="grid sm:grid-cols-3 gap-4 mb-6">
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image22.jpeg" alt="Mi-24 helicopter in TAM hangar" class="w-full h-48 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image24.jpeg" alt="Mi-24 helicopters in TAM hangar" class="w-full h-48 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image25.jpeg" alt="Mi-24 helicopters in flight" class="w-full h-48 object-cover" />
        </div>
      </div>

      <div class="space-y-4">
        <div v-for="heli in helicopters" :key="heli.model" class="p-5 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-white font-bold text-lg">{{ heli.model }}</h4>
            <span class="px-3 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full">Overhaul</span>
          </div>
          <p class="text-blue-200/70 text-sm">{{ heli.desc }}</p>
        </div>
      </div>

      <!-- Mi-24/35 Modernization diagrams -->
      <div class="mt-6 space-y-4">
        <div class="rounded-xl overflow-hidden bg-white p-4">
          <img src="../../../assets/docx-images/image46.png" alt="Mi-24/35 Upgrade Program System Architecture" class="w-full object-contain" />
          <p class="text-gray-500 text-xs text-center mt-2">Figure: Upgrade Program Typical System Architecture (WSO + Pilot)</p>
        </div>
        <div class="rounded-xl overflow-hidden bg-white p-4">
          <img src="../../../assets/docx-images/image47.png" alt="Mi-24 Modernization cockpit upgrades" class="w-full object-contain" />
        </div>
      </div>
    </div>

    <!-- Aircraft -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">Aircraft</h3>
        <p class="text-blue-200/60 text-sm mt-1">თვითმფრინავების ოვერჰოლი და მოდერნიზება</p>
      </div>

      <!-- Aircraft photos -->
      <div class="grid sm:grid-cols-3 gap-4 mb-6">
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image33.png" alt="Su-25 front view" class="w-full h-48 object-contain bg-gray-100" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image26.jpeg" alt="Su-25UB taking off" class="w-full h-48 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image27.jpeg" alt="Su-25 in flight" class="w-full h-48 object-cover" />
        </div>
      </div>

      <div class="space-y-4">
        <div v-for="ac in aircraft" :key="ac.model" class="p-5 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-white font-bold text-lg">{{ ac.model }}</h4>
            <span class="px-3 py-1 bg-emerald-600/30 text-emerald-300 text-xs rounded-full">Overhaul / Modernization</span>
          </div>
          <p class="text-blue-200/70 text-sm">{{ ac.desc }}</p>
        </div>
      </div>

      <!-- Su-25 Modernization diagram -->
      <div class="mt-6 rounded-xl overflow-hidden bg-white p-4">
        <img src="../../../assets/docx-images/image31.png" alt="SU-25 Modernization Single Seat system diagram" class="w-full object-contain" />
        <p class="text-gray-500 text-xs text-center mt-2">SU-25 Modernization (Single Seat) — Avionics & Mission System</p>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')

const helicopters = [
  {
    model: 'Mi-8',
    desc: 'Mi-8 ტიპის შვეულმფრენის სრული ოვერჰოლი, კომპონენტების შემოწმება, სასტენდო გამოცდები და ფრენის ტესტირება.',
  },
  {
    model: 'Mi-17',
    desc: 'Mi-17 / Mi-171 ტიპის შვეულმფრენის სრული ოვერჰოლი. Mi-17 Modernization Program — ავიონიკის, სისტემების და კომპონენტების მოდერნიზება.',
  },
  {
    model: 'Mi-24 / Mi-35',
    desc: 'Mi-24 და Mi-35 ტიპის საბრძოლო შვეულმფრენის სიცოცხლის გახანგრძლივება (Life Extension Services) და სრული ოვერჰოლი.',
  },
]

const aircraft = [
  {
    model: 'Su-25',
    desc: 'Su-25 ტიპის საიერიშო თვითმფრინავის სრული ოვერჰოლი, Su-25 Modernization Program. ეს მოდიფიკაცია მხოლოდ საქართველოში იწარმოებოდა.',
  },
  {
    model: 'Su-25UB',
    desc: 'Su-25UB — ორადგილიანი სასწავლო-საბრძოლო ვარიანტის სრული ოვერჰოლი და მოდერნიზება.',
  },
]
</script>
