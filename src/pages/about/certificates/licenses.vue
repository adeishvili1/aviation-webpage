<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.about')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-8">
        <h3 class="text-2xl font-bold text-white">{{ content.title }}</h3>
        <p class="text-blue-200/60 text-sm mt-1">{{ content.subtitle }}</p>
      </div>

      <div class="space-y-8">
        <div v-for="lic in content.licenses" :key="lic.number" class="bg-blue-500/10 rounded-xl border border-blue-500/20 overflow-hidden">
          <div v-if="lic.image" class="bg-white overflow-hidden">
            <img
              :src="lic.image"
              :alt="'License ' + lic.number"
              class="h-[26rem] w-full object-cover object-center cursor-pointer md:h-[38rem]"
              @click="open(lic.image, 'License ' + lic.number)"
            />
          </div>
          <div class="p-6">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
                <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <span class="px-3 py-1 bg-blue-600/30 rounded-full text-blue-300 text-xs font-bold">№ {{ lic.number }}</span>
                  <span class="text-white/40 text-xs">{{ lic.date }}</span>
                </div>
                <h4 class="text-white font-semibold text-lg mb-1">{{ lic.title }}</h4>
                <p class="text-blue-200/70 text-sm">{{ lic.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../../data/navigation.js'
import { useLightbox } from '../../../composables/useLightbox'
import lic407img from '../../../assets/lic.png'
import lic408img from '../../../assets/lic2.png'
import lic409img from '../../../assets/lic3.png'

const { locale, t: $t } = useI18n()
const { open } = useLightbox()
const sidebarLinks = getSidebarLinks('about')

const content = computed(() => {
  const base = {
    licenses: [
      { number: '407', image: lic407img },
      { number: '408', image: lic408img },
      { number: '409', image: lic409img },
    ],
  }

  if (locale.value === 'en') {
    return {
      heroTitle: 'Licenses',
      heroSubtitle: 'Local Licenses',
      title: 'General Licenses',
      subtitle: 'Issued on May 27, 2008',
      licenses: [
        { ...base.licenses[0], date: 'May 27, 2008', title: 'Manufacture and Production of Military Weapons', desc: 'General license for manufacture and production of military weapons.' },
        { ...base.licenses[1], date: 'May 27, 2008', title: 'Repair and Modernization of Military Weapons', desc: 'General license for repair of military weapons, including modernization and on-site service.' },
        { ...base.licenses[2], date: 'May 27, 2008', title: 'Trade in Military Weapons', desc: 'General license for trade in military weapons.' },
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Лицензии',
      heroSubtitle: 'Местные лицензии',
      title: 'Генеральные лицензии',
      subtitle: 'Выданы 27 мая 2008 года',
      licenses: [
        { ...base.licenses[0], date: '27 мая 2008 года', title: 'Изготовление и производство военно-боевого оружия', desc: 'Генеральная лицензия на изготовление и производство военно-боевого оружия.' },
        { ...base.licenses[1], date: '27 мая 2008 года', title: 'Ремонт и модернизация военно-боевого оружия', desc: 'Генеральная лицензия на ремонт военно-боевого оружия, включая модернизацию и обслуживание на месте.' },
        { ...base.licenses[2], date: '27 мая 2008 года', title: 'Торговля военно-боевым оружием', desc: 'Генеральная лицензия на торговлю военно-боевым оружием.' },
      ],
    }
  }

  return {
    heroTitle: 'ლიცენზიები',
    heroSubtitle: 'ადგილობრივი ლიცენზიები',
    title: 'გენერალური ლიცენზიები',
    subtitle: 'გაცემული 2008 წლის 27 მაისს',
    licenses: [
      { ...base.licenses[0], date: '2008 წლის 27 მაისი', title: 'სამხედრო-საბრძოლო იარაღის დამზადება და წარმოება', desc: 'სამხედრო-საბრძოლო იარაღის დამზადებისა და წარმოების გენერალური ლიცენზია.' },
      { ...base.licenses[1], date: '2008 წლის 27 მაისი', title: 'სამხედრო-საბრძოლო იარაღის შეკეთება და მოდერნიზება', desc: 'სამხედრო-საბრძოლო იარაღის შეკეთების, მოდერნიზებისა და ადგილზე მომსახურების გენერალური ლიცენზია.' },
      { ...base.licenses[2], date: '2008 წლის 27 მაისი', title: 'სამხედრო-საბრძოლო იარაღით ვაჭრობა', desc: 'სამხედრო-საბრძოლო იარაღით ვაჭრობის გენერალური ლიცენზია.' },
    ],
  }
})
</script>
