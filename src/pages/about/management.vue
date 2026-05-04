<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="$t('nav.about')"
    :sidebarLinks="sidebarLinks"
  >
    <div class="space-y-8">
      <section class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-6 sm:p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-8">
          <h2 class="text-2xl font-bold text-white">{{ content.structureTitle }}</h2>
          <p class="text-blue-200/70 mt-2">{{ content.structureDesc }}</p>
        </div>

        <div class="hidden lg:block">
          <div class="flex flex-col items-center">
            <button
              type="button"
              class="w-72 rounded-2xl border px-5 py-4 text-center shadow-lg transition-all"
              :class="selectedId === 'qutateladze'
                ? 'border-blue-300 bg-blue-600/30 shadow-blue-500/20'
                : 'border-blue-400/40 bg-blue-600/20 shadow-blue-500/10 hover:bg-blue-600/30'"
              @click="selectedId = 'qutateladze'"
            >
              <div class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{{ content.topRole }}</div>
              <div class="mt-2 text-lg font-black text-white">{{ content.topName }}</div>
            </button>

            <div class="h-8"></div>

            <div class="grid w-full max-w-4xl grid-cols-2 gap-10">
              <div class="flex flex-col items-center">
                <div class="h-8"></div>
                <button
                  type="button"
                  class="w-72 rounded-2xl border px-5 py-4 text-center transition-all"
                  :class="selectedId === 'beridze'
                    ? 'border-blue-300 bg-blue-600/20 shadow-lg shadow-blue-500/15'
                    : 'border-blue-400/30 bg-brand-950/70 hover:border-blue-300/50 hover:bg-brand-900/80'"
                  @click="selectedId = 'beridze'"
                >
                  <div class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{{ content.leftRole }}</div>
                  <div class="mt-2 text-lg font-black text-white">{{ content.leftName }}</div>
                </button>
              </div>

              <div class="flex flex-col items-center">
                <div class="h-8"></div>
                <button
                  type="button"
                  class="w-72 rounded-2xl border px-5 py-4 text-center transition-all"
                  :class="selectedId === 'nozadze'
                    ? 'border-blue-300 bg-blue-600/20 shadow-lg shadow-blue-500/15'
                    : 'border-blue-400/30 bg-brand-950/70 hover:border-blue-300/50 hover:bg-brand-900/80'"
                  @click="selectedId = 'nozadze'"
                >
                  <div class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{{ content.rightRole }}</div>
                  <div class="mt-2 text-lg font-black text-white">{{ content.rightName }}</div>
                </button>
              </div>
            </div>

            <div class="w-full pt-8">
              <div class="mx-auto grid w-full max-w-5xl grid-cols-4 gap-4 justify-items-center">
                <button
                  v-for="member in content.executiveTeam"
                  :key="member.id"
                  type="button"
                  class="w-full max-w-[12rem] rounded-2xl border px-4 py-4 text-center transition-all"
                  :class="member.clickable
                    ? selectedId === member.id
                      ? 'border-blue-300 bg-blue-600/20 shadow-lg shadow-blue-500/15'
                      : 'border-blue-400/25 bg-brand-950/65 hover:border-blue-300/50 hover:bg-brand-900/80'
                    : 'cursor-default border-blue-500/10 bg-brand-950/45'"
                  @click="selectMember(member.id, member.clickable)"
                >
                  <div class="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">{{ member.role }}</div>
                  <div class="mt-2 text-sm font-bold leading-snug text-white">{{ member.name }}</div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-4 lg:hidden">
          <button
            type="button"
            class="rounded-2xl border px-5 py-4 text-left transition-all active:scale-[0.99]"
            :class="selectedId === 'qutateladze'
              ? 'border-blue-300 bg-blue-600/30 shadow-lg shadow-blue-500/20'
              : 'border-blue-400/40 bg-blue-600/20'"
            @click="selectedId = 'qutateladze'"
          >
            <div class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{{ content.topRole }}</div>
            <div class="mt-2 text-lg font-black text-white">{{ content.topName }}</div>
          </button>

          <div class="grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              class="rounded-2xl border px-5 py-4 text-left transition-all active:scale-[0.99]"
              :class="selectedId === 'beridze'
                ? 'border-blue-300 bg-blue-600/20 shadow-lg shadow-blue-500/15'
                : 'border-blue-400/30 bg-brand-950/70'"
              @click="selectedId = 'beridze'"
            >
              <div class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{{ content.leftRole }}</div>
              <div class="mt-2 text-lg font-black text-white">{{ content.leftName }}</div>
            </button>

            <button
              type="button"
              class="rounded-2xl border px-5 py-4 text-left transition-all active:scale-[0.99]"
              :class="selectedId === 'nozadze'
                ? 'border-blue-300 bg-blue-600/20 shadow-lg shadow-blue-500/15'
                : 'border-blue-400/30 bg-brand-950/70'"
              @click="selectedId = 'nozadze'"
            >
              <div class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{{ content.rightRole }}</div>
              <div class="mt-2 text-lg font-black text-white">{{ content.rightName }}</div>
            </button>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <button
              v-for="member in content.executiveTeam"
              :key="member.id"
              type="button"
              class="rounded-2xl border px-5 py-4 text-left transition-all active:scale-[0.99]"
              :class="member.clickable
                ? selectedId === member.id
                  ? 'border-blue-300 bg-blue-600/20 shadow-lg shadow-blue-500/15'
                  : 'border-blue-400/25 bg-brand-950/65'
                : 'cursor-default border-blue-500/10 bg-brand-950/45'"
              @click="selectMember(member.id, member.clickable)"
            >
              <div class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">{{ member.role }}</div>
              <div class="mt-2 text-lg font-black text-white">{{ member.name }}</div>
            </button>
          </div>
        </div>
      </section>

      <!--
      <section class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <button
          v-for="member in content.profiles"
          :key="member.id"
          class="group text-left rounded-xl border p-5 transition-all duration-200 flex items-center gap-4"
          :class="selectedId === member.id
            ? 'bg-blue-600/20 border-blue-400 shadow-lg shadow-blue-500/10'
            : 'bg-brand-900/40 border-blue-500/15 hover:border-blue-400/40 hover:bg-brand-900/60'"
          @click="selectedId = member.id"
        >
          <div
            class="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-lg font-black transition-colors"
            :class="selectedId === member.id ? 'bg-blue-500 text-white' : 'bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/30'"
          >
            {{ member.initials }}
          </div>
          <div class="min-w-0">
            <div class="text-white font-bold text-sm leading-snug">{{ member.name }}</div>
            <div class="text-blue-300 text-xs mt-0.5 leading-snug">{{ member.role }}</div>
          </div>
        </button>
      </section>
      -->

      <section v-if="selectedProfile" class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-6 sm:p-8">
        <div class="flex flex-col md:flex-row gap-6 items-start">
          <div class="shrink-0 w-48 h-60 rounded-xl bg-blue-600/10 border border-blue-500/20 overflow-hidden flex flex-col items-center justify-center gap-3">
            <img
              v-if="selectedPhotoSrc"
              :src="selectedPhotoSrc"
              :alt="selectedProfile.name"
              class="w-full h-full object-cover"
            >
            <template v-else>
              <svg class="w-14 h-14 text-blue-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <span class="text-blue-500/40 text-xs">{{ content.photoLabel }}</span>
            </template>
          </div>

          <div class="flex-1">
            <h2 class="text-3xl font-black text-white mb-1">{{ selectedProfile.name }}</h2>
            <div class="border-l-4 border-blue-400 pl-4 mb-5">
              <p class="text-blue-300 font-semibold text-lg">{{ selectedProfile.role }}</p>
            </div>

            <p class="text-blue-100/90 leading-relaxed mb-6">
              {{ selectedProfile.summary }}
            </p>

            <div class="grid md:grid-cols-2 gap-3">
              <div
                v-for="fact in selectedProfile.facts"
                :key="fact.label"
                class="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20"
              >
                <div class="text-blue-300/70 text-xs font-semibold mb-1 uppercase tracking-wider">{{ fact.label }}</div>
                <div class="text-white text-sm font-medium">{{ fact.value }}</div>
              </div>
            </div>

            <div v-if="selectedDetails.length" class="mt-6 space-y-4">
              <div
                v-for="section in selectedDetails"
                :key="section.title"
                class="rounded-xl border border-blue-500/15 bg-brand-950/45 p-4"
              >
                <h3 class="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">{{ section.title }}</h3>
                <ul v-if="section.items?.length" class="mt-3 space-y-2">
                  <li
                    v-for="item in section.items"
                    :key="item"
                    class="text-sm leading-relaxed text-blue-100/85"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </SectionLayout>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'
