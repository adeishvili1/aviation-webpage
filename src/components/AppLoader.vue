<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-700 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="visible"
      class="fixed inset-0 z-[120] overflow-hidden bg-[#09162f]"
      aria-live="polite"
      aria-label="Loading"
    >
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.18),_transparent_38%)]"></div>
      <div class="absolute inset-0 opacity-30" style="background-image: linear-gradient(rgba(96,165,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.08) 1px, transparent 1px); background-size: 56px 56px;"></div>

      <div class="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div class="loader-orbit mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-blue-400/20 bg-white/5 shadow-[0_0_80px_rgba(37,99,235,0.2)] backdrop-blur-sm">
          <img
            src="../assets/tam-white-logo.png"
            alt="JSC TAM"
            class="w-20 object-contain drop-shadow-[0_0_18px_rgba(255,255,255,0.16)]"
          >
        </div>

        <p class="max-w-md text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
          JSC Tbilisi Aircraft Manufacturing
        </p>
        <div class="mt-10 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
          <div class="loader-progress h-full rounded-full bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.loader-orbit::before {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 9999px;
  border: 1px solid rgba(96, 165, 250, 0.22);
  animation: orbitPulse 2.4s ease-in-out infinite;
}

.loader-progress {
  width: 45%;
  animation: loaderSlide 1.6s ease-in-out infinite;
}

@keyframes orbitPulse {
  0%,
  100% {
    transform: scale(0.96);
    opacity: 0.45;
  }

  50% {
    transform: scale(1.06);
    opacity: 1;
  }
}

@keyframes loaderSlide {
  0% {
    transform: translateX(-120%);
  }

  55% {
    transform: translateX(110%);
  }

  100% {
    transform: translateX(220%);
  }
}
</style>
