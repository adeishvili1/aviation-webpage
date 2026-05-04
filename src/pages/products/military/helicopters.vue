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
          <h3 class="text-2xl font-bold text-white">{{ content.helicoptersTitle }}</h3>
          <p class="text-blue-200/80 mt-2 leading-relaxed">{{ content.helicoptersIntro }}</p>
        </div>

        <div class="grid md:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">
          <div v-for="(image, index) in helicopterImages" :key="image.src" class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img :src="image.src" :alt="image.alt" class="w-full h-44 object-cover cursor-pointer" @click="openGallery(helicopterImages, index)" />
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-6">
          <article class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
            <div class="flex items-center justify-between gap-4 mb-3">
              <h4 class="text-white font-bold text-lg">Mi-8; Mi-17; Mi-24; Mi-35</h4>
              <span class="px-3 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full">{{ content.overhaulBadge }}</span>
            </div>
            <p class="text-blue-100/90 leading-relaxed">{{ content.helicopterRepair }}</p>
          </article>

          <article class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
            <div class="flex items-center justify-between gap-4 mb-3">
              <h4 class="text-white font-bold text-lg">{{ content.modernizationTitle }}</h4>
              <span class="px-3 py-1 bg-emerald-600/30 text-emerald-300 text-xs rounded-full">{{ content.modernizationBadge }}</span>
            </div>
            <p class="text-blue-100/90 leading-relaxed">{{ content.helicopterModernization }}</p>
          </article>
        </div>

        <div class="grid md:grid-cols-2 gap-4 mt-6">
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/h6.png" alt="Helicopter modernization scheme" class="w-full h-72 object-contain bg-slate-50 p-3 cursor-pointer" @click="openGallery(helicopterSchemeImages, 0)" />
          </div>
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/h7.png" alt="Avionics upgrade scheme" class="w-full h-72 object-contain bg-slate-50 p-3 cursor-pointer" @click="openGallery(helicopterSchemeImages, 1)" />
          </div>
        </div>

        <div class="mt-6 p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <h4 class="text-white font-bold text-lg mb-3">{{ content.specialVariantsTitle }}</h4>
          <div class="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div v-for="(image, index) in specialVariantImages" :key="image.src" class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img :src="image.src" :alt="image.alt" class="w-full h-44 object-cover cursor-pointer" @click="openGallery(specialVariantImages, index)" />
            </div>
          </div>
        </div>

        <div class="mt-6 p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <h4 class="text-white font-bold text-lg mb-3">{{ content.vipTitle }}</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src="../../../assets/hh.jpg" alt="VIP helicopter cabin" class="w-full h-56 object-cover cursor-pointer" @click="openGallery(vipImages, 0)" />
            </div>
            <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <img src="../../../assets/hh1.jpg" alt="VIP helicopter interior" class="w-full h-56 object-cover cursor-pointer" @click="openGallery(vipImages, 1)" />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-6">
          <h3 class="text-2xl font-bold text-white">{{ content.aircraftTitle }}</h3>
          <p class="text-blue-200/80 mt-2 leading-relaxed">{{ content.aircraftIntro }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/hhhh.jpg" alt="Su-25 aircraft" class="w-full h-64 object-cover cursor-pointer" @click="openGallery(aircraftHeroImages, 0)" />
          </div>
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/hhhhh.jpg" alt="Su-25UB aircraft" class="w-full h-64 object-cover cursor-pointer" @click="openGallery(aircraftHeroImages, 1)" />
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-3 mb-6">
          <div
            v-for="model in aircraftModels"
            :key="model"
            class="flex items-center justify-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/15 text-white font-semibold"
          >
            {{ model }}
          </div>
        </div>

        <article class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <div class="flex items-center justify-between gap-4 mb-3">
            <h4 class="text-white font-bold text-lg">Su-25 / Su-25UB</h4>
            <span class="px-3 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full">{{ content.overhaulBadge }}</span>
          </div>
          <p class="text-blue-100/90 leading-relaxed">{{ content.suRepair }}</p>
        </article>

        <article class="mt-6 p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <div class="flex items-center justify-between gap-4 mb-3">
            <h4 class="text-white font-bold text-lg">{{ content.suModernizationTitle }}</h4>
            <span class="px-3 py-1 bg-emerald-600/30 text-emerald-300 text-xs rounded-full">{{ content.modernizationBadge }}</span>
          </div>
          <p class="text-blue-100/90 leading-relaxed mb-5">{{ content.suModernization }}</p>
          <div class="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
            <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5"><img src="../../../assets/zz.png" alt="Su-25 modernization" class="w-full h-44 object-contain bg-slate-50 p-3 cursor-pointer" @click="openGallery(suModernizationImages, 0)" /></div>
            <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5"><img src="../../../assets/x.png" alt="Su-25 avionics" class="w-full h-44 object-contain bg-slate-50 p-3 cursor-pointer" @click="openGallery(suModernizationImages, 1)" /></div>
            <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5"><img src="../../../assets/xxz.png" alt="Su-25 navigation" class="w-full h-44 object-contain bg-slate-50 p-3 cursor-pointer" @click="openGallery(suModernizationImages, 2)" /></div>
            <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5"><img src="../../../assets/xx.png" alt="Su-25 weapon systems" class="w-full h-44 object-contain bg-slate-50 p-3 cursor-pointer" @click="openGallery(suModernizationImages, 3)" /></div>
            <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5"><img src="../../../assets/z.png" alt="Su-25 upgrade configuration" class="w-full h-44 object-contain bg-slate-50 p-3 cursor-pointer" @click="openGallery(suModernizationImages, 4)" /></div>
          </div>
        </article>

        <article class="mt-6 p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <div class="flex items-center justify-between gap-4 mb-3">
            <h4 class="text-white font-bold text-lg">L-39</h4>
            <span class="px-3 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full">{{ content.overhaulBadge }}</span>
          </div>
          <p class="text-blue-100/90 leading-relaxed mb-5">{{ content.l39Text }}</p>
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5 max-w-3xl">
            <img src="../../../assets/xxxxx.png" alt="L-39 aircraft" class="w-full h-72 object-contain bg-slate-50 p-4 cursor-pointer" @click="openGallery(l39Images, 0)" />
          </div>
        </article>

        <article class="mt-6 p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <div class="flex items-center justify-between gap-4 mb-3">
            <h4 class="text-white font-bold text-lg">An-2</h4>
            <span class="px-3 py-1 bg-amber-600/30 text-amber-300 text-xs rounded-full">{{ content.maintenanceBadge }}</span>
          </div>
          <p class="text-blue-100/90 leading-relaxed mb-5">{{ content.an2Text }}</p>
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5 max-w-3xl">
            <img src="../../../assets/zxzzaxzx.png" alt="An-2 aircraft" class="w-full h-72 object-contain bg-slate-50 p-4 cursor-pointer" @click="openGallery(an2Images, 0)" />
          </div>
        </article>
      </section>
    </div>
  </SectionLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../../data/navigation.js'
import { useLightbox } from '../../../composables/useLightbox'

const { locale, t: $t } = useI18n()
const { openGallery } = useLightbox()
const sidebarLinks = getSidebarLinks('products')
const aircraftModels = ['Su-25', 'Su-25UB', 'L-39']
const helicopterSchemeImage = new URL('../../../assets/h6.png', import.meta.url).href
const avionicsSchemeImage = new URL('../../../assets/h7.png', import.meta.url).href
const vipCabinImage = new URL('../../../assets/hh.jpg', import.meta.url).href
const vipInteriorImage = new URL('../../../assets/hh1.jpg', import.meta.url).href
const su25Image = new URL('../../../assets/hhhh.jpg', import.meta.url).href
const su25ubImage = new URL('../../../assets/hhhhh.jpg', import.meta.url).href
const suModernizationImage = new URL('../../../assets/zz.png', import.meta.url).href
const suAvionicsImage = new URL('../../../assets/x.png', import.meta.url).href
const suNavigationImage = new URL('../../../assets/xxz.png', import.meta.url).href
const suWeaponsImage = new URL('../../../assets/xx.png', import.meta.url).href
const suUpgradeConfigImage = new URL('../../../assets/z.png', import.meta.url).href
const l39Image = new URL('../../../assets/xxxxx.png', import.meta.url).href
const an2Image = new URL('../../../assets/zxzzaxzx.png', import.meta.url).href

const helicopterImages = [
  { src: new URL('../../../assets/h.jpg', import.meta.url).href, alt: 'Mi-8 helicopter' },
  { src: new URL('../../../assets/h2.png', import.meta.url).href, alt: 'Mi-17 helicopter' },
  { src: new URL('../../../assets/h3.jpg', import.meta.url).href, alt: 'Mi-24 helicopter' },
  { src: new URL('../../../assets/h4.jpg', import.meta.url).href, alt: 'Mi-35 helicopter' },
  { src: new URL('../../../assets/h5.jpg', import.meta.url).href, alt: 'Helicopter maintenance' },
]

const specialVariantImages = [
  { src: new URL('../../../assets/h8.jpg', import.meta.url).href, alt: 'Rescue variant' },
  { src: new URL('../../../assets/h9.jpg', import.meta.url).href, alt: 'Firefighting variant' },
  { src: new URL('../../../assets/h10.jpg', import.meta.url).href, alt: 'Medical variant' },
  { src: new URL('../../../assets/h11.png', import.meta.url).href, alt: 'Specialized configuration' },
]

const helicopterSchemeImages = [
  { src: helicopterSchemeImage, alt: 'Helicopter modernization scheme' },
  { src: avionicsSchemeImage, alt: 'Avionics upgrade scheme' },
]

const vipImages = [
  { src: vipCabinImage, alt: 'VIP helicopter cabin' },
  { src: vipInteriorImage, alt: 'VIP helicopter interior' },
]

const aircraftHeroImages = [
  { src: su25Image, alt: 'Su-25 aircraft' },
  { src: su25ubImage, alt: 'Su-25UB aircraft' },
]

const suModernizationImages = [
  { src: suModernizationImage, alt: 'Su-25 modernization' },
  { src: suAvionicsImage, alt: 'Su-25 avionics' },
  { src: suNavigationImage, alt: 'Su-25 navigation' },
  { src: suWeaponsImage, alt: 'Su-25 weapon systems' },
  { src: suUpgradeConfigImage, alt: 'Su-25 upgrade configuration' },
]

const l39Images = [{ src: l39Image, alt: 'L-39 aircraft' }]
const an2Images = [{ src: an2Image, alt: 'An-2 aircraft' }]

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Helicopters and Aircraft',
      heroSubtitle: 'Repair, modernization and conversion programs',
      helicoptersTitle: 'Helicopters',
      helicoptersIntro: 'Overhaul, modernization, maintenance and specialized conversion for Mi-8, Mi-17, Mi-24 and Mi-35 helicopters.',
      overhaulBadge: 'Overhaul',
      modernizationTitle: 'Modernization',
      modernizationBadge: 'Upgrade',
      maintenanceBadge: 'Service',
      helicopterRepair: 'Overhaul, maintenance, service-life extension, aggregate repair, testing, stand trials and test flights for all modifications of Mi-8, Mi-17, Mi-24 and Mi-35 helicopters.',
      helicopterModernization: 'Modernization of all modifications of Mi-8, Mi-17, Mi-24 and Mi-35 helicopters, including avionics, navigation and weapon system upgrades.',
      specialVariantsTitle: 'Conversion of Mi-8 and Mi-17 helicopters into rescue, firefighting and medical variants',
      vipTitle: 'VIP conversion of Mi-8 and Mi-17 helicopters with individual configuration',
      aircraftTitle: 'Aircraft',
      aircraftIntro: 'Repair and technical service directions for Su-25, Su-25UB, L-39 and An-2 aircraft.',
      suRepair: 'Repair, service-life extension, maintenance, parts production and supply, aggregate repair, stand testing and test flights for Su-25 and Su-25UB aircraft.',
      suModernizationTitle: 'Su-25 / Su-25UB modernization',
      suModernization: 'Modernization of Su-25 and Su-25UB aircraft, including avionics, navigation and weapon system upgrades.',
      l39Text: 'Overhaul, maintenance and modernization of L-39 aircraft.',
      an2Text: 'Repair and maintenance of An-2 aircraft.',
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Вертолёты и самолёты',
      heroSubtitle: 'Ремонт, модернизация и программы переоборудования',
      helicoptersTitle: 'Вертолёты',
      helicoptersIntro: 'Капитальный ремонт, модернизация, обслуживание и специализированное переоборудование вертолётов Mi-8, Mi-17, Mi-24 и Mi-35.',
      overhaulBadge: 'Капремонт',
      modernizationTitle: 'Модернизация',
      modernizationBadge: 'Обновление',
      maintenanceBadge: 'Сервис',
      helicopterRepair: 'Капитальный ремонт, обслуживание, продление ресурса, ремонт агрегатов, проверки, стендовые испытания и испытательные полёты для всех модификаций вертолётов Mi-8, Mi-17, Mi-24 и Mi-35.',
      helicopterModernization: 'Модернизация всех модификаций вертолётов Mi-8, Mi-17, Mi-24 и Mi-35, включая обновление авионики, навигационных и оружейных систем.',
      specialVariantsTitle: 'Переоборудование вертолётов Mi-8 и Mi-17 в спасательные, противопожарные и медицинские варианты',
      vipTitle: 'Переоборудование вертолётов Mi-8 и Mi-17 в VIP-версию с индивидуальной конфигурацией',
      aircraftTitle: 'Самолёты',
      aircraftIntro: 'Направления ремонта и технического обслуживания самолётов Su-25, Su-25UB, L-39 и An-2.',
      suRepair: 'Ремонт, продление ресурса, обслуживание, производство и поставка деталей, ремонт агрегатов, стендовые испытания и испытательные полёты для самолётов Su-25 и Su-25UB.',
      suModernizationTitle: 'Модернизация Su-25 / Su-25UB',
      suModernization: 'Модернизация самолётов Su-25 и Su-25UB, включая обновление авионики, навигации и систем вооружения.',
      l39Text: 'Капитальный ремонт, обслуживание и модернизация самолётов L-39.',
      an2Text: 'Ремонт и обслуживание самолётов An-2.',
    }
  }
  return {
    heroTitle: 'ვერტმფრენები და თვითმფრინავები',
    heroSubtitle: 'რემონტი, მოდერნიზება და გადაკეთების პროგრამები',
    helicoptersTitle: 'შვეულმფრენები',
    helicoptersIntro: 'Mi-8, Mi-17, Mi-24 და Mi-35 ტიპის შვეულმფრენების კაპიტალური რემონტი, მოდერნიზება, მომსახურება და სპეციალიზებული გადაკეთება.',
    overhaulBadge: 'კაპიტალური რემონტი',
    modernizationTitle: 'მოდერნიზება',
    modernizationBadge: 'განახლება',
    maintenanceBadge: 'მომსახურება',
    helicopterRepair: 'Mi-8, Mi-17, Mi-24 და Mi-35 ყველა მოდიფიკაციის ვერტმფრენების კაპიტალური რემონტი, მომსახურება, სასიცოცხლო რესურსის გახანგრძლივება, აგრეგატების რემონტი, შემოწმება, სასტენდო გამოცდები და საგამოცდო ფრენები.',
    helicopterModernization: 'Mi-8, Mi-17, Mi-24 და Mi-35 ყველა მოდიფიკაციის ვერტმფრენების მოდერნიზება, ავიონიკის, სანავიგაციო და შეიარაღების სისტემების განახლება.',
    specialVariantsTitle: 'Mi-8 და Mi-17 ტიპის ვერტმფრენების სამაშველო, ხანძარსაწინააღმდეგო და სამედიცინო ვარიანტებად გადაკეთება',
    vipTitle: 'Mi-8 და Mi-17 ტიპის ვერტმფრენების VIP ვერსიად გადაკეთება, ინდივიდუალური კონფიგურაციით',
    aircraftTitle: 'თვითმფრინავები',
    aircraftIntro: 'Su-25, Su-25UB, L-39 და An-2 ტიპის თვითმფრინავების სარემონტო და ტექნიკური მომსახურების მიმართულებები.',
    suRepair: 'Su-25 და Su-25UB ტიპის თვითმფრინავების რემონტი, სასიცოცხლო რესურსის გახანგრძლივება, მომსახურება, ნაწილების წარმოება და მიწოდება, აგრეგატების რემონტი, საასტენდო გამოცდები და საგამოცდო ფრენები.',
    suModernizationTitle: 'Su-25 / Su-25UB მოდერნიზაცია',
    suModernization: 'Su-25 და Su-25UB ტიპის საფრენი აპარატების მოდერნიზაცია, ავიონიკის, ნავიგაციისა და შეიარაღების სისტემების განახლება.',
    l39Text: 'L-39 ტიპის საფრენი აპარატების კაპიტალური რემონტი, მომსახურება და მოდერნიზაცია.',
    an2Text: 'An-2 ტიპის საფრენი აპარატების რემონტი და მომსახურება.',
  }
})
</script>
