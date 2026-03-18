<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
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

        <!-- Image -->
        <img
          :src="currentSrc"
          :alt="currentAlt"
          class="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
          @click.stop
        />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { useLightbox } from '../composables/useLightbox'

const { isOpen, currentSrc, currentAlt, close } = useLightbox()
</script>
