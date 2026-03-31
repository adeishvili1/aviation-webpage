import { onMounted, onUnmounted } from 'vue'

export function useParallax() {
  function onScroll() {
    const scrollY = window.scrollY
    document.querySelectorAll('[data-parallax]').forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.3
      el.style.transform = `translateY(${scrollY * speed}px)`
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
}
