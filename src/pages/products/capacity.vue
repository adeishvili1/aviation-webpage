<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.products')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">{{ content.title }}</h3>
        <p class="mt-2 text-blue-200/80">{{ content.intro }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <div
          v-for="item in content.items"
          :key="item"
          class="flex items-start gap-3 rounded-xl border border-blue-500/15 bg-white/5 p-4 text-blue-100/90"
        >
          <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400"></span>
          <span>{{ item }}</span>
        </div>
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
const sidebarLinks = getSidebarLinks('products')

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Production Capacity',
      heroSubtitle: 'Manufacturing and service capabilities',
      title: 'Production Capacity',
      intro: 'The company combines manufacturing, repair, modernization and laboratory capabilities within one aviation production base.',
      items: [
        'Manufacturing and overhaul of aircraft and helicopters.',
        'Missile repair and service-life extension.',
        'Rubber-technical production and soft fuel tank manufacturing.',
        'Laboratory testing, stands and technical diagnostics.',
        'Flight test infrastructure and hangar facilities.',
      ],
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Производственные мощности',
      heroSubtitle: 'Возможности производства и обслуживания',
      title: 'Производственные мощности',
      intro: 'Компания объединяет производство, ремонт, модернизацию и лабораторные возможности в одной авиационной производственной базе.',
      items: [
        'Производство и капитальный ремонт самолётов и вертолётов.',
        'Ремонт ракет и продление срока службы.',
        'Резинотехническое производство и изготовление мягких топливных баков.',
        'Лабораторные испытания, стенды и техническая диагностика.',
        'Инфраструктура лётных испытаний и ангарные мощности.',
      ],
    }
  }
  return {
    heroTitle: 'საწარმოო სიმძლავრე',
    heroSubtitle: 'წარმოების შესაძლებლობები',
    title: 'საწარმოო სიმძლავრე',
    intro: 'კომპანია ერთ საავიაციო საწარმოო ბაზაში აერთიანებს წარმოების, რემონტის, მოდერნიზებისა და ლაბორატორიულ შესაძლებლობებს.',
    items: [
      'თვითმფრინავებისა და შვეულმფრენების წარმოება და კაპიტალური რემონტი.',
      'რაკეტების რემონტი და საექსპლუატაციო რესურსის გახანგრძლივება.',
      'რეზინტექნიკური წარმოება და რბილი საწვავის ავზების დამზადება.',
      'ლაბორატორიული გამოცდები, სტენდები და ტექნიკური დიაგნოსტიკა.',
      'საფრენი გამოცდების ინფრასტრუქტურა და ანგარული მეურნეობა.',
    ],
  }
})
</script>
