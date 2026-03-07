<template>
  <SectionLayout
    heroTitle="ტექნიკური შესაძლებლობები"
    heroSubtitle="საწარმოო ტექნიკური ბაზა"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <!-- Laboratories -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">Laboratories</h3>
        <p class="text-blue-200/60 text-sm mt-1">TAM owns unique scientific laboratories</p>
      </div>

      <!-- Lab photos -->
      <div class="grid sm:grid-cols-2 gap-4 mb-6">
        <div class="rounded-xl overflow-hidden">
          <img src="../../assets/docx-images/image49.png" alt="Technical laboratory with test equipment" class="w-full h-52 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../assets/docx-images/image48.png" alt="TAM engineer in laboratory" class="w-full h-52 object-cover" />
        </div>
      </div>

      <p class="text-blue-200/70 mb-6 text-sm leading-relaxed">
        TAM owns unique scientific laboratories, where all units and materials are inspected and undergo overhaul/refurbishment works.
      </p>
      <div class="grid sm:grid-cols-2 gap-3">
        <div v-for="lab in labs" :key="lab" class="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/15">
          <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0"></span>
          <span class="text-blue-200/80 text-sm">{{ lab }}</span>
        </div>
      </div>
    </div>

    <!-- Flight Test Facilities -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">Flight Test and Aerodrome Facilities</h3>
      </div>

      <!-- Aerodrome aerial view -->
      <div class="rounded-xl overflow-hidden mb-6">
        <img src="../../assets/docx-images/image50.png" alt="TAM Aerodrome aerial view" class="w-full object-contain max-h-64 bg-gray-100" />
      </div>

      <p class="text-blue-200/70 mb-6 text-sm leading-relaxed">
        JSC TAM Tbilisi Aircraft Manufacturing — upon completion of overhaul and maintenance activities, the aircraft are relocated to the Company's aerodrome for ground runs and flight test operations.
      </p>
      <div class="grid sm:grid-cols-2 gap-4 mb-4">
        <div class="p-4 bg-blue-500/10 rounded-lg border border-blue-500/15 text-center">
          <div class="text-3xl font-black text-blue-400 mb-1">1,800 m</div>
          <div class="text-white text-sm font-medium">Runway length</div>
        </div>
        <div class="p-4 bg-blue-500/10 rounded-lg border border-blue-500/15 text-center">
          <div class="text-3xl font-black text-blue-400 mb-1">170 ha</div>
          <div class="text-white text-sm font-medium">Total area</div>
        </div>
      </div>
      <p class="text-blue-200/60 text-sm">
        The aerodrome infrastructure includes dedicated painting hangars and aircraft parking hangars, fully equipped with appropriate technical systems, ground support equipment (GSE), and specialized installations necessary to support maintenance, inspection, and flight testing activities.
      </p>
    </div>

    <!-- Transmission Stand -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">Transmission Stand</h3>
        <p class="text-blue-200/60 text-sm mt-1">Helicopter transmission testing</p>
      </div>

      <!-- Transmission stand photos -->
      <div class="grid sm:grid-cols-3 gap-4 mb-6">
        <div class="rounded-xl overflow-hidden">
          <img src="../../assets/docx-images/image51.jpeg" alt="Transmission stand assembly" class="w-full h-44 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../assets/docx-images/image52.jpeg" alt="Transmission stand with motor" class="w-full h-44 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../assets/docx-images/image53.jpeg" alt="Transmission stand technicians" class="w-full h-44 object-cover" />
        </div>
      </div>

      <div class="space-y-3">
        <div v-for="item in transmissionItems" :key="item" class="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/15">
          <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0"></span>
          <span class="text-blue-200/80 text-sm">{{ item }}</span>
        </div>
      </div>
    </div>

    <!-- Painting Facility -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-6">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
          </svg>
        </div>
        <div>
          <h4 class="text-white font-bold text-lg">Painting Facility</h4>
          <p class="text-blue-200/70 text-sm">სპეციალიზებული სამღებრო ანგარი სრული ტექნიკური ინსტალაციებით.</p>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')

const labs = [
  'Fuel system units',
  'Hydraulic system units',
  'Pneumatic system units',
  'Weapons and fire control systems',
  'Engines and control systems',
  'Radio-Electronic Systems',
  'Navigation Systems',
]

const transmissionItems = [
  'Helicopter transmission test — for Mi-8, Mi-17, Mi-171, Mi-172, Mi-24 and Mi-35 type helicopters',
  'Helicopter transmission imitation',
  'Testing all the generators',
  'Testing under the same workload as during the flight',
]
</script>
