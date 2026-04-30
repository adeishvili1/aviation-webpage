<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.about')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 overflow-hidden mb-6">
      <img src="../../assets/history.png" alt="History timeline" class="w-full object-contain" />
    </div>

    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8 mb-6">
      <div class="border-l-4 border-blue-400 pl-6 mb-4">
        <h3 class="text-2xl font-bold text-white">{{ content.title }}</h3>
      </div>
      <p class="text-blue-200/80 leading-relaxed">
        {{ content.intro }}
      </p>
    </div>

    <div class="space-y-6">
      <div v-for="entry in content.timeline" :key="entry.year + entry.title" class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-6 flex items-center gap-5 md:gap-6">
        <div class="shrink-0 w-24 md:w-28 min-h-[72px] flex items-center justify-center text-center">
          <span class="text-2xl md:text-3xl font-black text-blue-400 break-words leading-tight">{{ entry.year }}</span>
        </div>
        <div class="flex-1">
          <h4 class="text-lg font-bold text-white mb-2">{{ entry.title }}</h4>
          <p class="text-blue-200/70 text-sm leading-relaxed">{{ entry.text }}</p>
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
const sidebarLinks = getSidebarLinks('about')

const content = computed(() => {
  const baseTimeline = [
    ['1941', 'LaGG-3'],
    ['1942', 'La-5'],
    ['1944', 'Yak-3'],
    ['1946', 'Yak-15'],
    ['1948', 'Yak-17 / Yak-17 UTI'],
    ['1949', 'Yak-23'],
    ['1951', 'MiG-15bis'],
    ['1953', 'MiG-17'],
    ['1957', 'MiG-21'],
    ['1979', 'Su-25'],
    ['1990s', 'New Directions'],
  ]

  if (locale.value === 'en') {
    return {
      heroTitle: 'History',
      heroSubtitle: 'History of JSC Tbilisi Aircraft Manufacturing',
      title: 'Tbilaviamsheni, the first Georgian aviation enterprise',
      intro: 'December 15, 1941 is considered the founding date of Tbilaviamsheni. Over the decades the plant manufactured and repaired thousands of aircraft and became one of the key aviation centers in the region.',
      timeline: [
        { year: '1941', title: 'LaGG-3', text: 'The first aircraft serially assembled at the plant during the early war period.' },
        { year: '1942', title: 'La-5', text: 'A refined fighter derived from earlier wartime experience and improved technical solutions.' },
        { year: '1944', title: 'Yak-3', text: 'One of the most famous lightweight fighters of the Second World War.' },
        { year: '1946', title: 'Yak-15', text: 'The plant entered the jet era with one of the first Soviet jet fighters.' },
        { year: '1948', title: 'Yak-17 / Yak-17 UTI', text: 'Operational and trainer variants were produced and exported abroad.' },
        { year: '1949', title: 'Yak-23', text: 'A fast early jet fighter produced during the first post-war expansion period.' },
        { year: '1951', title: 'MiG-15bis', text: 'A major jet fighter type connected with the Korean War period.' },
        { year: '1953', title: 'MiG-17', text: 'A new generation fighter that also became widely known through later conflicts.' },
        { year: '1957', title: 'MiG-21', text: 'The world-famous supersonic fighter family had an important production chapter in Tbilisi.' },
        { year: '1979', title: 'Su-25', text: 'Serial production of the Su-25 became one of the most important chapters in the factory’s history.' },
        { year: '1990s', title: 'New Directions', text: 'The enterprise expanded into new technical areas, including advanced engineering and research projects.' },
      ],
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'История',
      heroSubtitle: 'История JSC Tbilisi Aircraft Manufacturing',
      title: 'Тбилавиамшени, первое грузинское авиационное предприятие',
      intro: '15 декабря 1941 года считается датой основания Тбилавиамшени. За десятилетия завод произвёл и отремонтировал тысячи летательных аппаратов и стал одним из ключевых авиационных центров региона.',
      timeline: [
        { year: '1941', title: 'LaGG-3', text: 'Первый самолёт, который серийно собирался на заводе в ранний военный период.' },
        { year: '1942', title: 'La-5', text: 'Усовершенствованный истребитель, созданный на базе боевого опыта и новых технических решений.' },
        { year: '1944', title: 'Yak-3', text: 'Один из самых известных лёгких истребителей Второй мировой войны.' },
        { year: '1946', title: 'Yak-15', text: 'С этим самолётом завод вошёл в реактивную эпоху.' },
        { year: '1948', title: 'Yak-17 / Yak-17 UTI', text: 'Производились боевые и учебные модификации, поставлявшиеся также на экспорт.' },
        { year: '1949', title: 'Yak-23', text: 'Быстрый ранний реактивный истребитель периода послевоенного роста.' },
        { year: '1951', title: 'MiG-15bis', text: 'Крупный реактивный истребитель, связанный с периодом Корейской войны.' },
        { year: '1953', title: 'MiG-17', text: 'Истребитель нового поколения, известный и по более поздним конфликтам.' },
        { year: '1957', title: 'MiG-21', text: 'У всемирно известного сверхзвукового истребителя была важная производственная глава в Тбилиси.' },
        { year: '1979', title: 'Su-25', text: 'Серийное производство Su-25 стало одной из важнейших страниц истории завода.' },
        { year: '1990-е', title: 'Новые направления', text: 'Предприятие расширило деятельность в новых технических и исследовательских направлениях.' },
      ],
    }
  }
  return {
    heroTitle: 'ისტორია',
    heroSubtitle: 'სს თბილავიამშენის ისტორია',
    title: 'თბილავიამშენი, პირველი ქართული საავიაციო საწარმო',
    intro: '1941 წლის 15 დეკემბერი თბილავიამშენის დაარსების თარიღად ითვლება. ათწლეულების განმავლობაში ქარხანამ ათასობით საფრენი აპარატი აწარმოა და გაარემონტა და რეგიონში ერთ-ერთ მთავარ საავიაციო ცენტრად ჩამოყალიბდა.',
    timeline: [
      { year: '1941', title: 'LaGG-3', text: 'ქარხნის პირველი სერიული სამხედრო თვითმფრინავი, რომელიც ომის ადრეულ პერიოდში იწარმოებოდა.' },
      { year: '1942', title: 'La-5', text: 'ომის გამოცდილებაზე დაფუძნებული დახვეწილი გამანადგურებელი.' },
      { year: '1944', title: 'Yak-3', text: 'მეორე მსოფლიო ომის ერთ-ერთი ყველაზე ცნობილი მსუბუქი გამანადგურებელი.' },
      { year: '1946', title: 'Yak-15', text: 'ამ მოდელით ქარხანა რეაქტიულ ეპოქაში შევიდა.' },
      { year: '1948', title: 'Yak-17 / Yak-17 UTI', text: 'საბრძოლო და სასწავლო მოდიფიკაციები, რომლებიც ექსპორტზეც გავიდა.' },
      { year: '1949', title: 'Yak-23', text: 'ომისშემდგომი ზრდის პერიოდის სწრაფი რეაქტიული გამანადგურებელი.' },
      { year: '1951', title: 'MiG-15bis', text: 'კორეის ომის ეპოქასთან დაკავშირებული მნიშვნელოვანი რეაქტიული გამანადგურებელი.' },
      { year: '1953', title: 'MiG-17', text: 'ახალი თაობის გამანადგურებელი, რომელიც მოგვიანო კონფლიქტებშიც გახდა ცნობილი.' },
      { year: '1957', title: 'MiG-21', text: 'მსოფლიოში ცნობილი ზებგერითი გამანადგურებლის წარმოების მნიშვნელოვანი ნაწილი თბილისს უკავშირდებოდა.' },
      { year: '1979', title: 'Su-25', text: 'Su-25-ის სერიული წარმოება ქარხნის ისტორიაში ერთ-ერთი ყველაზე მნიშვნელოვანი ეტაპი გახდა.' },
      { year: '1990', title: 'ახალი მიმართულებები', text: 'საწარმომ საქმიანობა გააფართოვა ახალ ტექნიკურ და საინჟინრო მიმართულებებში.' },
    ],
  }
})
</script>
