<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.news')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="grid gap-5 md:grid-cols-3">
      <article
        v-for="post in content.posts"
        :key="post.title"
        class="rounded-2xl border border-blue-500/15 bg-brand-900/40 p-6 shadow-2xl shadow-black/30"
      >
        <div class="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">{{ post.category }}</div>
        <h3 class="mt-4 text-xl font-bold text-white">{{ post.title }}</h3>
        <p class="mt-3 text-sm leading-relaxed text-blue-200/80">{{ post.summary }}</p>
      </article>
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
      heroTitle: 'Blog',
      heroSubtitle: 'Articles, notes and short aviation topics',
      posts: [
        { category: 'History', title: 'Legacy Aircraft Stories', summary: 'Articles about historic aircraft connected to the enterprise, their role and development.' },
        { category: 'People', title: 'Employee Notes', summary: 'Short notes from engineers, technicians and employees about daily experience and professional stories.' },
        { category: 'Topics', title: 'Important Issues in Brief', summary: 'Short explainers and observations on topics important for the company and the aviation sector.' },
      ],
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Блог',
      heroSubtitle: 'Статьи, заметки и короткие авиационные темы',
      posts: [
        { category: 'История', title: 'Истории старых самолётов', summary: 'Статьи об исторических самолётах, связанных с предприятием, их роли и развитии.' },
        { category: 'Люди', title: 'Заметки сотрудников', summary: 'Короткие заметки инженеров, техников и сотрудников о ежедневной работе и профессиональном опыте.' },
        { category: 'Темы', title: 'Важные вопросы кратко', summary: 'Короткие материалы и наблюдения по темам, важным для компании и авиационной отрасли.' },
      ],
    }
  }
  return {
    heroTitle: 'ბლოგი',
    heroSubtitle: 'სტატიები, ჩანაწერები და მოკლე საავიაციო თემები',
    posts: [
      { category: 'History', title: 'ძველი თვითმფრინავების ისტორია', summary: 'სტატიები საწარმოსთან დაკავშირებულ ისტორიულ საფრენ აპარატებზე, მათ როლსა და განვითარებაზე.' },
      { category: 'People', title: 'თანამშრომლების ჩანაწერები', summary: 'ინჟინრების, ტექნიკოსებისა და თანამშრომლების მცირე ჩანაწერები ყოველდღიურ გამოცდილებაზე და პროფესიულ ისტორიებზე.' },
      { category: 'Topics', title: 'მნიშვნელოვანი საკითხები მოკლედ', summary: 'კომპანიისთვის ან ავიაციის სფეროსთვის მნიშვნელოვანი მოკლე თემები, განმარტებები და დაკვირვებები.' },
    ],
  }
})
</script>
