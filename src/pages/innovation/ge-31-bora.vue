<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="content.sidebarTitle"
    :sidebarLinks="sidebarLinks"
  >
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 overflow-hidden">
      <img src="../../assets/p5.png" alt="GE-31 Bora" class="w-full h-72 object-contain bg-white" />
      <div class="p-8">
        <h3 class="text-2xl font-bold text-white mb-3">GE-31 BORA</h3>
        <p class="text-blue-200/70 text-sm leading-relaxed">
          {{ content.intro }}
        </p>
      </div>
    </div>

    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">{{ content.conceptTitle }}</h3>
      </div>

      <p class="text-blue-200/70 text-sm leading-relaxed mb-4">
        {{ content.conceptIntro }}
      </p>
      <ul class="space-y-3">
        <li v-for="item in content.conceptItems" :key="item" class="flex items-start gap-3 text-blue-100/80 text-sm">
          <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0 mt-1.5"></span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">{{ content.advantagesTitle }}</h3>
      </div>

      <ul class="grid md:grid-cols-2 gap-4">
        <li v-for="item in content.advantageItems" :key="item" class="flex items-start gap-3 rounded-lg border border-blue-500/15 bg-blue-500/10 p-4 text-blue-100/80 text-sm">
          <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0 mt-1.5"></span>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">{{ content.layoutTitle }}</h3>
      </div>

      <div class="grid gap-6">
        <div class="rounded-xl overflow-hidden border border-blue-500/15 bg-black/20">
          <img src="../../assets/p12.png" alt="GE-31 systems architecture" class="w-full h-80 object-contain bg-white" />
        </div>
        <div class="rounded-xl overflow-hidden border border-blue-500/15 bg-black/20">
          <img src="../../assets/p13.png" alt="GE-31 payload stations" class="w-full h-80 object-contain bg-white" />
        </div>
        <div class="rounded-xl overflow-hidden border border-blue-500/15 bg-black/20">
          <img src="../../assets/p5.png" alt="GE-31 Bora aircraft render" class="w-full h-80 object-contain bg-white" />
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
  { to: '/innovation/elite-jet', label: locale.value === 'ru' ? 'Elite Jet / Elite Jet NG' : 'Elite Jet / Elite Jet NG', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
  { to: '/innovation/ge-31-bora', label: 'GE-31 Bora', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
])

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'GE-31 Bora',
      heroSubtitle: 'Su-25 based upgraded attack aircraft concept',
      sidebarTitle: 'Innovation',
      intro: 'The new GE-31 attack aircraft is a modified version of the Su-25 type aircraft.',
      conceptTitle: 'GE-31 Concept',
      conceptIntro: 'The GE-31 attack aircraft concept includes:',
      conceptItems: [
        'Creation of a new fuselage while preserving the unique characteristics of the Su-25 family.',
        'Installation of new Western-made equipment, including air systems, engine, radio-electronic, navigation and weapon systems.',
      ],
      advantagesTitle: 'Advantages of GE-31',
      advantageItems: [
        'Compatibility with NATO systems.',
        'Compatibility with ICAO systems.',
        'Operation in night and adverse weather conditions.',
        'Increased accuracy of bombs, guns and unguided rockets by about 2.5 to 3 times.',
        'Reduced aircraft preparation time before flight.',
      ],
      layoutTitle: 'Layout',
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'GE-31 Bora',
      heroSubtitle: 'Концепция модернизированного штурмовика на базе Su-25',
      sidebarTitle: 'Инновации',
      intro: 'Новый штурмовик GE-31 представляет собой модифицированную версию самолёта типа Su-25.',
      conceptTitle: 'Концепция GE-31',
      conceptIntro: 'Концепция штурмовика GE-31 включает:',
      conceptItems: [
        'Создание нового фюзеляжа с учётом уникальных характеристик семейства Su-25.',
        'Установку нового западного оборудования, включая воздушные системы, двигатель, радиоэлектронные, навигационные и оружейные системы.',
      ],
      advantagesTitle: 'Преимущества GE-31',
      advantageItems: [
        'Совместимость с системами NATO.',
        'Совместимость с системами ICAO.',
        'Применение ночью и в плохих погодных условиях.',
        'Повышение точности применения бомб, пушек и неуправляемых ракет примерно в 2.5–3 раза.',
        'Сокращение времени подготовки самолёта к вылету.',
      ],
      layoutTitle: 'Компоновка',
    }
  }
  return {
    heroTitle: 'GE-31 Bora',
    heroSubtitle: 'Su-25-ზე დაფუძნებული მოიერიშე თვითმფრინავის განახლებული კონცეფცია',
    sidebarTitle: 'ინოვაცია',
    intro: 'ახალი მოიერიშე თვითმფრინავი GE-31 წარმოადგენს Su-25 ტიპის თვითმფრინავის მოდიფიცირებულ ვერსიას.',
    conceptTitle: 'GE-31-ის კონცეფცია',
    conceptIntro: 'ახალი მოიერიშე თვითმფრინავის GE-31 მოიაზრებს:',
    conceptItems: [
      'ახალი ფიუზელაჟის, კორპუსის, შექმნას Su-25 ოჯახის თვითმფრინავების უნიკალური მახასიათებლების გათვალისწინებით.',
      'დასავლური წარმოების ახალი აღჭურვილობის ინსტალაციას, მათ შორის საჰაერო სისტემების, ძრავის, რადიოელექტრონული, სანავიგაციო და შეიარაღების სისტემების.',
    ],
    advantagesTitle: 'მოიერიშე თვითმფრინავ GE-31-ის უპირატესობები',
    advantageItems: [
      'NATO-ს სისტემებთან თავსებადობა.',
      'ICAO-ს სისტემებთან თავსებადობა.',
      'თვითმფრინავის გამოყენება ღამის და ცუდი ამინდის პირობებში.',
      'ბომბების, ქვემეხებისა და უმართავი რაკეტების გამოყენების სიზუსტის გაზრდა დაახლოებით 2.5–3-ჯერ.',
      'თვითმფრინავის საფრენოსნოდ მომზადების დროის შემცირება.',
    ],
    layoutTitle: 'განლაგება',
  }
})
</script>
