<template>
  <NavBar />
  <router-view />
  <FooterSection />
  <LightboxOverlay />
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import LightboxOverlay from './components/LightboxOverlay.vue'
import { useLightbox } from './composables/useLightbox'

const { open } = useLightbox()

function handleImageClick(e) {
  const img = e.target.closest('img')
  if (!img) return
  if (img.closest('nav') || img.closest('footer')) return
  if (img.naturalWidth < 100 || img.naturalHeight < 100) return
  open(img.src, img.alt)
}

onMounted(() => document.addEventListener('click', handleImageClick))
onUnmounted(() => document.removeEventListener('click', handleImageClick))
</script>
