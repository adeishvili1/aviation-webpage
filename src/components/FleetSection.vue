<template>
  <section id="fleet" class="py-24 bg-white relative">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">ჩვენი ფლოტი</span>
        <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900">საჰაერო <span class="text-blue-600">ხომალდები</span></h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">ახალი თაობის ტურბოპროპ აეროპლანები, რომლებიც აერთიანებს ეფექტურობას, კომფორტს და ინოვაციას</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(aircraft, index) in aircrafts"
          :key="aircraft.name"
          class="card-hover rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg reveal"
          :style="{ transitionDelay: index * 0.15 + 's' }"
        >
          <div class="img-zoom h-56 flex items-center justify-center relative" :class="aircraft.bgClass">
            <!-- Aircraft SVG -->
            <svg :viewBox="aircraft.svgViewBox" :class="aircraft.svgClass" fill="none">
              <component :is="'template'" v-if="false" />
              <ellipse v-bind="aircraft.svgParts.body" />
              <path v-for="(p, i) in aircraft.svgParts.paths" :key="i" v-bind="p" />
              <circle v-if="aircraft.svgParts.circle" v-bind="aircraft.svgParts.circle" />
              <rect v-if="aircraft.svgParts.rect" v-bind="aircraft.svgParts.rect" />
              <text v-if="aircraft.svgParts.text" v-bind="aircraft.svgParts.text">{{ aircraft.svgParts.text.content }}</text>
            </svg>
            <div class="absolute top-4 right-4 px-3 py-1 text-white text-xs font-bold rounded-full" :class="aircraft.badgeClass">
              {{ aircraft.badge }}
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ aircraft.name }}</h3>
            <p class="text-gray-500 mb-6">{{ aircraft.description }}</p>
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div v-for="spec in aircraft.specs" :key="spec.label" class="text-center">
                <div class="text-xl font-black text-blue-600">{{ spec.value }}</div>
                <div class="text-xs text-gray-400">{{ spec.label }}</div>
              </div>
            </div>
            <a href="#" class="flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all text-sm">
              დეტალურად
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const aircrafts = [
  {
    name: 'AIR 42-600',
    description: '48 ადგილიანი სამოქალაქო აეროპლანი რეგიონალურ რეისების ფრენებისთვის',
    badge: 'ახალი',
    badgeClass: 'bg-blue-600',
    bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
    svgViewBox: '0 0 300 200',
    svgClass: 'w-48',
    svgParts: {
      body: { cx: 150, cy: 100, rx: 120, ry: 20, fill: '#3b82f6', opacity: 0.8 },
      paths: [
        { d: 'M130 100 L160 100 L170 50 L145 55 Z', fill: '#2563eb' },
        { d: 'M130 100 L160 100 L170 150 L145 145 Z', fill: '#2563eb' },
        { d: 'M35 100 L50 100 L45 75 L30 78 Z', fill: '#60a5fa' },
      ],
      circle: { cx: 230, cy: 98, r: 8, fill: '#bfdbfe' },
    },
    specs: [
      { value: '48', label: 'ადგილი' },
      { value: '1,326', label: 'კმ რადიუსი' },
      { value: '556', label: 'კმ/სთ' },
    ],
  },
  {
    name: 'AIR 72-600',
    description: '78 ადგილიანი ფლაგმანი — ყველაზე პოპულარული სამოქალაქო აეროპლანი',
    badge: 'ბესტსელერი',
    badgeClass: 'bg-emerald-500',
    bgClass: 'bg-gradient-to-br from-blue-100 to-blue-200',
    svgViewBox: '0 0 300 200',
    svgClass: 'w-56',
    svgParts: {
      body: { cx: 150, cy: 100, rx: 130, ry: 22, fill: '#2563eb', opacity: 0.85 },
      paths: [
        { d: 'M125 100 L165 100 L180 42 L140 50 Z', fill: '#1d4ed8' },
        { d: 'M125 100 L165 100 L180 158 L140 150 Z', fill: '#1d4ed8' },
        { d: 'M25 100 L45 100 L38 70 L18 74 Z', fill: '#3b82f6' },
      ],
      circle: { cx: 245, cy: 98, r: 9, fill: '#bfdbfe' },
    },
    specs: [
      { value: '78', label: 'ადგილი' },
      { value: '1,528', label: 'კმ რადიუსი' },
      { value: '556', label: 'კმ/სთ' },
    ],
  },
  {
    name: 'AIR 72-600F',
    description: 'სატვირთო ვერსია — ეფექტური რეგიონალურ სატვირთო გადაზიდვებში',
    badge: 'სატვირთო',
    badgeClass: 'bg-indigo-600',
    bgClass: 'bg-gradient-to-br from-blue-200 to-indigo-200',
    svgViewBox: '0 0 300 200',
    svgClass: 'w-56',
    svgParts: {
      body: { cx: 150, cy: 100, rx: 130, ry: 25, fill: '#1e40af', opacity: 0.85 },
      paths: [
        { d: 'M125 100 L165 100 L180 42 L140 50 Z', fill: '#1e3a8a' },
        { d: 'M125 100 L165 100 L180 158 L140 150 Z', fill: '#1e3a8a' },
        { d: 'M25 100 L45 100 L38 70 L18 74 Z', fill: '#2563eb' },
      ],
      circle: null,
      rect: { x: 60, y: 88, width: 120, height: 24, rx: 4, fill: '#3b82f6', opacity: 0.3 },
      text: { x: 120, y: 104, 'text-anchor': 'middle', fill: '#bfdbfe', 'font-size': 12, 'font-weight': 'bold', content: 'CARGO' },
    },
    specs: [
      { value: '9.0', label: 'ტონა ტვირთი' },
      { value: '1,528', label: 'კმ რადიუსი' },
      { value: '556', label: 'კმ/სთ' },
    ],
  },
]
</script>
