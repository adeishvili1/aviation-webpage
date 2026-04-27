<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.products')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="space-y-8">
      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-6">
          <h3 class="text-2xl font-bold text-white">{{ content.mainTitle }}</h3>
          <p class="text-blue-200/70 mt-2 leading-relaxed">
            {{ content.mainDesc }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/a.jpg" :alt="content.mainTitle" class="w-full h-56 object-cover" />
          </div>
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/a2.jpg" :alt="content.galleryAlt1" class="w-full h-56 object-cover" />
          </div>
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/a3.jpg" :alt="content.galleryAlt2" class="w-full h-56 object-cover" />
          </div>
        </div>
      </section>

      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-6">
          <h3 class="text-2xl font-bold text-white">{{ content.fuelTitle }}</h3>
          <p class="text-blue-200/80 mt-2 leading-relaxed">
            {{ content.fuelDesc }}
          </p>
        </div>

        <div class="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 items-start">
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src="../../../assets/a4.png" :alt="content.fuelTitle" class="w-full h-56 object-contain bg-slate-50 p-3" />
            </div>
            <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src="../../../assets/a5.png" :alt="content.fuelAlt" class="w-full h-56 object-contain bg-slate-50 p-3" />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div
              v-for="aircraft in content.fuelTankAircraft"
              :key="aircraft"
              class="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/15"
            >
              <span class="w-2.5 h-2.5 bg-blue-400 rounded-full shrink-0"></span>
              <span class="text-white font-medium">{{ aircraft }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-6">
          <h3 class="text-2xl font-bold text-white">{{ content.productsTitle }}</h3>
          <p class="text-blue-200/80 mt-2 leading-relaxed">
            {{ content.productsDesc }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/a6.png" :alt="content.productsTitle" class="w-full h-64 object-cover" />
          </div>
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/a7.png" :alt="content.productsAlt" class="w-full h-64 object-cover" />
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="product in content.rubberProducts"
            :key="product"
            class="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/15"
          >
            <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0"></span>
            <span class="text-blue-100/90 text-sm">{{ product }}</span>
          </div>
        </div>

        <p class="text-blue-200/80 leading-relaxed mt-6">
          {{ content.tailoringText }}
        </p>
      </section>
    </div>
  </SectionLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../../data/navigation.js'

const { locale, t: $t } = useI18n()
const sidebarLinks = getSidebarLinks('products')

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Rubber-Technical Manufacturing',
      heroSubtitle: 'Rubber Technical Plant',
      mainTitle: 'Rubber Technical Plant',
      mainDesc: 'Tbilisi Aircraft Manufacturing produces soft fuel tanks and a wide range of aviation-oriented rubber products used in helicopters and aircraft.',
      galleryAlt1: 'Rubber workshop',
      galleryAlt2: 'Rubber production line',
      fuelTitle: 'Soft Fuel Tanks',
      fuelDesc: 'Tbilisi Aircraft Manufacturing produces soft fuel tanks for the following helicopter and aircraft types:',
      fuelAlt: 'Fuel tank component',
      fuelTankAircraft: ['MiG-21', 'SU-25', 'Mi-8, Mi-17, Mi-171', 'Mi-24 and Mi-35', 'SU-22'],
      productsTitle: 'Rubber Products',
      productsDesc: 'The plant manufactures the following aviation-purpose rubber products:',
      productsAlt: 'Aviation rubber products',
      rubberProducts: [
        'Diaphragms',
        'O-rings',
        'Insulation gaskets',
        'Cuffs and seals',
        'Compression seals',
        'Gaskets',
        'Cover hatches',
        'Hermetic sealing rubbers',
      ],
      tailoringText: 'In addition, the sewing workshop manufactures stitched pipe coverings, cabin and cockpit covers, decorative covers, seat covers and various textile products.',
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Резинотехническое производство',
      heroSubtitle: 'Резинотехнический завод',
      mainTitle: 'Резинотехнический завод',
      mainDesc: 'Тбилавиамшени производит мягкие топливные баки и различные виды резинотехнической продукции авиационного назначения для вертолётов и самолётов.',
      galleryAlt1: 'Резиновый цех',
      galleryAlt2: 'Производство резиновой продукции',
      fuelTitle: 'Мягкие топливные баки',
      fuelDesc: 'Тбилавиамшени производит мягкие топливные баки для следующих типов вертолётов и самолётов:',
      fuelAlt: 'Компонент топливного бака',
      fuelTankAircraft: ['MiG-21', 'SU-25', 'Mi-8, Mi-17, Mi-171', 'Mi-24 and Mi-35', 'SU-22'],
      productsTitle: 'Резиновые изделия',
      productsDesc: 'Предприятие производит следующие виды авиационной резиновой продукции:',
      productsAlt: 'Авиационная резиновая продукция',
      rubberProducts: [
        'Диафрагмы',
        'O-кольца',
        'Изоляционные прокладки',
        'Манжеты',
        'Уплотнители',
        'Прокладки',
        'Крышки люков',
        'Герметизирующие резины',
      ],
      tailoringText: 'Кроме того, в швейном цехе изготавливаются чехлы для труб, покрытия салона и кабины, декоративные покрытия, чехлы сидений, а также различные текстильные изделия.',
    }
  }

  return {
    heroTitle: 'რეზინის პროდუქციის წარმოება',
    heroSubtitle: 'რეზინა ტექნიკური საწარმო',
    mainTitle: 'რეზინა ტექნიკური საწარმო',
    mainDesc: 'თბილავიამშენი აწარმოებს საავიაციო დანიშნულების რბილ საწვავის ავზებსა და სხვადასხვა ტიპის რეზინის ნაკეთობებს, რომლებიც გამოიყენება შვეულმფრენებსა და თვითმფრინავებში.',
    galleryAlt1: 'რეზინის საამქრო',
    galleryAlt2: 'რეზინის პროდუქციის წარმოება',
    fuelTitle: 'რბილი საწვავის ავზები',
    fuelDesc: 'თბილავიამშენი აწარმოებს რბილი საწვავის ავზებს შემდეგი ტიპის შვეულმფრენებისა და თვითმფრინავებისათვის:',
    fuelAlt: 'საწვავის ავზის კომპონენტი',
    fuelTankAircraft: ['MiG-21', 'SU-25', 'Mi-8, Mi-17, Mi-171', 'Mi-24 and Mi-35', 'SU-22'],
    productsTitle: 'რეზინა ნაკეთობები',
    productsDesc: 'თბილავიამშენი აწარმოებს შემდეგი სახეობის საავიაციო დანიშნულების რეზინის პროდუქციას:',
    productsAlt: 'საავიაციო რეზინის პროდუქცია',
    rubberProducts: [
      'დიაფრაგმები',
      'O-რგოლები',
      'საიზოლაციო შუასადებები',
      'მანჟეტები',
      'შემამჭიდროვებელი',
      'შუასადებები',
      'საფარი ლუქები',
      'ჰერმეტიზაციის რეზინები',
    ],
    tailoringText: 'გარდა ამისა, თბილავიამშენის სამკერვალო საამქროში ხორციელდება მილების შემონაკერების, სალონისა და კაბინის საფარების, დეკორატიული საფარების, სავარძლების შემონაკერების, ასევე სხვადასხვა სახის ტექსტილის ნაკეთობების შეკერვა.',
  }
})
</script>
