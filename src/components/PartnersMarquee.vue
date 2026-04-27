<template>
  <section
    class="relative hidden overflow-hidden select-none border-y border-gray-100 bg-white md:block"
    style="height: 130px;"
  >
    <div
      v-for="plane in planes"
      :key="plane.id"
      class="plane-lane absolute flex items-center will-change-transform"
      :style="{
        top: plane.top,
        zIndex: plane.zIndex,
        animationDuration: `${plane.duration}s`,
        animationDelay: `${plane.delay}s`,
      }"
    >
      <div
        class="relative flex items-center plane-bob"
        :style="{ animationDelay: `${plane.delay}s` }"
      >
        <div
          class="contrails-container absolute flex flex-col justify-between"
          :style="{
            width: plane.trailWidth + 'px',
            opacity: plane.trailOpacity,
            right: 'calc(100% - 24px)',
          }"
        >
          <div class="vapor-trail" :style="{ background: plane.color }"></div>
          <div class="vapor-trail" :style="{ background: plane.color }"></div>
        </div>

        <svg
          class="relative z-10"
          :style="{ width: plane.size + 'px', color: plane.color }"
          viewBox="0 0 64 28"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 32,14 L 17,3 C 15,2 14.5,2.5 15,4 L 25,14 L 15,24 C 14.5,25.5 15,26 17,25 L 32,14 Z" opacity="0.95" />
          <path d="M 4,14 C 4,11.5 40,11 57,13 C 60.5,13.5 60.5,14.5 57,15 C 40,17 4,16.5 4,14 Z" />
          <path d="M 10,14 L 3,7 C 2,6 1.5,6.5 2,8 L 6,14 L 2,20 C 1.5,21.5 2,22 3,21 L 10,14 Z" opacity="0.9" />
          <rect x="23" y="7" width="6" height="2" rx="1" opacity="0.8" />
          <rect x="23" y="19" width="6" height="2" rx="1" opacity="0.8" />
        </svg>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full flex whitespace-nowrap overflow-hidden border-t border-gray-100 bg-white/80">
      <div class="marquee-track flex items-center gap-16 px-8 py-2">
        <span v-for="i in 16" :key="i" class="text-xs font-bold tracking-widest uppercase text-gray-300">
          JSC TAM Tbilisi Aircraft Manufacturing
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const planes = [
  { id: 1, top: '15px', size: 56, duration: 16, delay: 0, color: '#60a5fa', trailWidth: 200, trailOpacity: 0.45, zIndex: 3 },
  { id: 2, top: '45px', size: 36, duration: 24, delay: 4, color: '#bfdbfe', trailWidth: 120, trailOpacity: 0.25, zIndex: 1 },
  { id: 3, top: '75px', size: 68, duration: 13, delay: 8, color: '#3b82f6', trailWidth: 260, trailOpacity: 0.60, zIndex: 4 },
  { id: 4, top: '95px', size: 28, duration: 30, delay: 2, color: '#dbeafe', trailWidth: 90, trailOpacity: 0.18, zIndex: 0 },
  { id: 5, top: '25px', size: 46, duration: 19, delay: 11, color: '#93c5fd', trailWidth: 160, trailOpacity: 0.35, zIndex: 2 },
  { id: 6, top: '65px', size: 40, duration: 21, delay: 6, color: '#bfdbfe', trailWidth: 140, trailOpacity: 0.28, zIndex: 1 },
]
</script>
