<template>
  <div class="relative overflow-hidden pt-40 pb-20">
    <div class="absolute inset-0 bg-linear-to-b from-brand-900/50 to-brand-950"></div>
    <div class="absolute top-0 left-0 w-full h-full" data-parallax="0.25">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 text-center relative z-10" data-parallax="0.08">
      <h1 class="text-4xl font-bold text-white mb-4">{{ displayTitle }}</h1>
      <p v-if="displaySubtitle" class="text-xl text-blue-300/80">{{ displaySubtitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  title: String,
  subtitle: String,
})

const { locale } = useI18n()

const georgianPattern = /[\u10A0-\u10FF]/
const latinPattern = /^[A-Za-z0-9\s&\-/,().]+$/

function isBilingualLabel(primary, secondary) {
  if (!primary || !secondary) return false
  return georgianPattern.test(primary) && latinPattern.test(secondary) && secondary.length <= 40
}

const displayTitle = computed(() => {
  if (isBilingualLabel(props.title, props.subtitle)) {
    return locale.value === 'ka' ? props.title : props.subtitle
  }

  return props.title
})

const displaySubtitle = computed(() => {
  if (isBilingualLabel(props.title, props.subtitle)) {
    return ''
  }

  return props.subtitle
})
</script>
