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
        <div
          v-for="(img, i) in aircraftImages"
          :key="img.src"
          class="rounded-xl overflow-hidden group cursor-pointer"
          @click="openGallery(aircraftImages, i)"
        >
          <img :src="img.src" :alt="img.alt" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>

    <!-- Factory & Facilities -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8 mb-6">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">ქარხანა & ლაბორატორიები</h3>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(img, i) in factoryImages"
          :key="img.src"
          class="rounded-xl overflow-hidden group cursor-pointer"
          @click="openGallery(factoryImages, i)"
        >
          <img :src="img.src" :alt="img.alt" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'
import { useLightbox } from '../../composables/useLightbox'

const sidebarLinks = getSidebarLinks('news')
const { openGallery } = useLightbox()

const aircraftImages = [
  { src: new URL('../../assets/docx-images/image26.jpeg', import.meta.url).href, alt: 'Su-25UB takeoff' },
  { src: new URL('../../assets/docx-images/image27.jpeg', import.meta.url).href, alt: 'Su-25 in flight' },
  { src: new URL('../../assets/docx-images/image25.jpeg', import.meta.url).href, alt: 'Mi-24 helicopters in flight' },
  { src: new URL('../../assets/docx-images/image22.jpeg', import.meta.url).href, alt: 'Mi-24 in TAM hangar' },
  { src: new URL('../../assets/docx-images/image24.jpeg', import.meta.url).href, alt: 'Row of Mi-24 helicopters in hangar' },
  { src: new URL('../../assets/docx-images/image3.jpeg', import.meta.url).href, alt: 'ELITE-Jet business aircraft' },
]

const factoryImages = [
  { src: new URL('../../assets/docx-images/image23.jpeg', import.meta.url).href, alt: 'TAM facility exterior' },
  { src: new URL('../../assets/docx-images/image17.jpeg', import.meta.url).href, alt: 'Rubber production factory' },
  { src: new URL('../../assets/docx-images/image18.jpeg', import.meta.url).href, alt: 'Rubber production facility' },
  { src: new URL('../../assets/docx-images/image49.png', import.meta.url).href, alt: 'Technical laboratory' },
  { src: new URL('../../assets/docx-images/image48.png', import.meta.url).href, alt: 'TAM engineer in laboratory' },
  { src: new URL('../../assets/docx-images/image51.jpeg', import.meta.url).href, alt: 'Transmission stand assembly' },
]
</script>
