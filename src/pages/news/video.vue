<template>
  <SectionLayout
    heroTitle="ვიდეო"
    heroSubtitle="ვიდეო მასალები"
    sidebarTitle="ახალი ამბები & მედია"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">ვიდეო მასალები</h3>
      </div>
      <div class="space-y-6">
        <div class="rounded-xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/B3SClf2IAZg"
            class="w-full aspect-video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <p class="text-blue-200/60 text-sm text-center">
          სს „თბილავიამშენი" — JSC TAM Tbilisi Aircraft Manufacturing
        </p>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('news')
</script>
