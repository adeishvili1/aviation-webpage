<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="content.sidebarTitle"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 overflow-hidden">
      <img src="../../assets/p4.png" alt="Elite Jet" class="w-full h-72 object-cover" />
      <div class="p-8">
        <h3 class="text-2xl font-bold text-white mb-3">{{ content.title }}</h3>
        <p class="text-blue-200/70 text-sm leading-relaxed">{{ content.intro }}</p>
      </div>
    </div>

    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">Performance Specifications</h3>
        <p class="text-blue-200/60 text-sm mt-1">Elite Jet and Elite Jet NG</p>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-blue-500/20 text-left">
              <th class="pb-3 pr-4 text-blue-200 font-semibold">Performance Specifications</th>
              <th class="pb-3 text-blue-200 font-semibold">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in specs" :key="row.label" class="border-b border-white/5 align-top">
              <td class="py-3 pr-4 text-blue-100/80">{{ row.label }}</td>
              <td class="py-3 text-white font-medium">{{ row.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">{{ content.systemsTitle }}</h3>
        <p class="text-blue-200/60 text-sm mt-1">{{ content.systemsSubtitle }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div v-for="item in content.interiorSystems" :key="item" class="flex items-start gap-3 p-4 rounded-lg border border-blue-500/15 bg-blue-500/10">
          <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0 mt-1.5"></span>
          <span class="text-blue-100/80 text-sm">{{ item }}</span>
        </div>
      </div>

      <div class="rounded-xl border border-blue-500/15 bg-blue-500/10 p-5">
        <h4 class="text-white font-semibold mb-2">{{ content.galleyTitle }}</h4>
        <p class="text-blue-100/75 text-sm leading-relaxed">
          {{ content.galleyDesc }}
        </p>
      </div>
    </div>

    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">{{ content.layoutTitle }}</h3>
        <p class="text-blue-200/60 text-sm mt-1">{{ content.layoutSubtitle }}</p>
      </div>

      <div class="grid gap-6">
        <div class="grid lg:grid-cols-2 gap-6">
          <div class="rounded-xl overflow-hidden border border-blue-500/15 bg-black/20">
            <img src="../../assets/p6.png" alt="Elite Jet dimensions" class="w-full h-72 object-contain bg-white" />
          </div>
          <div class="rounded-xl overflow-hidden border border-blue-500/15 bg-black/20">
            <img src="../../assets/p10.png" alt="Elite Jet control surfaces" class="w-full h-72 object-contain bg-white" />
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
          <div class="rounded-xl overflow-hidden border border-blue-500/15 bg-black/20">
            <img src="../../assets/p7.png" alt="Elite Jet 6-seat layout" class="w-full h-72 object-cover" />
            <div class="p-4">
              <h4 class="text-white font-semibold">{{ content.layout6 }}</h4>
            </div>
          </div>
          <div class="rounded-xl overflow-hidden border border-blue-500/15 bg-black/20">
            <img src="../../assets/p8.png" alt="Elite Jet 9-seat layout" class="w-full h-72 object-cover" />
            <div class="p-4">
              <h4 class="text-white font-semibold">{{ content.layout9 }}</h4>
            </div>
          </div>
        </div>

        <div class="rounded-xl overflow-hidden border border-blue-500/15 bg-black/20">
          <img src="../../assets/p9.png" alt="Elite Jet cockpit" class="w-full h-80 object-contain bg-white" />
          <div class="p-4">
            <h4 class="text-white font-semibold">{{ content.avionicsTitle }}</h4>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../layouts/SectionLayout.vue'

const { locale } = useI18n()

const sidebarLinks = computed(() => [
  { to: '/innovation/elite-jet', label: 'Elite Jet / Elite Jet NG', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { to: '/innovation/ge-31-bora', label: 'GE-31 Bora', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
])

const specs = [
  { label: 'Max operating Mach number (MMO)', value: '0.72' },
  { label: 'Stalling speed, MLW, forward CG, Landing configuration (VSO)', value: '140 km/h' },
  { label: 'Max Cruise', value: '740 km/h' },
  { label: 'Rate of climb, AEO, ISA, Sea Level, MTOW', value: '20 m/sec' },
  { label: 'Rate of climb, OEI, ISA, Sea Level, MTOW', value: '5.0 m/sec' },
  { label: 'Balanced Field Length', value: '1100 m' },
  { label: 'Landing distance from 15 m (ISA, SL, Flaps 40°, MLW)', value: '900 m' },
  { label: 'Maximum range, 2 pilot + 4 passengers', value: '2700 Km' },
  { label: 'Maximum Operating altitude', value: '12500 m' },
]

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Elite Jet / Elite Jet NG',
      heroSubtitle: 'Civilian aircraft, 6-seater and 9-seater concept',
      sidebarTitle: 'Innovation',
      title: 'ELITE-Jet and ELITE-Jet NG',
      intro: 'The 6-seat and 9-seat ELITE-Jet is a civilian jet aircraft built with composite materials and equipped with modern technologies.',
      systemsTitle: 'Interior Systems',
      systemsSubtitle: 'Interior and onboard equipment described in the concept',
      interiorSystems: [
        'Satellite communication system, SatCom.',
        'Audio system with CD player and individual headsets.',
        'Video system with DVD player and individual 8-inch embedded monitors.',
        'Air Show system with world and regional maps and in-flight information display.',
      ],
      galleyTitle: 'Fully Equipped Galley Zone',
      galleyDesc: 'High-temperature oven, microwave oven and coffee machine.',
      layoutTitle: 'Layout',
      layoutSubtitle: 'External views, cabin layouts and avionics',
      layout6: '6-seat cabin layout',
      layout9: '9-seat cabin layout',
      avionicsTitle: 'Avionics and cabin control system',
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Elite Jet / Elite Jet NG',
      heroSubtitle: 'Гражданский самолёт, концепция на 6 и 9 мест',
      sidebarTitle: 'Инновации',
      title: 'ELITE-Jet и ELITE-Jet NG',
      intro: '6-местный и 9-местный ELITE-Jet — это гражданский реактивный самолёт, созданный из композитных материалов и оснащённый современными технологиями.',
      systemsTitle: 'Внутренние системы',
      systemsSubtitle: 'Интерьер и бортовое оснащение, описанные в концепции',
      interiorSystems: [
        'Система спутниковой связи, SatCom.',
        'Аудиосистема с CD-плеером и индивидуальными наушниками.',
        'Видеосистема с DVD-плеером и индивидуальными встроенными 8-дюймовыми мониторами.',
        'Система Air Show с мировыми и региональными картами и отображением информации о полёте.',
      ],
      galleyTitle: 'Полностью оборудованная кухонная зона',
      galleyDesc: 'Высокотемпературная печь, микроволновая печь и кофемашина.',
      layoutTitle: 'Компоновка',
      layoutSubtitle: 'Внешние виды, компоновка салона и авионика',
      layout6: 'Компоновка 6-местного салона',
      layout9: 'Компоновка 9-местного салона',
      avionicsTitle: 'Авионика и система управления салоном',
    }
  }
  return {
    heroTitle: 'Elite Jet / Elite Jet NG',
    heroSubtitle: 'სამოქალაქო საფრენი აპარატი, 6 და 9 ადგილიანი კონცეფცია',
    sidebarTitle: 'ინოვაცია',
    title: 'ELITE-Jet და ELITE-Jet NG',
    intro: '6-ადგილიანი და 9-ადგილიანი ELITE-Jet წარმოადგენს კომპოზიტური მასალებით შექმნილ, თანამედროვე ტექნოლოგიებით აღჭურვილ სამოქალაქო JET ტიპის საფრენ აპარატს.',
    systemsTitle: 'შიდა სისტემები',
    systemsSubtitle: 'დოკუმენტში აღწერილი შიდა ინტერიერი და აღჭურვილობა',
    interiorSystems: [
      'სატელიტური კომუნიკაციის სისტემა, SatCom.',
      'აუდიო სისტემა CD-პლეერით და ინდივიდუალური ყურსასმენებით.',
      'ვიდეო სისტემა DVD-პლეერით და ინდივიდუალური 8-დუიმიანი ჩასაერთებელი მონიტორებით.',
      'Air Show სისტემა მსოფლიო და რეგიონული რუკებით და ფრენის შესახებ ინფორმაციის ჩვენებით.',
    ],
    galleyTitle: 'სრულად აღჭურვილი სამზარეულო ზონა',
    galleyDesc: 'მაღალი ტემპერატურის ღუმელი, მიკროტალღური ღუმელი და ყავის აპარატი.',
    layoutTitle: 'განლაგება',
    layoutSubtitle: 'გარეგნული ხედები, სალონის განლაგება და ავიონიკა',
    layout6: '6-ადგილიანი სალონის განლაგება',
    layout9: '9-ადგილიანი სალონის განლაგება',
    avionicsTitle: 'ავიონიკა და სალონის მართვის სისტემა',
  }
})
</script>
