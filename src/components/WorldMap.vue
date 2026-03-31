<template>
  <div class="relative bg-[#07111f] overflow-hidden shadow-2xl" style="padding-top: 65.9%;">
    <div class="absolute inset-0">
      <svg :viewBox="worldMap.viewBox" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <!-- Graticule -->
        <g stroke="#0f2a47" stroke-width="0.4" fill="none">
          <line v-for="y in graticuleH" :key="'h'+y" x1="0" :y1="y" x2="1010" :y2="y"/>
          <line v-for="x in graticuleV" :key="'v'+x" :x1="x" y1="0" :x2="x" y2="666"/>
        </g>

        <!-- Countries -->
        <g>
          <path
            v-for="loc in worldMap.locations"
            :key="loc.id"
            :d="loc.path"
            :style="getCountryStyle(loc.id)"
            class="country-path transition-colors duration-300"
            @mouseenter="onHover(loc.id, $event)"
            @mouseleave="onLeave"
          />
        </g>
      </svg>

      <!-- Tooltip -->
      <Transition name="fade">
        <div
          v-if="hovered"
          class="absolute pointer-events-none bg-white rounded-xl shadow-2xl px-3 py-2 flex items-center gap-2 z-20 -translate-x-1/2 -translate-y-full"
          :style="{ left: tooltipLeft, top: tooltipTop, marginTop: '-10px' }"
        >
          <span class="font-bold text-gray-900 text-sm whitespace-nowrap">{{ hovered.label }}</span>
          <div class="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-0 h-0"
               style="border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid white;"/>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import worldMapData from '@svg-maps/world'

const worldMap = worldMapData

const graticuleH = [111, 222, 333, 444, 555]
const graticuleV = [84, 168, 252, 336, 505, 589, 673, 757, 841, 925]

const regions = [
  { name: 'დასავლეთ ევროპა',              color: '#1d4ed8', ids: ['gb','ie','fr','es','pt','be','nl','lu','de','it','mt','mc','sm','ad','li','no','se','dk','fi','is'] },
  { name: 'ცენტრალური ევროპა',             color: '#2563eb', ids: ['at','ch','cz','sk','pl','hu','si'] },
  { name: 'აღმოსავლეთ ევროპა',            color: '#3b82f6', ids: ['ua','by','md','ru','ee','lv','lt','ro'] },
  { name: 'სამხრეთ-აღმოსავლეთ ევროპა',   color: '#1e40af', ids: ['bg','rs','hr','ba','me','mk','al','gr','cy','xk'] },
  { name: 'სამხრეთ კავკასია',              color: '#0ea5e9', ids: ['ge','am','az'] },
  { name: 'ახლო აღმოსავლეთი',             color: '#0284c7', ids: ['tr','sy','lb','il','jo','iq','ir','sa','ye','om','ae','qa','bh','kw','ps'] },
  { name: 'ცენტრალური აზია / შუა აზია',  color: '#0369a1', ids: ['kz','uz','tm','tj','kg','af'] },
  { name: 'სამხრეთ აზია',                  color: '#075985', ids: ['in','pk','bd','lk','np','bt','mv'] },
  { name: 'აღმოსავლეთ აზია',              color: '#0c4a6e', ids: ['cn','jp','kr','kp','mn'] },
  { name: 'ჩრდილოეთ აფრიკა',              color: '#0f766e', ids: ['ma','dz','tn','ly','eg','sd','mr'] },
  { name: 'დასავლეთ აფრიკა',              color: '#0d9488', ids: ['sn','gm','gw','gn','sl','lr','ci','gh','tg','bj','ng','bf','ml','ne','cv'] },
  { name: 'ცენტრალური აფრიკა',            color: '#14b8a6', ids: ['cm','cf','cg','cd','ga','gq','st','td'] },
  { name: 'აღმოსავლეთ აფრიკა',           color: '#0f766e', ids: ['et','er','dj','so','ke','ug','rw','bi','tz','mw','zm','zw','mz','mg','km','sc','ss'] },
  { name: 'სამხრეთ აფრიკა',               color: '#0d9488', ids: ['za','ls','sz','na','bw','ao'] },
  { name: 'ჩრდილოეთ ამერიკა',             color: '#7c3aed', ids: ['us','ca','mx'] },
  { name: 'სამხრეთ ამერიკა',              color: '#6d28d9', ids: ['br','ar','cl','pe','co','ve','ec','bo','py','uy','gy','sr','gf'] },
]

const countryMap = new Map()
regions.forEach(r => r.ids.forEach(id => countryMap.set(id, { color: r.color, name: r.name })))

function getCountryStyle(id) {
  const region = countryMap.get(id)
  if (region) return { fill: region.color, stroke: '#07111f', strokeWidth: '0.5' }
  return { fill: '#0f2a47', stroke: '#0f2a47', strokeWidth: '0.5' }
}

const hovered = ref(null)
const tooltipLeft = ref('0%')
const tooltipTop = ref('0%')

function onHover(id, event) {
  const region = countryMap.get(id)
  if (!region) return
  hovered.value = { label: region.name }
  const parent = event.currentTarget?.closest('.absolute.inset-0')?.getBoundingClientRect()
  if (parent) {
    tooltipLeft.value = ((event.clientX - parent.left) / parent.width * 100) + '%'
    tooltipTop.value = ((event.clientY - parent.top) / parent.height * 100) + '%'
  }
}

function onLeave() {
  hovered.value = null
}
</script>
