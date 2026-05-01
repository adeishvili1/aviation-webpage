<template>
  <AppLoader :visible="showLoader" />
  <NavBar />
  <router-view />
  <FooterSection />
  <LightboxOverlay />
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppLoader from './components/AppLoader.vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import LightboxOverlay from './components/LightboxOverlay.vue'
import { useParallax } from './composables/useParallax'

useParallax()
const showLoader = ref(true)

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

onMounted(() => {
  const hideLoader = () => {
    window.setTimeout(() => {
      showLoader.value = false
    }, 1200)
  }

  if (document.readyState === 'complete') {
    hideLoader()
    return
  }

  window.addEventListener('load', hideLoader, { once: true })
})
</script>
