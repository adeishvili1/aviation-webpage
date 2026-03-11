import { ref } from 'vue'

const isOpen = ref(false)
const currentSrc = ref('')
const currentAlt = ref('')

export function useLightbox() {
  function open(src, alt = '') {
    currentSrc.value = src
    currentAlt.value = alt
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
    currentSrc.value = ''
    currentAlt.value = ''
  }

  return { isOpen, currentSrc, currentAlt, open, close }
}
