import { ref, computed } from 'vue'

const isOpen = ref(false)
const images = ref([])
const currentIndex = ref(0)

const currentSrc = computed(() => images.value[currentIndex.value]?.src || '')
const currentAlt = computed(() => images.value[currentIndex.value]?.alt || '')
const hasMultiple = computed(() => images.value.length > 1)

export function useLightbox() {
  function open(src, alt = '') {
    images.value = [{ src, alt }]
    currentIndex.value = 0
    isOpen.value = true
  }

  function openGallery(imgs, index = 0) {
    images.value = imgs
    currentIndex.value = index
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
    images.value = []
    currentIndex.value = 0
  }

  function prev() {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
  }

  function next() {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
  }

  return { isOpen, currentSrc, currentAlt, hasMultiple, currentIndex, images, open, openGallery, close, prev, next }
}
