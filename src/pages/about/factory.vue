<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.about')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="grid gap-6 mb-6">
      <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 overflow-hidden">
        <img src="../../assets/docx-images/image23.jpeg" alt="TAM facility" class="w-full max-h-[34rem] object-contain bg-brand-950/40" />
      </div>
      <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 overflow-hidden">
        <img src="../../assets/qaRXANA.jpg" alt="TAM factory exterior" class="w-full max-h-[34rem] object-cover" />
      </div>
    </div>

    <div class="grid gap-4 mb-6 sm:grid-cols-2 xl:grid-cols-4">
      <div v-for="image in galleryImages" :key="image" class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 overflow-hidden">
        <img :src="image" alt="Factory gallery" class="h-44 w-full object-cover" />
      </div>
    </div>

    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">{{ content.title }}</h3>
      </div>
      <div class="text-blue-200/80 leading-relaxed space-y-4">
        <p v-for="paragraph in content.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-6">
      <div v-for="fact in content.facts" :key="fact.label" class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-6 text-center">
        <div class="text-4xl font-black text-blue-400 mb-2">{{ fact.value }}</div>
        <div class="text-white font-semibold mb-1">{{ fact.label }}</div>
        <div class="text-blue-200/60 text-sm">{{ fact.desc }}</div>
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
const sidebarLinks = getSidebarLinks('about')

const galleryImages = [
  new URL('../../assets/P.jpg', import.meta.url).href,
  new URL('../../assets/P2.png', import.meta.url).href,
  new URL('../../assets/P3.png', import.meta.url).href,
  new URL('../../assets/P4.png', import.meta.url).href,
]

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Factory',
      heroSubtitle: 'JSC Tbilisi Aircraft Manufacturing Facility',
      title: 'Tbilaviamsheni, the first Georgian aviation enterprise',
      paragraphs: [
        'The company was founded in 1941 and within a few years became one of the leading aviation plants in the region.',
        'Throughout its history, Tbilaviamsheni has manufactured and repaired more than 8,500 aircraft of different types.',
        'The factory built a strong reputation over the decades and its aircraft and repaired platforms continue to operate in various countries.',
        'Today the enterprise performs full repair and modernization of different types of aircraft and helicopters for both local and international customers.',
      ],
      facts: [
        { value: '1941', label: 'Year Founded', desc: 'December 15, 1941' },
        { value: '85+', label: 'Years of Experience', desc: 'In aviation' },
        { value: '8 500+', label: 'Aircraft Produced', desc: 'Different types' },
        { value: '300+', label: 'Aircraft Services', desc: 'Local and international' },
      ],
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Завод',
      heroSubtitle: 'Производственная площадка JSC Tbilisi Aircraft Manufacturing',
      title: 'Тбилавиамшени, первое грузинское авиационное предприятие',
      paragraphs: [
        'Компания была основана в 1941 году и уже через несколько лет стала одним из ведущих авиационных заводов региона.',
        'За свою историю Тбилавиамшени произвёл и отремонтировал более 8 500 летательных аппаратов различных типов.',
        'Завод приобрёл серьёзный авторитет, а произведённые и отремонтированные здесь самолёты продолжают эксплуатироваться в разных странах.',
        'Сегодня предприятие выполняет полный ремонт и модернизацию различных типов самолётов и вертолётов для местных и международных заказчиков.',
      ],
      facts: [
        { value: '1941', label: 'Год основания', desc: '15 декабря 1941 года' },
        { value: '85+', label: 'Лет опыта', desc: 'В авиации' },
        { value: '8 500+', label: 'Произведено аппаратов', desc: 'Разные типы' },
        { value: '300+', label: 'Услуг по техобслуживанию', desc: 'Местные и международные' },
      ],
    }
  }
  return {
    heroTitle: 'ქარხანა',
    heroSubtitle: 'სს თბილავიამშენის საწარმო',
    title: 'თბილავიამშენი, პირველი ქართული საავიაციო საწარმო',
    paragraphs: [
      'კომპანია 1941 წელს დაარსდა და რამდენიმე წელიწადში ერთ-ერთ წამყვან საავიაციო ქარხნად ჩამოყალიბდა.',
      'ისტორიის მანძილზე თბილავიამშენმა 8 500-ზე მეტი სხვადასხვა ტიპის საფრენი აპარატი აწარმოა და გაარემონტა.',
      'ქარხანამ წლების განმავლობაში ძლიერი რეპუტაცია მოიპოვა და აქ წარმოებული თუ გარემონტებული ტექნიკა დღესაც სხვადასხვა ქვეყანაში გამოიყენება.',
      'დღეს კომპანია სხვადასხვა ტიპის თვითმფრინავებისა და შვეულმფრენების სრულ რემონტსა და მოდერნიზებას ახორციელებს ადგილობრივი და საერთაშორისო დაკვეთებისთვის.',
    ],
    facts: [
      { value: '1941', label: 'დაარსების წელი', desc: '15 დეკემბერი, 1941 წელი' },
      { value: '85+', label: 'წლიანი გამოცდილება', desc: 'საავიაციო სექტორში' },
      { value: '8 500+', label: 'წარმოებული საფრენი აპარატი', desc: 'სხვადასხვა ტიპი' },
      { value: '300+', label: 'საფრენი აპარატის მომსახურება', desc: 'ადგილობრივი და საერთაშორისო' },
    ],
  }
})
</script>