import qutateladzePhoto from '../../assets/management-qutateladze.jpeg'
import nozadzePhoto from '../../assets/management-nozadze.JPG'
import lolashviliPhoto from '../../assets/management-lolashvili.JPG'
import jamsapashviliPhoto from '../../assets/management-jamsapashvili.JPG'
import lomidzePhoto from '../../assets/management-lomidze.JPG'

const { locale, t: $t } = useI18n()
const sidebarLinks = getSidebarLinks('about')
const selectedId = ref('qutateladze')

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Management',
      heroSubtitle: 'Leadership structure of JSC Tbilisi Aircraft Manufacturing',
      structureTitle: 'Organizational Structure',
      structureDesc: 'The management hierarchy is presented as a tree-like structure so the reporting lines are clear and easy to follow.',
      topRole: 'General Director',
      topName: 'Mikheil Kutateladze',
      leftRole: 'Executive Director',
      leftName: 'Nodar Beridze',
      rightRole: 'Financial Director',
      rightName: 'Giorgi Nozadze',
      photoLabel: 'Profile',
      executiveTeam: [
        { id: 'lolashvili', role: 'Technical Director', name: 'Albert Lolashvili', clickable: true },
        { id: 'jamsapashvili', role: 'Production Director', name: 'Giorgi Jamaspashvili', clickable: true },
        { id: 'ichqitidze', role: 'Quality Management Director', name: 'Roman Ichqitidze', clickable: true },
        { id: 'lomidze', role: 'Commercial Director', name: 'Otar Lomidze', clickable: true },
      ],
      profiles: [
        {
          id: 'qutateladze',
          initials: 'MK',
          name: 'Mikheil Kutateladze',
          role: 'General Director',
          summary: 'Provides strategic leadership for the enterprise and oversees the company’s long-term development priorities.',
          facts: [
            { label: 'Responsibility', value: 'Overall strategic management' },
            { label: 'Reports', value: 'Executive Director, Financial Director' },
          ],
        },
        {
          id: 'beridze',
          initials: 'NB',
          name: 'Nodar Beridze',
          role: 'Executive Director',
          summary: 'Coordinates day-to-day execution across production, technical, quality and commercial units.',
          facts: [
            { label: 'Responsibility', value: 'Operational execution' },
            { label: 'Supervises', value: 'Technical, Production, Quality and Commercial Directors' },
          ],
        },
        {
          id: 'nozadze',
          initials: 'GN',
          name: 'Giorgi Nozadze',
          role: 'Financial Director',
          summary: 'Leads financial planning, reporting and financial control functions across the company.',
          facts: [
            { label: 'Responsibility', value: 'Finance and reporting' },
            { label: 'Focus', value: 'Budgeting, control, sustainability' },
          ],
        },
        {
          id: 'lolashvili',
          initials: 'AL',
          name: 'Albert Lolashvili',
          role: 'Technical Director',
          summary: 'Oversees technical capability, engineering coordination and maintenance readiness.',
          facts: [
            { label: 'Responsibility', value: 'Technical direction' },
            { label: 'Focus', value: 'Engineering and maintenance systems' },
          ],
        },
        {
          id: 'jamsapashvili',
          initials: 'GJ',
          name: 'Giorgi Jamaspashvili',
          role: 'Production Director',
          summary: 'Manages industrial processes, workshop performance and production delivery.',
          facts: [
            { label: 'Responsibility', value: 'Production operations' },
            { label: 'Focus', value: 'Workshops and output management' },
          ],
        },
        {
          id: 'ichqitidze',
          initials: 'RI',
          name: 'Roman Ichqitidze',
          role: 'Quality Management Director',
          summary: 'Biography is not provided.',
          facts: [
            { label: 'Status', value: 'Biography is not provided' },
          ],
        },
        {
          id: 'lomidze',
          initials: 'OL',
          name: 'Otar Lomidze',
          role: 'Commercial Director',
          summary: 'Leads commercial relations, contracts and business development activities.',
          facts: [
            { label: 'Responsibility', value: 'Commercial strategy' },
            { label: 'Focus', value: 'Contracts and partnerships' },
          ],
        },
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Руководство',
      heroSubtitle: 'Структура руководства JSC Tbilisi Aircraft Manufacturing',
      structureTitle: 'Организационная структура',
      structureDesc: 'Иерархия управления представлена в виде дерева, чтобы структура подчинённости была наглядной и понятной.',
      topRole: 'Генеральный директор',
      topName: 'Михаил Кутателадзе',
      leftRole: 'Исполнительный директор',
      leftName: 'Нодар Беридзе',
      rightRole: 'Финансовый директор',
      rightName: 'Гиорги Нозадзе',
      photoLabel: 'Профиль',
      executiveTeam: [
        { id: 'lolashvili', role: 'Технический директор', name: 'Альберт Лолашвили', clickable: true },
        { id: 'jamsapashvili', role: 'Директор по производству', name: 'Гиорги Джамаспашвили', clickable: true },
        { id: 'ichqitidze', role: 'Директор по управлению качеством', name: 'Роман Ичкитидзе', clickable: true },
        { id: 'lomidze', role: 'Коммерческий директор', name: 'Отар Ломидзе', clickable: true },
      ],
      profiles: [
        {
          id: 'qutateladze',
          initials: 'МК',
          name: 'Михаил Кутателадзе',
          role: 'Генеральный директор',
          summary: 'Осуществляет стратегическое руководство предприятием и определяет долгосрочные направления развития компании.',
          facts: [
            { label: 'Ответственность', value: 'Общее стратегическое управление' },
            { label: 'Подчиняются', value: 'Исполнительный директор, Финансовый директор' },
          ],
        },
        {
          id: 'beridze',
          initials: 'НБ',
          name: 'Нодар Беридзе',
          role: 'Исполнительный директор',
          summary: 'Координирует ежедневное исполнение задач между производственным, техническим, качественным и коммерческим направлениями.',
          facts: [
            { label: 'Ответственность', value: 'Операционное управление' },
            { label: 'Курирует', value: 'Технического, Производственного, Коммерческого и Директора по качеству' },
          ],
        },
        {
          id: 'nozadze',
          initials: 'ГН',
          name: 'Гиорги Нозадзе',
          role: 'Финансовый директор',
          summary: 'Руководит финансовым планированием, отчётностью и финансовым контролем компании.',
          facts: [
            { label: 'Ответственность', value: 'Финансы и отчётность' },
            { label: 'Фокус', value: 'Бюджетирование, контроль, устойчивость' },
          ],
        },
        {
          id: 'lolashvili',
          initials: 'АЛ',
          name: 'Альберт Лолашвили',
          role: 'Технический директор',
          summary: 'Отвечает за технические возможности предприятия, инженерную координацию и готовность к обслуживанию.',
          facts: [
            { label: 'Ответственность', value: 'Техническое руководство' },
            { label: 'Фокус', value: 'Инженерия и системы обслуживания' },
          ],
        },
        {
          id: 'jamsapashvili',
          initials: 'ГД',
          name: 'Гиорги Джамаспашвили',
          role: 'Директор по производству',
          summary: 'Управляет производственными процессами, работой цехов и выпуском продукции.',
          facts: [
            { label: 'Ответственность', value: 'Производственные операции' },
            { label: 'Фокус', value: 'Цеха и управление выпуском' },
          ],
        },
        {
          id: 'ichqitidze',
          initials: 'РИ',
          name: 'Роман Ичкитидзе',
          role: 'Директор по управлению качеством',
          summary: 'Биография не указана.',
          facts: [
            { label: 'Статус', value: 'Биография не указана' },
          ],
        },
        {
          id: 'lomidze',
          initials: 'ОЛ',
          name: 'Отар Ломидзе',
          role: 'Коммерческий директор',
          summary: 'Руководит коммерческими отношениями, контрактами и развитием бизнеса.',
          facts: [
            { label: 'Ответственность', value: 'Коммерческая стратегия' },
            { label: 'Фокус', value: 'Контракты и партнёрства' },
          ],
        },
      ],
    }
  }

  return {
    heroTitle: 'ხელმძღვანელობა',
    heroSubtitle: 'სს თბილავიამშენის ხელმძღვანელობის სტრუქტურა',
    structureTitle: 'ორგანიზაციული სტრუქტურა',
    structureDesc: 'ხელმძღვანელობის იერარქია წარმოდგენილია ხის მსგავსი სტრუქტურით, რათა დაქვემდებარების ხაზი მკაფიო და მარტივად აღსაქმელი იყოს.',
    topRole: 'გენერალური დირექტორი',
    topName: 'მიხეილ ქუთათელაძე',
    leftRole: 'აღმასრულებელი დირექტორი',
    leftName: 'ნოდარ ბერიძე',
    rightRole: 'ფინანსური დირექტორი',
    rightName: 'გიორგი ნოზაძე',
    photoLabel: 'პროფილი',
    executiveTeam: [
      { id: 'lolashvili', role: 'ტექნიკური დირექტორი', name: 'ალბერტ ლოლაშვილი', clickable: true },
      { id: 'jamsapashvili', role: 'წარმოების დირექტორი', name: 'გიორგი ჯამასპაშვილი', clickable: true },
      { id: 'ichqitidze', role: 'ხარისხის მართვის დირექტორი', name: 'რომან იჩქიტიძე', clickable: true },
      { id: 'lomidze', role: 'კომერციული დირექტორი', name: 'ოთარ ლომიძე', clickable: true },
    ],
    profiles: [
      {
        id: 'qutateladze',
        initials: 'მქ',
        name: 'მიხეილ ქუთათელაძე',
        role: 'გენერალური დირექტორი',
        summary: 'მიხეილ ქუთათელაძეს საჯარო სექტორში მუშაობის მრავალწლიანი გამოცდილება გააჩნია. საქართველოს გაერთიანებული წყალმომარაგების კომპანიის დირექტორის მოადგილედ დანიშვნამდე, სხვადასხვა ხელმძღვანელ პოზიციაზე მუშაობდა.',
        facts: [
          { label: 'ბოლო თანამდებობა', value: 'სსიპ სახელმწიფო სამხედრო სამეცნიერო-ტექნიკურ ცენტრ „დელტაში“ დეპარტამენტის უფროსი' },
          { label: 'განათლება', value: 'საქართველოს ტექნიკური უნივერსიტეტი, მშენებელ ინჟინერიის ფაკულტეტი' },
        ],
      },
      {
        id: 'beridze',
        initials: 'ნბ',
        name: 'ნოდარ ბერიძე',
        role: 'აღმასრულებელი დირექტორი',
        summary: 'კოორდინაციას უწევს ყოველდღიურ ოპერაციულ პროცესებს ტექნიკურ, საწარმოო, ხარისხისა და კომერციულ მიმართულებებს შორის.',
        facts: [
          { label: 'პასუხისმგებლობა', value: 'ოპერაციული მართვა' },
          { label: 'კურირებს', value: 'ტექნიკურ, საწარმოო, ხარისხისა და კომერციულ დირექტორებს' },
        ],
      },
      {
        id: 'nozadze',
        initials: 'გნ',
        name: 'გიორგი ნოზაძე',
        role: 'ფინანსური დირექტორი',
        summary: 'ხელმძღვანელობს ფინანსურ დაგეგმვას, ანგარიშგებასა და კომპანიის ფინანსურ კონტროლს.',
        facts: [
          { label: 'პასუხისმგებლობა', value: 'ფინანსები და ანგარიშგება' },
          { label: 'ფოკუსი', value: 'ბიუჯეტირება, კონტროლი, მდგრადობა' },
        ],
      },
      {
        id: 'lolashvili',
        initials: 'ალ',
        name: 'ალბერტ ლოლაშვილი',
        role: 'ტექნიკური დირექტორი',
        summary: 'პასუხისმგებელია საწარმოს ტექნიკურ შესაძლებლობებზე, საინჟინრო კოორდინაციასა და ტექნიკურ მზადყოფნაზე.',
        facts: [
          { label: 'პასუხისმგებლობა', value: 'ტექნიკური მიმართულება' },
          { label: 'ფოკუსი', value: 'საინჟინრო და ტექნიკური სისტემები' },
        ],
      },
      {
        id: 'jamsapashvili',
        initials: 'გჯ',
        name: 'გიორგი ჯამასპაშვილი',
        role: 'წარმოების დირექტორი',
        summary: 'მართავს საწარმოო პროცესებს, საამქროების მუშაობასა და პროდუქციის მიწოდების მიმდინარეობას.',
        facts: [
          { label: 'პასუხისმგებლობა', value: 'საწარმოო ოპერაციები' },
          { label: 'ფოკუსი', value: 'საამქროები და გამოშვების მართვა' },
        ],
      },
      {
        id: 'ichqitidze',
        initials: 'რი',
        name: 'რომან იჩქიტიძე',
        role: 'ხარისხის მართვის დირექტორი',
        summary: 'ბიოგრაფია არ არის მოცემული.',
        facts: [
          { label: 'სტატუსი', value: 'ბიოგრაფია არ არის მოცემული' },
        ],
      },
      {
        id: 'lomidze',
        initials: 'ოლ',
        name: 'ოთარ ლომიძე',
        role: 'კომერციული დირექტორი',
        summary: 'ხელმძღვანელობს კომერციულ ურთიერთობებს, კონტრაქტებსა და ბიზნესის განვითარების პროცესს.',
        facts: [
          { label: 'პასუხისმგებლობა', value: 'კომერციული სტრატეგია' },
          { label: 'ფოკუსი', value: 'კონტრაქტები და პარტნიორობა' },
        ],
      },
    ],
  }
})

