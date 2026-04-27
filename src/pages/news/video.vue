<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.news')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">{{ content.title }}</h3>
      </div>

      <div class="space-y-6">
        <div class="rounded-xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.youtube.com/embed/B3SClf2IAZg"
            class="w-full aspect-video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <p class="text-center text-blue-200/80">
          {{ content.caption }}
        </p>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const { locale, t: $t } = useI18n()
const sidebarLinks = getSidebarLinks('news')

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Video',
      heroSubtitle: 'Official video materials',
      title: 'Video Materials',
      caption: 'Official video material: JSC TAM Tbilisi Aircraft Manufacturing',
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Видео',
      heroSubtitle: 'Официальные видеоматериалы',
      title: 'Видеоматериалы',
      caption: 'Официальный видеоматериал: JSC TAM Tbilisi Aircraft Manufacturing',
    }
  }
  return {
    heroTitle: 'ვიდეო',
    heroSubtitle: 'ოფიციალური ვიდეო მასალები',
    title: 'ვიდეო მასალები',
    caption: 'ოფიციალური ვიდეო მასალა: JSC TAM Tbilisi Aircraft Manufacturing',
  }
})
</script>
