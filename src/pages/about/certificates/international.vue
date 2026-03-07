<template>
  <SectionLayout
    heroTitle="საერთაშორისო სერტიფიკატები"
    heroSubtitle="ISO და EN სერტიფიკატები"
    sidebarTitle="ჩვენს შესახებ"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-8">
        <h3 class="text-2xl font-bold text-white">საერთაშორისო სერტიფიკატები</h3>
        <p class="text-blue-200/60 text-sm mt-1">ISO და EN სტანდარტები</p>
      </div>

      <!-- Certificate scans -->
      <div class="grid sm:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-xl overflow-hidden border border-blue-500/20">
          <img src="../../../assets/docx-images/image15.png" alt="ISO 9001:2008 Certificate" class="w-full object-contain p-2" />
        </div>
        <div class="bg-white rounded-xl overflow-hidden border border-blue-500/20">
          <img src="../../../assets/docx-images/image16.png" alt="EN 9100:2003 Certificate" class="w-full object-contain p-2" />
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <div v-for="cert in certs" :key="cert.name" class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center gap-4">
          <div class="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
            <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <div>
            <div class="text-white font-bold text-lg">{{ cert.name }}</div>
            <div class="text-blue-200/70 text-sm">{{ cert.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../../data/navigation.js'

const sidebarLinks = getSidebarLinks('about')

const certs = [
  { name: 'ISO 9001', desc: 'ხარისხის მართვის სისტემა' },
  { name: 'EN 9100', desc: 'საავიაციო ხარისხის სტანდარტი' },
  { name: 'ISO 14001', desc: 'გარემოს მართვის სისტემა' },
  { name: 'ISO 45001', desc: 'შრომის უსაფრთხოების სისტემა' },
]
</script>