const selectedProfile = computed(() => {
  return content.value.profiles.find((member) => member.id === selectedId.value) ?? content.value.profiles[0]
})

const photoById = {
  qutateladze: qutateladzePhoto,
  nozadze: nozadzePhoto,
  lolashvili: lolashviliPhoto,
  jamsapashvili: jamsapashviliPhoto,
  lomidze: lomidzePhoto,
}

const selectedPhotoSrc = computed(() => photoById[selectedId.value] ?? '')

const detailsByLocale = computed(() => {
  if (locale.value !== 'ka') return {}

  return {
    qutateladze: [
      {
        title: 'ბიოგრაფია',
        items: [
          'მიხეილ ქუთათელაძეს საჯარო სექტორში მუშაობის მრავალწლიანი გამოცდილება გააჩნია.',
          'საქართველოს გაერთიანებული წყალმომარაგების კომპანიიდან წამოსვლის შემდეგ დღემდე მიხეილ ქუთათელაძე სს „თბილავიამშენის“ გენერალური დირექტორის პოზიციას იკავებს.',
          'საქართველოს გაერთიანებული წყალმომარაგების კომპანიის დირექტორის მოადგილედ დანიშვნამდე, 2020 წლიდან სსიპ სახელმწიფო სამხედრო სამეცნიერო-ტექნიკურ ცენტრ „დელტაში“ იყო უტილიზაციისა და სპეცმომსახურების დეპარტამენტის უფროსი, მანამდე კი დემილიტარიზაციის, უტილიზაციისა და ჰუმანიტარული განაღმვის ოპერაციების მართვის დეპარტამენტის უფროსი.',
        ],
      },
      {
        title: 'სამუშაო გამოცდილება',
        items: [
          'საქართველოს გაერთიანებული წყალმომარაგების კომპანიაში დირექტორის მრჩეველი (2017 - 2020)',
          'საქართველოს გაერთიანებული წყალმომარაგების კომპანიაში შემოსავლების სამსახურის უფროსი (2015 - 2016)',
          'საქართველოს ტექნიკური უნივერსიტეტის მთავარი ენერგეტიკი (2010 - 2011)',
          'თბილისის მერიის ზედამხედველობის სამსახურის მთავარი სპეციალისტი (2009 - 2010)',
          'ფინანსთა სამინისტროს საბაჟო დეპარტამენტში ცვლის უფროსი (1992 - 2007)',
          'საქართველოს ეკონომიკის სამინისტროს ინჟინერ-ტექნოლოგი (1991 - 1992)',
          'თბილისის საგალენტერიო-სატრიკოტაჟო გაერთიანებაში მშენებელ-ინჟინერი (1990 წლიდან)',
        ],
      },
      {
        title: 'განათლება',
        items: [
          'საქართველოს ტექნიკური უნივერსიტეტი, ინჟინერის სპეციალობა',
          'თბილისის საერო ინსტიტუტი „გაენათი“, საგარეო ეკონომიკური ურთიერთობების მიმართულება',
        ],
      },
      {
        title: 'დამატებითი ინფორმაცია',
        items: [
          'დაბადების თარიღი: 1965 წლის 30 აგვისტო',
        ],
      },
    ],
    beridze: [
      {
        title: 'სამუშაო გამოცდილება',
        items: [
          'სს „თამ“ თბილავიამშენი: აღმასრულებელი დირექტორი (2025 - დღემდე)',
          'კომერციული დირექტორი (2022 - 2025)',
          'გენერალური დირექტორის მრჩეველი (2019 - 2022)',
          'გენერალური დირექტორი (2002 - 2019)',
          'გენერალური დირექტორის პირველი მოადგილე (1998 - 2002)',
          'წარმოების უფროსის მოადგილე, Як-58 მიმართულება (1992 - 1998)',
          'საამწყობო საამქროს უფროსი (1988 - 1992)',
          'საამწყობო საამქროს უფროსის მოადგილე (1986 - 1988)',
          'ოსტატი (1983 - 1986)',
        ],
      },
      {
        title: 'განათლება',
        items: [
          'საქართველოს პოლიტექნიკური ინსტიტუტი, თვითმფრინავთმშენებლობის ფაკულტეტი, ინჟინერ-მექანიკოსი (1978 - 1983)',
        ],
      },
      {
        title: 'ჯილდოები',
        items: [
          'ღირსების ორდენი (2002)',
          'ღირსების მედალი (1999)',
        ],
      },
      {
        title: 'დამატებითი ინფორმაცია',
        items: [
          'სამხედრო სამსახური: 1975 - 1977',
          'ენები: ქართული, რუსული, ინგლისური',
        ],
      },
    ],
    nozadze: [
      {
        title: 'განათლება',
        items: [
          'თავისუფალი უნივერსიტეტი, ფინანსების სამაგისტრო პროგრამა (2021 - 2023)',
          'ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი, ეკონომიკისა და ბიზნესის ფაკულტეტი (2009 - 2013)',
        ],
      },
      {
        title: 'სამუშაო გამოცდილება',
        items: [
          'სს „თამ“ თბილავიამშენი: ფინანსური დირექტორი (2025 - დღემდე)',
          'ფინანსური დირექტორის მოადგილე (2022 - 2025)',
          'ფინანსური დეპარტამენტის უფროსი (2021 - 2022)',
          'ფინანსების სპეციალისტი (2020 - 2021)',
          'სსსტც „დელტა“: მთავარი აუდიტორი (2020 - 2022)',
          'სსსტც „დელტა“: უფროსი აუდიტორი (06/2020 - 08/2020)',
          'სს ტერაბანკი: მიკრო ბიზნესის ჯგუფის უფროსი (2018 - 2020)',
          'სს ტერაბანკი: ბიზნეს სესხების ექსპერტი (2017 - 2018)',
          'სს პროკრედიტ ბანკი: ბიზნეს კლიენტების მრჩეველი (2013 - 2017)',
          'სს თიბისი ბანკი: ოპერაციების მენეჯერი (2012)',
          'სს თიბისი ბანკი: სწრაფი საკრედიტო პროდუქტების რისკ მენეჯერი (2012 - 2013)',
        ],
      },
      {
        title: 'ენები',
        items: [
          'ქართული',
          'ინგლისური',
          'რუსული',
        ],
      },
    ],
    lolashvili: [
      {
        title: 'სპეციალობა',
        items: [
          'ინჟინერ-მექანიკოსი',
        ],
      },
      {
        title: 'სამუშაო გამოცდილება',
        items: [
          'სს „თამ“ თბილავიამშენი: ტექნიკური დირექტორი (2025 - დღემდე)',
          'ტექნიკური დირექტორის მოადგილე - მთავარი ინჟინერი (2023 - 2025)',
          'მთავარი ინჟინერი (2013 - 2023)',
          'ტექნიკური დირექტორის მოადგილე (2006 - 2013)',
          'მთავარი ინჟინრის მოადგილე - საკონსტრუქტორო სამმართველოს უფროსი (2000 - 2006)',
          'მთავარი ინჟინრის მოადგილე - მთავარი კონსტრუქტორი (2000)',
          'მთავარი ინჟინრის მოადგილე ტექნოლოგიურ და საკონსტრუქტორო საკითხებში (1999 - 2000)',
          'თვითმფრინავის საამწყობო საწარმოს დირექტორი (1998 - 1999)',
          'მთავარი სპეციალისტი მცირე ავიაციის დარგში (1991 - 1998)',
          'წარმოების უფროსი 31-ე განყოფილებაში (1988 - 1991)',
          'წარმოების უფროსის მოადგილე 31-ე განყოფილებაში (1984 - 1988)',
          'მე-5 საამქროს უფროსის მოადგილე T8 ნაკეთობაზე (1979 - 1984)',
          'მე-20 საამქროს უფროსის I მოადგილე (1975 - 1979)',
          'ინჟინერ-ტექნოლოგი მე-20 საამქროში (1974 - 1975)',
        ],
      },
      {
        title: 'ენები',
        items: [
          'ქართული',
          'ინგლისური',
          'რუსული',
        ],
      },
    ],
    jamsapashvili: [
      {
        title: 'პერსონალური ინფორმაცია',
        items: [
          'დაბადების თარიღი: 24 ნოემბერი 1958',
        ],
      },
      {
        title: 'განათლება',
        items: [
          'საქართველოს პოლიტექნიკური ინსტიტუტი - ინჟინერ-მექანიკოსი (დამთავრება: 1983)',
        ],
      },
      {
        title: 'სამუშაო გამოცდილება',
        items: [
          'სს „თამ“ თბილავიამშენი: წარმოების დირექტორი (2025 - დღემდე)',
          'საწარმოო პროცესების მართვის საკითხებში გენერალური დირექტორის წარმომადგენელი (2024 - 2025)',
          'პროექტის კოორდინატორი (აგვისტო 2024 - ნოემბერი 2024)',
          'პროექტის მენეჯერი (2023 - 2024)',
          'გენერალური დირექტორის მრჩეველი (2020 - 2023)',
          'საზოგადოების წარმოების დირექტორი (2017 - 2020)',
          'გენერალური დირექტორის მოადგილე, საამწყობო-სარემონტო და საფრენ-საგამოცდო საწარმოს უფროსი (2016 - 2017)',
          'საზოგადოების პროექტების მენეჯერი (2013 - 2016)',
          'საწარმოს დირექტორი (2009 - 2012)',
          '585-ე საწარმოს დირექტორი (2005 - 2009)',
          '586-ე საწარმოს დირექტორი (1999 - 2005)',
          'ინჟინერ-ტექნოლოგი (1983 - 1999)',
        ],
      },
      {
        title: 'ენები',
        items: [
          'ქართული',
          'რუსული',
        ],
      },
    ],
    lomidze: [
      {
        title: 'პირადი ინფორმაცია',
        items: [
          'დაბადების თარიღი: 14/06/1998',
        ],
      },
      {
        title: 'სამუშაო გამოცდილება',
        items: [
          'სს „თამ“ თბილავიამშენი: კომერციული დირექტორი (2025 - დღემდე)',
          'კომერციული დირექტორის მოადგილე (2023 - 2025)',
          'კომერციული დეპარტამენტის უფროსი (აგვისტო 2023 - ნოემბერი 2023)',
          'გაყიდვების სამსახურის უფროსი (2022 - 2023)',
          'კონტრაქტების მენეჯერი (2020 - 2022)',
          'სსიპ სახელმწიფო სამხედრო სამეცნიერო ტექნიკური ცენტრი „დელტა“: იურისტი (2021)',
          'შპს „დელტა ინტერნეშენალი“: იურისტი (2020 - 2021)',
          'საადვოკატო კომპანია BGL: სტაჟიორი (2019)',
        ],
      },
      {
        title: 'განათლება',
        items: [
          'ილიას სახელმწიფო უნივერსიტეტი - ბიზნეს სამართლის მაგისტრი (2024)',
          'ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი - სამართლის ბაკალავრი (2016 - 2020)',
          'ვ. კომაროვის სახელობის ფიზიკა-მათემატიკის სკოლა',
        ],
      },
      {
        title: 'ენები',
        items: [
          'ქართული',
          'ინგლისური',
          'რუსული',
        ],
      },
    ],
  }
})

const selectedDetails = computed(() => detailsByLocale.value[selectedId.value] ?? [])

function selectMember(memberId, clickable) {
  if (!clickable) return
  selectedId.value = memberId
}
</script>
