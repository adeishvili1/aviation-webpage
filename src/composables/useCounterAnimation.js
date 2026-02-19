import { onMounted, onUnmounted } from 'vue'

export function useCounterAnimation() {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.count)
            let current = 0
            const increment = target / 60
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                entry.target.textContent = target
                clearInterval(timer)
              } else {
                entry.target.textContent = Math.floor(current)
              }
            }, 25)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll('[data-count]').forEach((counter) => observer.observe(counter))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
