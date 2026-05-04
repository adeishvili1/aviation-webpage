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
          <h3 class="text-2xl font-bold text-white">{{ content.missilesTitle }}</h3>
          <p class="text-blue-200/80 mt-2 leading-relaxed">
            {{ content.missilesIntro }}
          </p>
        </div>

        <div class="grid gap-4 mb-6">
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/j.jpg" alt="R-60 missile" class="w-full h-72 object-cover object-center" />
          </div>
          <div class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img src="../../../assets/j1.jpg" alt="R-73 missile" class="w-full h-72 object-cover object-center" />
          </div>
        </div>

        <div class="space-y-4">
          <article
            v-for="paragraph in content.missileParagraphs"
            :key="paragraph"
            class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/15"
          >
            <p class="text-blue-100/90 leading-relaxed">
              {{ paragraph }}
            </p>
          </article>
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
      heroTitle: 'Missiles',
      heroSubtitle: 'R-60 and R-73 missile production and service',
      missilesTitle: 'R-60 and R-73 Missiles',
      missilesIntro: 'Missile production, repair, restoration and service-life extension.',
      missileParagraphs: [
        'Since the late 1970s, Tbilisi Aircraft Manufacturing has produced R-60 and R-73 missiles. Approximately 34,000 R-60 units and approximately 6,000 R-73 units have been manufactured.',
        'Today the company carries out missile repair, restoration and extension of their operational service life.',
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Ракеты',
      heroSubtitle: 'Производство и обслуживание ракет R-60 и R-73',
      missilesTitle: 'Ракеты R-60 и R-73',
      missilesIntro: 'Производство, ремонт, восстановление и продление срока эксплуатации ракет.',
      missileParagraphs: [
        'С конца 1970-х годов Тбилавиамшени начал производство ракет типов R-60 и R-73. Всего выпущено около 34 000 единиц R-60 и около 6 000 единиц R-73.',
        'В настоящее время предприятие осуществляет ремонт, восстановление и продление эксплуатационного ресурса ракет.',
      ],
    }
  }

  return {
    heroTitle: 'რაკეტები',
    heroSubtitle: 'R-60 და R-73 ტიპის რაკეტების წარმოება და მომსახურება',
    missilesTitle: 'R-60 და R-73 ტიპის რაკეტები',
    missilesIntro: 'რაკეტების წარმოება, რემონტი, აღდგენა და საექსპლუატაციო რესურსის გახანგრძლივება.',
    missileParagraphs: [
      '1970-იანი წლების მიწურულიდან თბილავიამშენში დაიწყო R-60 და R-73 ტიპის რაკეტების წარმოება. სულ გამოშვებულია დაახლოებით 34 000 ერთეული R-60 და დაახლოებით 6 000 ერთეული R-73.',
      'ამჟამად თბილავიამშენი ახორციელებს რაკეტების რემონტს, აღდგენას და მისი საექსპლუატაციო რესურსის გახანგრძლივებას.',
    ],
  }
})
</script>
