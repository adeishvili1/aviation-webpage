<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.products')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="space-y-6">
      <section
        v-for="service in content.services"
        :key="service.title"
        class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-6"
      >
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
            </svg>
          </div>

          <div class="flex-1">
            <h3 class="text-white font-bold text-xl mb-3">{{ service.title }}</h3>
            <p class="text-blue-100/90 leading-relaxed">{{ service.desc }}</p>

            <ul v-if="service.items?.length" class="space-y-2 mt-4">
              <li
                v-for="item in service.items"
                :key="item"
                class="flex items-start gap-3 text-blue-100/90"
              >
                <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0 mt-2"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
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

const icons = {
  expertise: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  overhaul: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  modernization: 'M13 10V3L4 14h7v7l9-11h-7z',
  maintenance: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  engineering: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
}

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Expertise',
      heroSubtitle: 'Service and Technical Maintenance',
      services: [
        {
          title: 'Technical Expertise',
          desc: 'Comprehensive technical inspection and repair of aircraft, their assemblies and systems.',
          icon: icons.expertise,
        },
        {
          title: 'Overhaul',
          desc: 'Complete renewal and restoration of helicopter and aircraft components.',
          icon: icons.overhaul,
          items: [
            'Full overhaul, including restoration of damaged aircraft.',
            'Complete repair services for Mi-8 and Mi-17 helicopters.',
            'Complete repair services for Su-25 and Su-25UB combat aircraft.',
            'Complete repair services for Mi-24 and Mi-35 helicopters.',
          ],
        },
        {
          title: 'Modernization',
          desc: 'Upgrading aircraft and their systems in line with modern standards.',
          icon: icons.modernization,
          items: [
            'Modernization program for Mi-8 and Mi-17 helicopters.',
            'Modernization program for Su-25 and Su-25UB combat aircraft.',
            'Modernization program for Mi-24 and Mi-35 helicopters.',
          ],
        },
        {
          title: 'Technical Maintenance',
          desc: 'Routine and technical maintenance in accordance with local and international customer requirements.',
          icon: icons.maintenance,
        },
        {
          title: 'Engineering and Design Solutions',
          desc: 'Special engineering and design work tailored to the customer’s individual requirements.',
          icon: icons.engineering,
        },
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Экспертиза',
      heroSubtitle: 'Сервис и техническое обслуживание',
      services: [
        {
          title: 'Техническая экспертиза',
          desc: 'Полная техническая проверка и ремонт летательных аппаратов, их агрегатов и систем.',
          icon: icons.expertise,
        },
        {
          title: 'Капитальный ремонт',
          desc: 'Полное обновление и восстановление всех компонентов вертолётов и самолётов.',
          icon: icons.overhaul,
          items: [
            'Полный капитальный ремонт, включая восстановление повреждённых летательных аппаратов.',
            'Полный ремонтный сервис для вертолётов Mi-8 и Mi-17.',
            'Полный ремонтный сервис для боевых самолётов Su-25 и Su-25UB.',
            'Полный ремонтный сервис для вертолётов Mi-24 и Mi-35.',
          ],
        },
        {
          title: 'Модернизация',
          desc: 'Обновление летательных аппаратов и их систем в соответствии с современными стандартами.',
          icon: icons.modernization,
          items: [
            'Программа модернизации вертолётов Mi-8 и Mi-17.',
            'Программа модернизации боевых самолётов Su-25 и Su-25UB.',
            'Программа модернизации вертолётов Mi-24 и Mi-35.',
          ],
        },
        {
          title: 'Техническое обслуживание',
          desc: 'Регулярное и техническое обслуживание в соответствии с местными и международными заказами.',
          icon: icons.maintenance,
        },
        {
          title: 'Инженерные и конструкторские решения',
          desc: 'Выполнение специальных инженерных и конструкторских работ по индивидуальным требованиям клиента.',
          icon: icons.engineering,
        },
      ],
    }
  }

  return {
    heroTitle: 'ექსპერტიზა',
    heroSubtitle: 'სერვისი და ტექნიკური მომსახურება',
    services: [
      {
        title: 'ტექნიკური ექსპერტიზა',
        desc: 'ტექნიკური ექსპერტიზა — საფრენი აპარატების, მათი აგრეგატების და სისტემების სრულყოფილი ტექნიკური შემოწმება და რემონტი.',
        icon: icons.expertise,
      },
      {
        title: 'კაპიტალური რემონტი',
        desc: 'კაპიტალური რემონტი — შვეულმფრენებისა და თვითმფრინავების ყველა კომპონენტის სრული განახლება და აღდგენა.',
        icon: icons.overhaul,
        items: [
          'სრული კაპიტალური რემონტი, მათ შორის დაზიანებული საფრენი აპარატების აღდგენა.',
          'Mi-8 და Mi-17 ტიპის შვეულმფრენების სრული სარემონტო მომსახურება.',
          'Su-25 და Su-25UB ტიპის საბრძოლო თვითმფრინავების სრული სარემონტო მომსახურება.',
          'Mi-24 და Mi-35 ტიპის შვეულმფრენების სრული სარემონტო მომსახურება.',
        ],
      },
      {
        title: 'მოდერნიზება',
        desc: 'მოდერნიზება — საფრენი აპარატების და მათი სისტემების განახლება თანამედროვე სტანდარტების შესაბამისად.',
        icon: icons.modernization,
        items: [
          'Mi-8 და Mi-17 ტიპის შვეულმფრენების მოდერნიზების პროგრამა.',
          'Su-25 და Su-25UB ტიპის საბრძოლო თვითმფრინავების მოდერნიზების პროგრამა.',
          'Mi-24 და Mi-35 ტიპის შვეულმფრენების მოდერნიზების პროგრამა.',
        ],
      },
      {
        title: 'ტექნიკური მომსახურება',
        desc: 'ტექნიკური მომსახურება — რეგულარული და ტექნიკური მომსახურება ადგილობრივი და საერთაშორისო დაკვეთების შესაბამისად.',
        icon: icons.maintenance,
      },
      {
        title: 'საინჟინრო და საკონსტრუქტორო გადაწყვეტილებები',
        desc: 'საინჟინრო და საკონსტრუქტორო გადაწყვეტილებები — სპეციალური საინჟინრო და საკონსტრუქციო სამუშაოების შესრულება კლიენტის ინდივიდუალური მოთხოვნების შესაბამისად.',
        icon: icons.engineering,
      },
    ],
  }
})
</script>
