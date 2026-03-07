<template>
  <SectionLayout
    heroTitle="სერვისი"
    heroSubtitle="სერვისი და ტექნიკური მომსახურება"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <div class="space-y-6">
      <div v-for="svc in services" :key="svc.title" class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="svc.icon"/>
            </svg>
          </div>
          <div class="flex-1">
            <h4 class="text-white font-bold text-lg mb-2">{{ svc.title }}</h4>
            <p class="text-blue-200/70 text-sm leading-relaxed mb-3">{{ svc.desc }}</p>
            <ul v-if="svc.items" class="space-y-1">
              <li v-for="item in svc.items" :key="item" class="flex items-center gap-2 text-sm text-blue-200/60">
                <span class="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')

const services = [
  {
    title: 'Expertise',
    desc: 'ტექნიკური ექსპერტიზა — საფრენი აპარატების, კომპონენტებისა და სისტემების სრული ტექნიკური შეფასება.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    items: null,
  },
  {
    title: 'Overhaul',
    desc: 'სრული ოვერჰოლი (კაპიტალური რემონტი) — შვეულმფრენებისა და თვითმფრინავების ყველა კომპონენტის სრული განახლება.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    items: null,
  },
  {
    title: 'Modernization',
    desc: 'მოდერნიზება — საფრენი აპარატების სისტემებისა და კომპონენტების განახლება თანამედროვე სტანდარტებამდე.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    items: ['Mi-17 Modernization Programs', 'Su-25 Modernization', 'Mi-24/Mi-35 Helicopter Life Extension Services'],
  },
  {
    title: 'Maintenance',
    desc: 'ტექნიკური მომსახურება — რეგულარული და პრევენციული ტექნიკური მომსახურება ადგილობრივი და საერთაშორისო დაკვეთებით.',
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    items: null,
  },
  {
    title: 'Custom Design Shop',
    desc: 'Custom Design Shop — სპეციალური საინჟინრო და საკონსტრუქციო სამუშაოები კლიენტის ინდივიდუალური მოთხოვნებით.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    items: null,
  },
  {
    title: 'Trainings',
    desc: 'პროფესიული ტრენინგები — ადგილობრივი და საერთაშორისო ავიასპეციალისტების კვალიფიკაციის ამაღლება.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    items: null,
  },
]
</script>
