<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="content.sidebarTitle"
    :sidebarLinks="sidebarLinks"
  >
    <div class="space-y-6">
      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-8">
          <h3 class="text-2xl font-bold text-white">{{ content.title }}</h3>
          <p class="mt-2 text-blue-200/80">{{ content.desc }}</p>
        </div>

        <div class="rounded-2xl border border-dashed border-blue-500/30 bg-white/5 p-8 text-center">
          <h4 class="text-xl font-bold text-white">{{ content.emptyTitle }}</h4>
          <p class="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-blue-200/80">{{ content.emptyDesc }}</p>
          <router-link
            to="/careers/join"
            class="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            {{ content.cta }}
          </router-link>
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

const sidebarLinks = getSidebarLinks('careers')
const { locale } = useI18n()

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Job Offers',
      heroSubtitle: 'Current vacancies and hiring opportunities',
      sidebarTitle: 'Careers',
      title: 'Current Vacancies',
      desc: 'Open positions and future hiring opportunities will be published here.',
      emptyTitle: 'No vacancies are published at the moment',
      emptyDesc: 'This page is ready for vacancy cards. Until positions are published, candidates can leave a CV through the Join Us page.',
      cta: 'Go to Join Us',
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Вакансии',
      heroSubtitle: 'Текущие вакансии и возможности трудоустройства',
      sidebarTitle: 'Карьера',
      title: 'Текущие вакансии',
      desc: 'Здесь будут публиковаться актуальные вакансии и возможности трудоустройства.',
      emptyTitle: 'На данный момент вакансии не опубликованы',
      emptyDesc: 'Страница готова для размещения вакансий. До публикации позиций кандидат может оставить CV на странице Join Us.',
      cta: 'Перейти на Join Us',
    }
  }
  return {
    heroTitle: 'ვაკანსიები',
    heroSubtitle: 'არსებული ვაკანსიები და დასაქმების შესაძლებლობები',
    sidebarTitle: 'კარიერა',
    title: 'არსებული ვაკანსიები',
    desc: 'აქ განთავსდება არსებული ვაკანსიები და მიმდინარე დასაქმების შესაძლებლობები.',
    emptyTitle: 'ამ ეტაპზე ვაკანსიები არ არის გამოქვეყნებული',
    emptyDesc: 'გვერდი მზად არის აქტიური ვაკანსიების განსათავსებლად. სურვილის შემთხვევაში კანდიდატს შეუძლია გამოიყენოს Join Us გვერდი და დაგვიტოვოს CV.',
    cta: 'გადასვლა Join Us-ზე',
  }
})
</script>
