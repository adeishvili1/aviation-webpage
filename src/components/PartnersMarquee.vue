<template>
  <section
    class="relative hidden overflow-hidden select-none border-y border-gray-100 bg-white md:block"
    style="height: 52px;"
  >
    <div class="absolute inset-0 flex items-center whitespace-nowrap overflow-hidden border-t border-gray-100 bg-white/80">
      <div class="marquee-track flex items-center gap-16 px-8 py-2">
        <span v-for="i in 16" :key="i" class="text-xs font-bold tracking-widest uppercase text-gray-300">
          JSC TAM Tbilisi Aircraft Manufacturing
        </span>
      </div>
    </div>
  </section>
</template>
