<template>
  <SectionLayout
    heroTitle="შემოგვიერთდით"
    heroSubtitle="გახდით ჩვენი გუნდის წევრი"
    sidebarTitle="კარიერა"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">CV ატვირთვა</h3>
      </div>
      <p class="text-blue-200/80 mb-8">
        გამოგზავნეთ თქვენი რეზიუმე და გახდით ჩვენი გუნდის წევრი.
      </p>

      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-blue-300/80 mb-2">სახელი და გვარი</label>
          <input type="text" disabled class="w-full bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-white/50 placeholder-white/30" placeholder="სახელი გვარი">
        </div>
        <div>
          <label class="block text-sm font-medium text-blue-300/80 mb-2">ელ. ფოსტა</label>
          <input type="email" disabled class="w-full bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-white/50 placeholder-white/30" placeholder="email@example.com">
        </div>
        <div>
          <label class="block text-sm font-medium text-blue-300/80 mb-2">CV ატვირთვა</label>
          <div class="border-2 border-dashed border-blue-500/30 rounded-xl p-12 text-center">
            <svg class="w-12 h-12 text-blue-400/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            <p class="text-white/40 text-sm">ატვირთეთ CV (PDF, DOC)</p>
          </div>
        </div>
        <button disabled class="w-full bg-blue-600/50 text-white/50 font-semibold py-3 rounded-lg cursor-not-allowed">
          გაგზავნა (მალე)
        </button>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('careers')
</script>
