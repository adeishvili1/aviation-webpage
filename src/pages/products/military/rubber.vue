<template>
  <SectionLayout
    heroTitle="რეზინტექნიკური წარმოება"
    heroSubtitle="რეზინტექნიკური პროდუქცია"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <!-- Soft Fuel Tanks -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">Soft Fuel Tanks</h3>
        <p class="text-blue-200/60 text-sm mt-1">TAM is Manufacturing Soft Fuel Tanks</p>
      </div>

      <!-- Fuel tank photos -->
      <div class="grid sm:grid-cols-3 gap-4 mb-6">
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image19.png" alt="Soft fuel tank" class="w-full h-44 object-contain bg-gray-100 p-2" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image20.jpg" alt="Soft fuel tank boxed" class="w-full h-44 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image21.jpg" alt="Fuel tank in workshop" class="w-full h-44 object-cover" />
        </div>
      </div>

      <p class="text-blue-200/70 mb-6 leading-relaxed">
        JSC TAM Tbilisi Aircraft Manufacturing აწარმოებს რბილ საწვავის ავზებს შემდეგი ტიპის
        შვეულმფრენებისა და თვითმფრინავებისთვის:
      </p>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="ac in fuelTankAircraft" :key="ac" class="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/15">
          <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0"></span>
          <span class="text-white font-medium">{{ ac }}</span>
        </div>
      </div>
    </div>

    <!-- Rubber Products -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">Rubber Products</h3>
      </div>

      <!-- Rubber factory photos -->
      <div class="grid sm:grid-cols-2 gap-4 mb-6">
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image17.jpeg" alt="Rubber production factory" class="w-full h-52 object-cover" />
        </div>
        <div class="rounded-xl overflow-hidden">
          <img src="../../../assets/docx-images/image18.jpeg" alt="Rubber production facility" class="w-full h-52 object-cover" />
        </div>
      </div>

      <p class="text-blue-200/80 leading-relaxed mb-6">
        JSC TAM Tbilisi Aircraft Manufacturing produces a wide range of rubber and rubber-technical
        products for aviation applications.
      </p>
      <div class="grid sm:grid-cols-2 gap-3">
        <div v-for="prod in rubberProducts" :key="prod" class="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/15">
          <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0"></span>
          <span class="text-blue-200/80 text-sm">{{ prod }}</span>
        </div>
      </div>
      <p class="text-blue-200/60 text-sm mt-4 italic">
        ...and other elastomeric components intended for helicopters and fixed-wing aircraft.
      </p>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')

const fuelTankAircraft = ['MiG-21', 'SU-25', 'Mi-8, Mi-17, Mi-171', 'Mi-24 and Mi-35', 'SU-22']

const rubberProducts = [
  'Diaphragms', 'O-rings', 'Gaskets', 'Seals', 'Bushings',
  'Protective boots', 'Hoses', 'Sealing rings', 'Rubber membranes',
  'Anti-vibration mounts', 'Fuel and oil system seals',
]
</script>
