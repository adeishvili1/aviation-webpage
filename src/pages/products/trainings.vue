<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.products')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="space-y-6">
      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-6">
          <h3 class="text-2xl font-bold text-white">{{ content.directionsTitle }}</h3>
        </div>

        <p class="text-blue-100/90 leading-relaxed mb-6">
          {{ content.directionsIntro }}
        </p>

        <div class="grid md:grid-cols-2 gap-3">
          <div
            v-for="item in content.directions"
            :key="item"
            class="flex items-start gap-3 rounded-xl border border-blue-500/15 bg-white/5 p-4 text-blue-100/90"
          >
            <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0 mt-2"></span>
            <span>{{ item }}</span>
          </div>
        </div>
      </section>

      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-6">
          <h3 class="text-2xl font-bold text-white">{{ content.simulatorTitle }}</h3>
        </div>

        <p class="text-blue-100/90 leading-relaxed">
          {{ content.simulatorDesc }}
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
const sidebarLinks = getSidebarLinks('products')

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Trainings',
      heroSubtitle: 'Theoretical Retraining and Professional Courses',
      directionsTitle: 'Training Areas',
      directionsIntro: 'We offer theoretical retraining, professional trainings and educational courses in the following directions:',
      directions: [
        'Flight training, theoretical and practical.',
        'Aviation engineering.',
        'Technical operation of aircraft.',
        'Aircraft maintenance, B1-B2 and EASA Part-66.',
        'Avionics and radio-electronic systems.',
        'Navigation and flight management systems.',
        'Safety and quality management in aviation.',
      ],
      simulatorTitle: 'Simulators',
      simulatorDesc: 'Modern simulators for both helicopter and airplane types are also available for pilots, ensuring a training process as close to real conditions as possible.',
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Обучение',
      heroSubtitle: 'Теоретическая переподготовка и профессиональные курсы',
      directionsTitle: 'Направления обучения',
      directionsIntro: 'У вас есть возможность пройти теоретическую переподготовку, профессиональные тренинги и учебные курсы по следующим направлениям:',
      directions: [
        'Лётная подготовка, теоретическая и практическая.',
        'Авиационная инженерия.',
        'Техническая эксплуатация летательных аппаратов.',
        'Техническое обслуживание воздушных судов, B1-B2 и EASA Part-66.',
        'Авионика и радиоэлектронные системы.',
        'Навигационные системы и системы управления полётом.',
        'Безопасность и управление качеством в авиации.',
      ],
      simulatorTitle: 'Симуляторы',
      simulatorDesc: 'Для пилотов доступны современные симуляторы как для вертолётов, так и для самолётов, что обеспечивает учебный процесс, максимально приближенный к реальным условиям.',
    }
  }

  return {
    heroTitle: 'ტრენინგები',
    heroSubtitle: 'თეორიული გადამზადება და პროფესიული კურსები',
    directionsTitle: 'სასწავლო მიმართულებები',
    directionsIntro: 'თქვენ გაქვთ თეორიული გადამზადების, პროფესიული ტრენინგებისა და სასწავლო კურსების ჩატარების შესაძლებლობა შემდეგი მიმართულებებით:',
    directions: [
      'საფრენი მომზადება, თეორიული და პრაქტიკული.',
      'საავიაციო ინჟინერია.',
      'საფრენი აპარატების ტექნიკური ექსპლუატაცია.',
      'საჰაერო ხომალდების ტექნიკური მომსახურება, B1-B2 და EASA Part-66.',
      'ავიონიკა და რადიოელექტრონული სისტემები.',
      'ნავიგაციისა და ფრენის მართვის სისტემები.',
      'უსაფრთხოება და ხარისხის მართვა ავიაციაში.',
    ],
    simulatorTitle: 'სიმულატორები',
    simulatorDesc: 'ასევე ხელმისაწვდომია პილოტებისთვის განკუთვნილი თანამედროვე სიმულატორები, როგორც შვეულმფრენების, ისე თვითმფრინავების ტიპებისთვის, რაც უზრუნველყოფს რეალურ პირობებთან მაქსიმალურად მიახლოებულ სასწავლო პროცესს.',
  }
})
</script>
