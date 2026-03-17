<template>
  <section id="partners" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 reveal">
        <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">პარტნიორები</span>
        <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900">ჩვენი <span class="text-blue-600">პარტნიორები</span></h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">10-ზე მეტ ქვეყანაში საერთაშორისო პარტნიორობა</p>
      </div>
    </div>

      <!-- World Map — full width -->
      <div class="relative bg-[#07111f] overflow-hidden reveal mb-10 shadow-2xl" style="padding-top: 65.9%;">
        <div class="absolute inset-0">
          <svg
            :viewBox="worldMap.viewBox"
            class="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Subtle graticule -->
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
                :class="[
                  'country-path transition-colors duration-300',
                  partnerIds.has(loc.id) ? 'partner-country' : 'default-country'
                ]"
                @mouseenter="partnerIds.has(loc.id) && onHover(getPartner(loc.id), $event)"
                @mouseleave="onLeave"
              />
            </g>

            <!-- Pulsing dots on partner countries -->
            <g v-for="p in partners" :key="'dot-'+p.id">
              <circle
                :cx="p.cx" :cy="p.cy" r="7"
                fill="#3b82f6" opacity="0.3"
                class="pulse-ring"
                :style="{ animationDelay: p.delay }"
              />
              <circle
                :cx="p.cx" :cy="p.cy" r="3.5"
                fill="#93c5fd" stroke="#fff" stroke-width="1"
                class="cursor-pointer"
                @mouseenter="onHover(p, $event)"
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
              <span class="text-lg leading-none">{{ hovered.flag }}</span>
              <span class="font-bold text-gray-900 text-sm whitespace-nowrap">{{ hovered.name }}</span>
              <div class="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-0 h-0"
                   style="border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid white;"/>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Partner badges & button -->
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-3 mb-12 reveal">
          <div
            v-for="p in partners" :key="p.id"
            class="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full hover:bg-blue-600 hover:border-blue-600 group transition-all cursor-default"
          >
            <span class="text-lg leading-none">{{ p.flag }}</span>
            <span class="font-semibold text-blue-900 group-hover:text-white text-sm transition-colors">{{ p.name }}</span>
          </div>
        </div>

        <div class="text-center">
          <router-link
            to="/partners"
            class="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            ყველა პარტნიორი
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import worldMapData from '@svg-maps/world'

const worldMap = worldMapData

// Graticule lines
const graticuleH = [111, 222, 333, 444, 555]          // every ~30° lat
const graticuleV = [84, 168, 252, 336, 505, 589, 673, 757, 841, 925]  // every ~30° lon

const partners = [
  { id: 'tr', name: 'თურქეთი',     flag: '🇹🇷', cx: 585, cy: 342, delay: '0s'    },
  { id: 'il', name: 'ისრაელი',     flag: '🇮🇱', cx: 577, cy: 368, delay: '0.3s'  },
  { id: 'pl', name: 'პოლონეთი',    flag: '🇵🇱', cx: 538, cy: 285, delay: '0.6s'  },
  { id: 'ua', name: 'უკრაინა',     flag: '🇺🇦', cx: 586, cy: 316, delay: '0.9s'  },
  { id: 'cz', name: 'ჩეხეთი',      flag: '🇨🇿', cx: 522, cy: 298, delay: '1.2s'  },
  { id: 'bg', name: 'ბულგარეთი',   flag: '🇧🇬', cx: 560, cy: 330, delay: '1.5s'  },
  { id: 'kz', name: 'ყაზახეთი',    flag: '🇰🇿', cx: 700, cy: 308, delay: '1.8s'  },
  { id: 'az', name: 'აზერბაიჯანი', flag: '🇦🇿', cx: 615, cy: 336, delay: '2.1s'  },
]

const partnerIds = computed(() => new Set(partners.map(p => p.id)))

function getPartner(id) {
  return partners.find(p => p.id === id)
}

const hovered = ref(null)
const tooltipLeft = ref('0%')
const tooltipTop = ref('0%')

function onHover(partner, event) {
  if (!partner) return
  hovered.value = partner
  tooltipLeft.value = (partner.cx / 1010 * 100) + '%'
  tooltipTop.value = (partner.cy / 666 * 100) + '%'
}

function onLeave() {
  hovered.value = null
}
</script>

<style scoped>
.default-country {
  fill: #112240;
  stroke: #1a3a6b;
  stroke-width: 0.3px;
}
.partner-country {
  fill: #1d4ed8;
  stroke: #3b82f6;
  stroke-width: 0.5px;
  filter: drop-shadow(0 0 4px rgba(59,130,246,0.6));
  cursor: pointer;
}
.partner-country:hover {
  fill: #2563eb;
  filter: drop-shadow(0 0 8px rgba(59,130,246,0.9));
}

.pulse-ring {
  animation: pulse 2.4s ease-out infinite;
  transform-box: fill-box;
  transform-origin: center;
}
@keyframes pulse {
  0%   { transform: scale(1);   opacity: 0.4; }
  70%  { transform: scale(3.5); opacity: 0; }
  100% { transform: scale(1);   opacity: 0; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.15s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
