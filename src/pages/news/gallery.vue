<template>
  <SectionLayout
    heroTitle="გალერეა"
    heroSubtitle="ფოტო გალერეა"
    sidebarTitle="ახალი ამბები & მედია"
    :sidebarLinks="sidebarLinks"
  >
    <!-- Aircraft & Helicopters -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8 mb-6">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">თვითმფრინავები & შვეულმფრენები</h3>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image26.jpeg" alt="Su-25UB takeoff" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image27.jpeg" alt="Su-25 in flight" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image25.jpeg" alt="Mi-24 helicopters in flight" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image22.jpeg" alt="Mi-24 in TAM hangar" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image24.jpeg" alt="Row of Mi-24 helicopters in hangar" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image3.jpeg" alt="ELITE-Jet business aircraft" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>

    <!-- Factory & Facilities -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8 mb-6">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">ქარხანა & ლაბორატორიები</h3>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image23.jpeg" alt="TAM facility exterior" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image17.jpeg" alt="Rubber production factory" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image18.jpeg" alt="Rubber production facility" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image49.png" alt="Technical laboratory" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image48.png" alt="TAM engineer in laboratory" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="rounded-xl overflow-hidden group cursor-pointer">
          <img src="../../assets/docx-images/image51.jpeg" alt="Transmission stand assembly" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('news')
</script>
