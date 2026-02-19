<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <!-- Top Bar -->
    <div class="stat-glow hidden lg:block" style="backdrop-filter: blur(40px)">
      <div class="w-full px-10 py-1.5 flex items-center justify-between">
        <!-- Social Icons -->
        <div class="flex items-center gap-2">
          <a v-for="social in socials" :key="social.name" href="#"
             class="w-7 h-7 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
             :aria-label="social.name">
            <svg class="w-3.5 h-3.5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
              <path :d="social.icon"/>
            </svg>
          </a>
        </div>
        <!-- Search + Language -->
        <div class="flex items-center gap-4">
          <div class="relative">
            <input
              type="text"
              placeholder="ძებნა..."
              class="bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full px-4 py-1 text-sm w-44 focus:w-56 transition-all focus:outline-none focus:border-blue-400/50"
            >
            <svg class="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <div class="flex items-center gap-1 text-sm">
            <button @click="locale = 'ka'" class="px-2 py-0.5 rounded transition-colors" :class="locale === 'ka' ? 'text-white font-bold bg-white/10' : 'text-white/50 hover:text-white'">ქარ</button>
            <span class="text-white/20">|</span>
            <button @click="locale = 'en'" class="px-2 py-0.5 rounded transition-colors" :class="locale === 'en' ? 'text-white font-bold bg-white/10' : 'text-white/50 hover:text-white'">Eng</button>
            <span class="text-white/20">|</span>
            <button @click="locale = 'ru'" class="px-2 py-0.5 rounded transition-colors" :class="locale === 'ru' ? 'text-white font-bold bg-white/10' : 'text-white/50 hover:text-white'">Rus</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <nav
      id="navbar"
      class="transition-all duration-500"
      :class="scrolled ? 'nav-glass' : 'bg-brand-950/90 backdrop-blur-sm'"
    >
      <div class="w-full px-10 py-3 flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group cursor-pointer">
          <img class="h-12 w-auto" src="../assets/logo1.png" alt="logo">
          <div>
            <span class="text-[11px] font-bold text-white tracking-wider">სს თბილავიამშენი</span>
            <span class="text-[9px] text-blue-300 block tracking-[0.3em] font-light">JSC TBILISI AIRCRAFT<br>MANUFACTURING</span>
          </div>
        </router-link>

        <!-- Desktop Nav -->
        <div ref="desktopNavRef" class="hidden lg:flex items-center gap-1">
          <template v-for="link in navLinks" :key="link.id">
            <!-- Simple link (no dropdown) -->
            <router-link
              v-if="!link.children"
              :to="link.to"
              class="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
              :class="isActiveSection(link) ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'"
            >
              {{ link.label }}
            </router-link>

            <!-- Dropdown item -->
            <div v-else class="relative">
              <button
                class="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                :class="isActiveSection(link) ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'"
                @click="toggleDropdown(link.id)"
              >
                {{ link.label }}
                <svg class="w-3.5 h-3.5 opacity-50 transition-transform" :class="{ 'rotate-180': openDropdown === link.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <!-- Dropdown Panel -->
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
              >
                <div
                  v-show="openDropdown === link.id"
                  class="absolute top-full left-0 mt-1 bg-brand-950/95 backdrop-blur-xl border border-blue-500/15 rounded-xl shadow-2xl shadow-black/30 overflow-hidden"
                  :class="link.children.some(c => c.nested) ? 'w-72' : 'w-56'"
                >
                  <div class="py-2">
                    <template v-for="sub in link.children" :key="sub.label">
                      <!-- Regular item -->
                      <router-link
                        v-if="!sub.nested"
                        :to="sub.to"
                        class="flex items-center gap-3 px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-blue-600/20 transition-colors"
                        @click="openDropdown = null"
                      >
                        <svg class="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="sub.icon"/>
                        </svg>
                        <span>{{ sub.label }}</span>
                      </router-link>

                      <!-- Nested group -->
                      <div v-else>
                        <div class="flex items-center gap-3 px-4 pt-3 pb-1">
                          <svg class="w-4 h-4 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="sub.icon"/>
                          </svg>
                          <span class="text-sm font-semibold text-white/90">{{ sub.label }}</span>
                        </div>
                        <router-link
                          v-for="nested in sub.nested"
                          :key="nested.label"
                          :to="nested.to"
                          class="flex items-center gap-3 pl-11 pr-4 py-2 text-sm text-white/60 hover:text-white hover:bg-blue-600/20 transition-colors"
                          @click="openDropdown = null"
                        >
                          <span class="w-1.5 h-1.5 bg-blue-400/60 rounded-full shrink-0"></span>
                          <div>
                            <div>{{ nested.label }}</div>
                            <div v-if="nested.desc" class="text-xs text-white/40 mt-0.5">{{ nested.desc }}</div>
                          </div>
                        </router-link>
                      </div>
                    </template>
                  </div>
                </div>
              </Transition>
            </div>
          </template>
        </div>

        <!-- Mobile burger -->
        <button class="lg:hidden text-white p-2" @click="menuOpen = !menuOpen">
          <svg v-if="!menuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-show="menuOpen" class="lg:hidden bg-brand-950/95 backdrop-blur-xl border-t border-blue-500/10">
          <div class="px-6 py-4 space-y-1">
            <template v-for="link in navLinks" :key="link.id">
              <!-- Simple link -->
              <router-link
                v-if="!link.children"
                :to="link.to"
                class="block py-2.5 text-white/80 hover:text-white transition-colors font-medium"
                @click="menuOpen = false"
              >
                {{ link.label }}
              </router-link>

              <!-- Dropdown section -->
              <div v-else>
                <button
                  class="w-full flex items-center justify-between py-2.5 text-white/80 hover:text-white transition-colors font-medium"
                  @click="mobileExpanded === link.id ? mobileExpanded = null : mobileExpanded = link.id"
                >
                  {{ link.label }}
                  <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': mobileExpanded === link.id }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <div v-show="mobileExpanded === link.id" class="pl-4 pb-2 space-y-1">
                  <template v-for="sub in link.children" :key="sub.label">
                    <router-link
                      v-if="!sub.nested"
                      :to="sub.to"
                      class="flex items-center gap-2 py-2 text-sm text-white/60 hover:text-white transition-colors"
                      @click="menuOpen = false; mobileExpanded = null"
                    >
                      <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="sub.icon"/>
                      </svg>
                      <span>{{ sub.label }}</span>
                    </router-link>
                    <div v-else>
                      <div class="flex items-center gap-2 pt-2 pb-1 text-sm font-semibold text-white/80">
                        <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="sub.icon"/>
                        </svg>
                        {{ sub.label }}
                      </div>
                      <router-link
                        v-for="nested in sub.nested"
                        :key="nested.label"
                        :to="nested.to"
                        class="flex items-center gap-2 pl-6 py-1.5 text-sm text-white/50 hover:text-white transition-colors"
                        @click="menuOpen = false; mobileExpanded = null"
                      >
                        <span class="w-1.5 h-1.5 bg-blue-400/60 rounded-full shrink-0"></span>
                        <span>{{ nested.label }}</span>
                      </router-link>
                    </div>
                  </template>
                </div>
              </div>
            </template>

            <!-- Mobile social + language -->
            <div class="pt-4 mt-4 border-t border-blue-500/10">
              <div class="flex items-center gap-3 mb-3">
                <a v-for="social in socials" :key="social.name" href="#"
                   class="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <svg class="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="social.icon"/>
                  </svg>
                </a>
              </div>
              <div class="flex items-center gap-2 text-sm">
                <button @click="locale = 'ka'" class="px-3 py-1 rounded transition-colors" :class="locale === 'ka' ? 'text-white font-bold bg-white/10' : 'text-white/50'">ქარ</button>
                <button @click="locale = 'en'" class="px-3 py-1 rounded transition-colors" :class="locale === 'en' ? 'text-white font-bold bg-white/10' : 'text-white/50'">Eng</button>
                <button @click="locale = 'ru'" class="px-3 py-1 rounded transition-colors" :class="locale === 'ru' ? 'text-white font-bold bg-white/10' : 'text-white/50'">Rus</button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { navLinks } from '../data/navigation.js'

const route = useRoute()

const socials = [
  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
]

const locale = ref('ka')
const desktopNavRef = ref(null)
const scrolled = ref(false)
const menuOpen = ref(false)
const openDropdown = ref(null)
const mobileExpanded = ref(null)

const sectionPrefixes = {
  about: '/about',
  products: '/products',
  news: '/news',
  careers: '/careers',
}

function isActiveSection(link) {
  if (link.to === '/' && route.path === '/') return true
  if (link.to && link.to !== '/' && route.path === link.to) return true
  const prefix = sectionPrefixes[link.id]
  if (prefix && route.path.startsWith(prefix)) return true
  return false
}

function toggleDropdown(id) {
  openDropdown.value = openDropdown.value === id ? null : id
}

function closeDropdowns(e) {
  if (desktopNavRef.value && !desktopNavRef.value.contains(e.target)) {
    openDropdown.value = null
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  document.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', closeDropdowns)
})
</script>
