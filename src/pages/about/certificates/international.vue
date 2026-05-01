<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.about')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-8">
        <h3 class="text-2xl font-bold text-white">{{ content.title }}</h3>
        <p class="text-blue-200/60 text-sm mt-1">{{ content.subtitle }}</p>
      </div>

      <div class="grid gap-6 lg:grid-cols-2 mb-8">
        <div class="bg-white rounded-xl overflow-hidden border border-blue-500/20">
          <img
            src="../../../assets/docx-images/image15.png"
            alt="ISO 9001 certificate"
            class="w-full max-h-[42rem] object-contain p-2 md:p-4 cursor-pointer"
            @click="open(isoCertificateImage, 'ISO 9001 certificate')"
          />
        </div>
        <div class="bg-white rounded-xl overflow-hidden border border-blue-500/20">
          <img
            src="../../../assets/lic4.png"
            alt="International certificate"
            class="w-full max-h-[42rem] object-contain p-2 md:p-4 cursor-pointer"
            @click="open(internationalCertificateImage, 'International certificate')"
          />
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-6">
        <div v-for="cert in content.certs" :key="cert.name" class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center gap-4">
          <div class="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
            <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
            </svg>
          </div>
          <div>
            <div class="text-white font-bold text-lg">{{ cert.name }}</div>
            <div class="text-blue-200/70 text-sm">{{ cert.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../../data/navigation.js'
import { useLightbox } from '../../../composables/useLightbox'
import isoCertificateImage from '../../../assets/docx-images/image15.png'
import internationalCertificateImage from '../../../assets/lic4.png'

const { locale, t: $t } = useI18n()
const { open } = useLightbox()
const sidebarLinks = getSidebarLinks('about')

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'International Certificates',
      heroSubtitle: 'ISO and EN Certificates',
      title: 'International Certificates',
      subtitle: 'ISO and EN standards',
      certs: [
        { name: 'ISO 9001', desc: 'Quality management system' },
        { name: 'EN 9100', desc: 'Aviation quality standard' },
        { name: 'ISO 14001', desc: 'Environmental management system' },
        { name: 'ISO 45001', desc: 'Occupational safety system' },
      ],
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Международные сертификаты',
      heroSubtitle: 'Сертификаты ISO и EN',
      title: 'Международные сертификаты',
      subtitle: 'Стандарты ISO и EN',
      certs: [
        { name: 'ISO 9001', desc: 'Система управления качеством' },
        { name: 'EN 9100', desc: 'Авиационный стандарт качества' },
        { name: 'ISO 14001', desc: 'Система экологического менеджмента' },
        { name: 'ISO 45001', desc: 'Система охраны труда' },
      ],
    }
  }
  return {
    heroTitle: 'საერთაშორისო სერტიფიკატები',
    heroSubtitle: 'ISO და EN სერტიფიკატები',
    title: 'საერთაშორისო სერტიფიკატები',
    subtitle: 'ISO და EN სტანდარტები',
    certs: [
      { name: 'ISO 9001', desc: 'ხარისხის მართვის სისტემა' },
      { name: 'EN 9100', desc: 'საავიაციო ხარისხის სტანდარტი' },
      { name: 'ISO 14001', desc: 'გარემოს მართვის სისტემა' },
      { name: 'ISO 45001', desc: 'შრომის უსაფრთხოების სისტემა' },
    ],
  }
})
</script>
