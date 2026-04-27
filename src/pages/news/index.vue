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
          <h3 class="text-2xl font-bold text-white">{{ content.sectionTitle }}</h3>
          <p class="text-blue-200/80 mt-2">{{ content.sectionDesc }}</p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="item in content.newsItems"
            :key="item.title"
            class="rounded-2xl border border-blue-500/15 bg-white/5 p-6"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60">{{ item.date }}</p>
            <h4 class="mt-3 text-xl font-bold text-white">{{ item.title }}</h4>
            <p class="mt-3 text-sm leading-relaxed text-blue-200/80">{{ item.summary }}</p>
          </article>
        </div>
      </section>

      <section class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <router-link
          v-for="item in content.mediaSections"
          :key="item.to"
          :to="item.to"
          class="group rounded-2xl border border-blue-500/15 bg-brand-900/40 p-6 transition-all hover:border-blue-400/40 hover:bg-white/10"
        >
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60">{{ item.kicker }}</p>
          <h4 class="mt-3 text-xl font-bold text-white">{{ item.title }}</h4>
          <p class="mt-3 text-sm leading-relaxed text-blue-200/80">{{ item.description }}</p>
        </router-link>
      </section>
    </div>
  </SectionLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('news')
const { locale } = useI18n()

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'News & Media',
      heroSubtitle: 'Official updates, media, and editorial content',
      sidebarTitle: 'News & Media',
      sectionTitle: 'News',
      sectionDesc: 'This area is reserved for company news, official announcements, and important updates.',
      newsItems: [
        { date: 'News', title: 'Company Updates', summary: 'A dedicated area for company news, official statements, visits, agreements, and important developments.' },
        { date: 'Media', title: 'Information Flow', summary: 'Photos, videos, and text updates about ongoing activity and public-facing developments will appear here.' },
        { date: 'Archive', title: 'Media Archive', summary: 'Prepared as a chronological archive for future news publications and easier browsing.' },
      ],
      mediaSections: [
        { kicker: 'Events', title: 'Events', to: '/news/events', description: 'Planned events and official activities.' },
        { kicker: 'Gallery', title: 'Gallery', to: '/news/gallery', description: 'Photo and visual materials.' },
        { kicker: 'Video', title: 'Video', to: '/news/video', description: 'Official videos and presentations.' },
        { kicker: 'Blog', title: 'Blog', to: '/news/blog', description: 'Articles on legacy aircraft, employee notes, and notable topics.' },
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Новости и медиа',
      heroSubtitle: 'Официальные обновления, медиа и редакционные материалы',
      sidebarTitle: 'Новости и медиа',
      sectionTitle: 'Новости',
      sectionDesc: 'Здесь будут размещаться новости компании, официальные заявления и важные обновления.',
      newsItems: [
        { date: 'Новости', title: 'Новости компании', summary: 'Раздел для новостей компании, официальных заявлений, визитов, соглашений и важных событий.' },
        { date: 'Медиа', title: 'Информационные обновления', summary: 'Здесь будут размещаться фото, видео и текстовые материалы о текущей деятельности компании.' },
        { date: 'Архив', title: 'Медиа-архив', summary: 'Подготовленный архив для хронологического размещения новостей и удобного поиска материалов.' },
      ],
      mediaSections: [
        { kicker: 'События', title: 'События', to: '/news/events', description: 'Запланированные мероприятия и официальные активности.' },
        { kicker: 'Галерея', title: 'Галерея', to: '/news/gallery', description: 'Фотографии и визуальные материалы.' },
        { kicker: 'Видео', title: 'Видео', to: '/news/video', description: 'Официальные видео и презентации.' },
        { kicker: 'Блог', title: 'Блог', to: '/news/blog', description: 'Статьи о старых самолётах, заметки сотрудников и важные темы.' },
      ],
    }
  }

  return {
    heroTitle: 'ახალი ამბები და მედია',
    heroSubtitle: 'კომპანიის ოფიციალური განახლებები და მედია მასალები',
    sidebarTitle: 'ახალი ამბები და მედია',
    sectionTitle: 'ახალი ამბები',
    sectionDesc: 'აქ დაიდება კომპანიის ახალი ამბები, ოფიციალური განცხადებები და მნიშვნელოვანი განახლებები.',
    newsItems: [
      { date: 'სიახლეები', title: 'კომპანიის სიახლეები', summary: 'ეს სივრცე განკუთვნილია ახალი ამბების, ოფიციალური განცხადებების, ვიზიტების, ხელშეკრულებებისა და მნიშვნელოვანი მოვლენების გამოსაქვეყნებლად.' },
      { date: 'მედია', title: 'საინფორმაციო განახლებები', summary: 'აქ ეტაპობრივად განთავსდება ფოტო, ვიდეო და ტექსტური მასალები კომპანიის მიმდინარე საქმიანობისა და განვითარებების შესახებ.' },
      { date: 'არქივი', title: 'მედია არქივი', summary: 'გვერდი მომზადებულია ახალი ამბების ქრონოლოგიური არქივისთვის, რათა ინფორმაციის მოძიება და განახლება მარტივი იყოს.' },
    ],
    mediaSections: [
      { kicker: 'ივენთები', title: 'ივენთები', to: '/news/events', description: 'აქ დაიდება დაგეგმილი ივენთები.' },
      { kicker: 'გალერეა', title: 'გალერეა', to: '/news/gallery', description: 'აქ განთავსდება ფოტოები და ვიზუალური მასალები.' },
      { kicker: 'ვიდეო', title: 'ვიდეო', to: '/news/video', description: 'ოფიციალური ვიდეო მასალები და პრეზენტაციები.' },
      { kicker: 'ბლოგი', title: 'ბლოგი', to: '/news/blog', description: 'სტატიები ძველ თვითმფრინავებზე, თანამშრომლების ჩანაწერები და მოკლე მნიშვნელოვანი თემები.' },
    ],
  }
})
</script>
