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
          <p class="mt-2 text-blue-200/80">{{ content.intro }}</p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <article v-for="item in content.eventTypes" :key="item.title" class="rounded-2xl border border-blue-500/15 bg-white/5 p-5">
            <h4 class="text-lg font-semibold text-white">{{ item.title }}</h4>
            <p class="mt-2 text-sm leading-relaxed text-blue-200/80">{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-dashed border-blue-500/30 shadow-2xl shadow-black/30 p-8 text-center">
        <h3 class="text-2xl font-bold text-white">{{ content.scheduleTitle }}</h3>
        <p class="mx-auto mt-3 max-w-2xl text-blue-200/80">
          {{ content.scheduleDesc }}
        </p>
      </section>
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
      heroTitle: 'Events',
      heroSubtitle: 'Planned official activities and visits',
      title: 'Planned Events',
      intro: 'This page will host scheduled events, exhibitions, visits and official meetings.',
      scheduleTitle: 'Upcoming Schedule',
      scheduleDesc: 'Specific dates have not yet been published. The page is ready for future event cards, locations and descriptions.',
      eventTypes: [
        { title: 'Exhibitions and Airshows', description: 'Public exhibitions, air shows and international participation.' },
        { title: 'Partner Meetings', description: 'Delegation visits, business meetings and cooperation activities.' },
        { title: 'Factory Visits', description: 'Controlled tours, student visits and technical inspections.' },
        { title: 'Training Sessions', description: 'Trainings, practical seminars and professional courses.' },
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'События',
      heroSubtitle: 'Запланированные официальные мероприятия и визиты',
      title: 'Запланированные события',
      intro: 'На этой странице будут размещаться запланированные мероприятия, выставки, визиты и официальные встречи.',
      scheduleTitle: 'Ближайшее расписание',
      scheduleDesc: 'Конкретные даты пока не опубликованы. Страница готова для будущих карточек мероприятий, локаций и описаний.',
      eventTypes: [
        { title: 'Выставки и авиашоу', description: 'Публичные выставки, авиашоу и международное участие.' },
        { title: 'Партнёрские встречи', description: 'Визиты делегаций, деловые встречи и мероприятия по сотрудничеству.' },
        { title: 'Посещения завода', description: 'Контролируемые туры, студенческие визиты и технические осмотры.' },
        { title: 'Учебные сессии', description: 'Тренинги, практические семинары и профессиональные курсы.' },
      ],
    }
  }

  return {
    heroTitle: 'ივენთები',
    heroSubtitle: 'დაგეგმილი ოფიციალური აქტივობები და ვიზიტები',
    title: 'დაგეგმილი ივენთები',
    intro: 'აქ დაიდება დაგეგმილი ივენთები, გამოფენები, ვიზიტები და შეხვედრები.',
    scheduleTitle: 'მომავალი განრიგი',
    scheduleDesc: 'მიმდინარე ეტაპზე კონკრეტული თარიღები ჯერ არ არის გამოქვეყნებული. გვერდი მზად არის სამომავლო ღონისძიებების ბარათების, ადგილმდებარეობისა და აღწერების განსათავსებლად.',
    eventTypes: [
      { title: 'გამოფენები და ავიაშოუები', description: 'საჯარო გამოფენები, საჰაერო შოუები და საერთაშორისო მონაწილეობები.' },
      { title: 'პარტნიორული შეხვედრები', description: 'დელეგაციების ვიზიტები, საქმიანი შეხვედრები და თანამშრომლობის ღონისძიებები.' },
      { title: 'ქარხნის ვიზიტები', description: 'კონტროლირებადი ტურები, სტუდენტური ვიზიტები და ტექნიკური დათვალიერებები.' },
      { title: 'სასწავლო სესიები', description: 'ტრენინგები, პრაქტიკული სემინარები და პროფესიული სასწავლო კურსები.' },
    ],
  }
})
</script>
