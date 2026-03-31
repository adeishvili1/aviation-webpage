<template>
  <NavBar />
  <router-view />
  <FooterSection />
  <LightboxOverlay />
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import LightboxOverlay from './components/LightboxOverlay.vue'
import { useParallax } from './composables/useParallax'

useParallax()

// Re-trigger parallax on route change so new page elements initialize correctly
const route = useRoute()
watch(route, () => {
  requestAnimationFrame(() => {
    const scrollY = window.scrollY
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.3
      el.style.transform = `translateY(${scrollY * speed}px)`
    })
  })
})
</script>
