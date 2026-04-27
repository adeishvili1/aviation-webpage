<template>
  <div class="bg-brand-950 min-h-screen">
    <PageHero :title="resolvedHeroTitle" :subtitle="resolvedHeroSubtitle" />

    <div class="max-w-7xl mx-auto px-6 pb-20 -mt-10 relative z-10">
      <div class="flex flex-col lg:flex-row gap-8">
        <main class="lg:w-2/3 space-y-8">
          <slot />
        </main>
        <PageSidebar :title="resolvedSidebarTitle" :links="sidebarLinks" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHero from '../components/PageHero.vue'
import PageSidebar from '../components/PageSidebar.vue'

const props = defineProps({
  heroTitle: String,
  heroSubtitle: String,
  sidebarTitle: String,
  sidebarLinks: Array,
})

const { locale } = useI18n()

function localizeStaticText(text) {
  if (!text) return text

  const map = {
    home: ['მთავარი', 'Home', 'Главная'],
    about: ['ჩვენს შესახებ', 'About Us', 'О нас'],
    history: ['ისტორია', 'History', 'История'],
    factory: ['ქარხანა', 'Factory', 'Завод'],
    management: ['ხელმძღვანელობა', 'Management', 'Руководство'],
    licenses: ['ლიცენზიები', 'Licenses', 'Лицензии'],
    international: ['საერთაშორისო სერტიფიკატები', 'International Certificates', 'Международные сертификаты'],
    products: ['პროდუქცია', 'Products', 'Продукция'],
    rubber: ['რეზინის პროდუქციის წარმოება', 'Rubber-Technical Manufacturing', 'Резинотехническое производство'],
    helicopters: ['ვერტმფრენები და თვითმფრინავები', 'Helicopters and Aircraft', 'Вертолёты и самолёты'],
    missiles: ['რაკეტები', 'Missiles', 'Ракеты'],
    services: ['ექსპერტიზა', 'Expertise', 'Экспертиза'],
    trainings: ['ტრენინგები', 'Trainings', 'Обучение'],
    technical: ['ტექნიკური შესაძლებლობები', 'Technical Capabilities', 'Технические возможности'],
    capacity: ['საწარმოო სიმძლავრე', 'Production Capacity', 'Производственные мощности'],
    news: ['ახალი ამბები და მედია', 'News & Media', 'Новости и медиа'],
    blog: ['ბლოგი', 'Blog', 'Блог'],
    events: ['ივენთები', 'Events', 'События'],
    gallery: ['გალერეა', 'Gallery', 'Галерея'],
    video: ['ვიდეო', 'Video', 'Видео'],
    careers: ['კარიერა', 'Careers', 'Карьера'],
    jobs: ['ვაკანსიები', 'Job Offers', 'Вакансии'],
    join: ['შემოგვიერთდი', 'Join Us', 'Присоединяйтесь'],
    contact: ['კონტაქტი', 'Contact Us', 'Контакты'],
    innovation: ['ინოვაცია', 'Innovation', 'Инновации'],
    partners: ['პარტნიორები', 'Partners', 'Партнёры'],
  }

  const key = Object.keys(map).find((item) => map[item].includes(text))
  if (!key) return text

  const translations = {
    ka: {
      home: 'მთავარი',
      about: 'ჩვენს შესახებ',
      history: 'ისტორია',
      factory: 'ქარხანა',
      management: 'ხელმძღვანელობა',
      licenses: 'ლიცენზიები',
      international: 'საერთაშორისო სერტიფიკატები',
      products: 'პროდუქცია',
      rubber: 'რეზინის პროდუქციის წარმოება',
      helicopters: 'ვერტმფრენები და თვითმფრინავები',
      missiles: 'რაკეტები',
      services: 'ექსპერტიზა',
      trainings: 'ტრენინგები',
      technical: 'ტექნიკური შესაძლებლობები',
      capacity: 'საწარმოო სიმძლავრე',
      news: 'ახალი ამბები და მედია',
      blog: 'ბლოგი',
      events: 'ივენთები',
      gallery: 'გალერეა',
      video: 'ვიდეო',
      careers: 'კარიერა',
      jobs: 'ვაკანსიები',
      join: 'შემოგვიერთდი',
      contact: 'კონტაქტი',
      innovation: 'ინოვაცია',
      partners: 'პარტნიორები',
    },
    en: {
      home: 'Home',
      about: 'About Us',
      history: 'History',
      factory: 'Factory',
      management: 'Management',
      licenses: 'Licenses',
      international: 'International Certificates',
      products: 'Products',
      rubber: 'Rubber-Technical Manufacturing',
      helicopters: 'Helicopters and Aircraft',
      missiles: 'Missiles',
      services: 'Expertise',
      trainings: 'Trainings',
      technical: 'Technical Capabilities',
      capacity: 'Production Capacity',
      news: 'News & Media',
      blog: 'Blog',
      events: 'Events',
      gallery: 'Gallery',
      video: 'Video',
      careers: 'Careers',
      jobs: 'Job Offers',
      join: 'Join Us',
      contact: 'Contact Us',
      innovation: 'Innovation',
      partners: 'Partners',
    },
    ru: {
      home: 'Главная',
      about: 'О нас',
      history: 'История',
      factory: 'Завод',
      management: 'Руководство',
      licenses: 'Лицензии',
      international: 'Международные сертификаты',
      products: 'Продукция',
      rubber: 'Резинотехническое производство',
      helicopters: 'Вертолёты и самолёты',
      missiles: 'Ракеты',
      services: 'Экспертиза',
      trainings: 'Обучение',
      technical: 'Технические возможности',
      capacity: 'Производственные мощности',
      news: 'Новости и медиа',
      blog: 'Блог',
      events: 'События',
      gallery: 'Галерея',
      video: 'Видео',
      careers: 'Карьера',
      jobs: 'Вакансии',
      join: 'Присоединяйтесь',
      contact: 'Контакты',
      innovation: 'Инновации',
      partners: 'Партнёры',
    },
  }

  return translations[locale.value]?.[key] ?? text
}

const resolvedHeroTitle = computed(() => localizeStaticText(props.heroTitle))
const resolvedHeroSubtitle = computed(() => localizeStaticText(props.heroSubtitle))
const resolvedSidebarTitle = computed(() => localizeStaticText(props.sidebarTitle))
</script>
