<template>
  <aside class="lg:w-1/3">
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 sticky top-28">
      <div class="p-6 border-b border-blue-500/15">
        <h3 class="text-xl font-bold text-white border-l-4 border-blue-400 pl-4">
          {{ title }}
        </h3>
      </div>

      <nav class="p-6">
        <ul class="space-y-3">
          <li v-for="item in links" :key="item.to">
            <router-link
              :to="item.to"
              class="flex items-center p-3 rounded-lg transition-colors"
              :class="route.path === item.to
                ? 'bg-blue-600/20 text-white font-semibold border border-blue-500/30'
                : 'text-blue-200/70 hover:bg-white/5 hover:text-white'"
            >
              <svg class="w-5 h-5 mr-3 shrink-0" :class="route.path === item.to ? 'text-blue-400' : 'text-blue-500/50'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
              </svg>
              <span>{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

defineProps({
  title: String,
  links: Array,
})
</script>
