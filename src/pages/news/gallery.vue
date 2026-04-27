<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.news')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="space-y-6">
      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-6">
          <h3 class="text-2xl font-bold text-white">{{ content.title }}</h3>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            v-for="(img, i) in content.galleryImages"
            :key="img.src"
            class="rounded-xl overflow-hidden group cursor-pointer border border-white/10"
            @click="openGallery(content.galleryImages, i)"
          >
            <img :src="img.src" :alt="img.alt" class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>
    </div>
  </SectionLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'
import { useLightbox } from '../../composables/useLightbox'

const { locale, t: $t } = useI18n()
const sidebarLinks = getSidebarLinks('news')
const { openGallery } = useLightbox()

const baseImages = [
  { src: new URL('../../assets/history.png', import.meta.url).href, ka: 'ისტორიული თვითმფრინავები', en: 'Historic aircraft', ru: 'Исторические самолёты' },
  { src: new URL('../../assets/p.png', import.meta.url).href, ka: 'საწარმოო საამქრო', en: 'Production workshop', ru: 'Производственный цех' },
  { src: new URL('../../assets/p2.jpg', import.meta.url).href, ka: 'შვეულმფრენების რემონტი', en: 'Helicopter repair', ru: 'Ремонт вертолётов' },
  { src: new URL('../../assets/p3.png', import.meta.url).href, ka: 'თვითმფრინავების რემონტი', en: 'Aircraft repair', ru: 'Ремонт самолётов' },
  { src: new URL('../../assets/qaRXANA.jpg', import.meta.url).href, ka: 'ქარხნის სივრცე', en: 'Factory interior', ru: 'Пространство завода' },
  { src: new URL('../../assets/m.png', import.meta.url).href, ka: 'საფრენი გამოცდების ინფრასტრუქტურა', en: 'Flight test infrastructure', ru: 'Инфраструктура лётных испытаний' },
]

const content = computed(() => {
  const lang = locale.value === 'ru' ? 'ru' : locale.value === 'en' ? 'en' : 'ka'
  return {
    heroTitle: lang === 'ka' ? 'გალერეა' : lang === 'en' ? 'Gallery' : 'Галерея',
    heroSubtitle: lang === 'ka' ? 'ფოტო და ვიზუალური არქივი' : lang === 'en' ? 'Photo and visual archive' : 'Фото и визуальный архив',
    title: lang === 'ka' ? 'ფოტო არქივი' : lang === 'en' ? 'Photo Archive' : 'Фотоархив',
    galleryImages: baseImages.map((item) => ({ src: item.src, alt: item[lang] })),
  }
})
</script>
