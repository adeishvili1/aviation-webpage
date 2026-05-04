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
          <h3 class="text-2xl font-bold text-white">{{ content.recorderTitle }}</h3>
          <p class="text-blue-200/80 mt-2 leading-relaxed">
            {{ content.recorderIntro }}
          </p>
        </div>

        <div class="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/j4.png" alt="Flight recorder modernization" class="w-full h-[28rem] object-contain bg-slate-50 p-4" />
          </div>

          <div class="space-y-6">
            <article class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
              <h4 class="text-white font-bold text-lg mb-4">{{ content.specsTitle }}</h4>
              <ul class="space-y-3">
                <li
                  v-for="item in content.recorderSpecs"
                  :key="item"
                  class="flex items-start gap-3 text-blue-100/90"
                >
                  <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0 mt-2"></span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </article>

            <article class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
              <h4 class="text-white font-bold text-lg mb-4">{{ content.blocksTitle }}</h4>
              <ul class="space-y-3">
                <li
                  v-for="block in content.recorderBlocks"
                  :key="block"
                  class="flex items-start gap-3 text-blue-100/90"
                >
                  <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0 mt-2"></span>
                  <span>{{ block }}</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
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
      heroTitle: 'Flight Recorder Modernization',
      heroSubtitle: 'Recorder systems and certified technical data',
      recorderTitle: 'Flight Recorder Modernization',
      recorderIntro: 'Modernization is carried out according to the following technical data.',
      specsTitle: 'Technical Data',
      recorderSpecs: [
        'Product: Mi-24 / Mi-8 helicopters and their modifications.',
        'Total number of signals: 40.',
        'Country of manufacture: Georgia.',
        'Service life: 10 years.',
      ],
      blocksTitle: 'Main System Blocks',
      recorderBlocks: [
        'Crash-Survivable Data Recorder, main monitoring block, MMB-40.',
        'Concentrator, data collection block, DCB-40.',
        'G-force measurement unit, GMU-40.',
        'Couple connector module, TB-40.',
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Модернизация бортового регистратора полета',
      heroSubtitle: 'Системы регистратора и сертифицированные технические данные',
      recorderTitle: 'Модернизация бортового регистратора полета',
      recorderIntro: 'Модернизация выполняется на основе следующих технических данных.',
      specsTitle: 'Технические данные',
      recorderSpecs: [
        'Продукт: вертолеты Mi-24 / Mi-8 и их модификации.',
        'Общее количество сигналов: 40.',
        'Место производства: Грузия.',
        'Ресурс: 10 лет.',
      ],
      blocksTitle: 'Основные блоки системы',
      recorderBlocks: [
        'Crash-Survivable Data Recorder, основной блок мониторинга, MMB-40.',
        'Concentrator, блок сбора данных, DCB-40.',
        'Блок измерения перегрузки, GMU-40.',
        'Couple connector module, TB-40.',
      ],
    }
  }

  return {
    heroTitle: 'ფრენების ჩამწერი მოწყობილობის მოდერნიზება',
    heroSubtitle: 'ჩამწერი სისტემები და სერტიფიცირებული ტექნიკური მონაცემები',
    recorderTitle: 'ფრენების ჩამწერი მოწყობილობის მოდერნიზება',
    recorderIntro: 'მოდერნიზაცია ხორციელდება შემდეგ ტექნიკურ მონაცემებზე დაყრდნობით.',
    specsTitle: 'ტექნიკური მონაცემები',
    recorderSpecs: [
      'პროდუქტი: Mi-24 / Mi-8 ტიპის შვეულმფრენები და მათი მოდიფიკაციები.',
      'სიგნალების საერთო რაოდენობა: 40.',
      'წარმოების ადგილი: საქართველო.',
      'რესურსი: 10 წელი.',
    ],
    blocksTitle: 'სისტემის ძირითადი ბლოკები',
    recorderBlocks: [
      'Crash-Survivable Data Recorder — მთავარი მონიტორინგის ბლოკი, MMB-40.',
      'Concentrator — მონაცემთა შეგროვების ბლოკი, DCB-40.',
      'G-ძალის გაზომვის ერთეული, GMU-40.',
      'Couple connector module — TB-40.',
    ],
  }
})
</script>
