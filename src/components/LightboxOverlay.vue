<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-blue-950/70 backdrop-blur-md"
        @click.self="close"
      >
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          @click="close"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Prev arrow -->
        <button
          v-if="hasMultiple"
          class="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          @click.stop="prev"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <!-- Image -->
        <img
          :src="currentSrc"
          :alt="currentAlt"
          class="max-w-[80vw] max-h-[90vh] object-contain rounded-xl shadow-2xl transition-all duration-300"
          @click.stop
        />

        <!-- Next arrow -->
        <button
          v-if="hasMultiple"
          class="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          @click.stop="next"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Counter -->
        <div v-if="hasMultiple" class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useLightbox } from '../composables/useLightbox'

const { isOpen, currentSrc, currentAlt, hasMultiple, currentIndex, images, close, prev, next } = useLightbox()
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
