<template>
  <SectionLayout
    :heroTitle="content.heroTitle"
    :heroSubtitle="content.heroSubtitle"
    :sidebarTitle="content.sidebarTitle"
    :sidebarLinks="sidebarLinks"
  >
    <div class="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
      <form
        class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8"
        @submit.prevent="submitApplication"
      >
        <div class="border-l-4 border-blue-400 pl-6 mb-8">
          <h3 class="text-2xl font-bold text-white">{{ content.formTitle }}</h3>
          <p class="mt-2 text-blue-200/80">{{ content.formDesc }}</p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-blue-300/80">{{ content.labels.firstName }}</span>
            <input v-model.trim="form.firstName" type="text" autocomplete="given-name" class="w-full rounded-lg border border-blue-500/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-400" />
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-blue-300/80">{{ content.labels.lastName }}</span>
            <input v-model.trim="form.lastName" type="text" autocomplete="family-name" class="w-full rounded-lg border border-blue-500/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-400" />
          </label>
          <label class="block sm:col-span-2">
            <span class="mb-2 block text-sm font-medium text-blue-300/80">{{ content.labels.email }}</span>
            <input v-model.trim="form.email" type="email" inputmode="email" autocomplete="email" class="w-full rounded-lg border border-blue-500/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-400" />
          </label>
          <label class="block sm:col-span-2">
            <span class="mb-2 block text-sm font-medium text-blue-300/80">{{ content.labels.phone }}</span>
            <input v-model.trim="form.phone" type="tel" inputmode="tel" autocomplete="tel" class="w-full rounded-lg border border-blue-500/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-400" />
          </label>
          <label class="block sm:col-span-2">
            <span class="mb-2 block text-sm font-medium text-blue-300/80">{{ content.labels.role }}</span>
            <input v-model.trim="form.role" type="text" class="w-full rounded-lg border border-blue-500/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-400" />
          </label>
          <label class="block sm:col-span-2">
            <span class="mb-2 block text-sm font-medium text-blue-300/80">{{ content.labels.subject }}</span>
            <input v-model.trim="form.subject" type="text" class="w-full rounded-lg border border-blue-500/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-400" />
          </label>
        </div>

        <label class="mt-5 block">
          <span class="mb-2 block text-sm font-medium text-blue-300/80">{{ content.labels.message }}</span>
          <textarea v-model.trim="form.message" rows="6" class="w-full resize-none rounded-lg border border-blue-500/20 bg-white/5 px-4 py-3 text-white outline-none focus:border-blue-400"></textarea>
        </label>

        <div class="mt-5 grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-blue-300/80">{{ content.labels.cv }}</span>
            <input type="file" accept=".pdf,.doc,.docx" class="w-full rounded-lg border border-blue-500/20 bg-white/5 px-4 py-3 text-sm text-blue-100 file:mr-4 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white" @change="updateFileName('cv', $event)" />
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-blue-300/80">{{ content.labels.motivation }}</span>
            <input type="file" accept=".pdf,.doc,.docx" class="w-full rounded-lg border border-blue-500/20 bg-white/5 px-4 py-3 text-sm text-blue-100 file:mr-4 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white" @change="updateFileName('motivation', $event)" />
          </label>
        </div>

        <button
          type="submit"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
        >
          {{ content.submit }}
        </button>
      </form>

      <div class="space-y-6">
        <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
          <div class="border-l-4 border-blue-400 pl-6 mb-6">
            <h3 class="text-2xl font-bold text-white">{{ content.checklistTitle }}</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="item in content.checklist" :key="item" class="flex items-start gap-3 text-sm text-blue-200/80">
              <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
          <div class="border-l-4 border-blue-400 pl-6 mb-6">
            <h3 class="text-2xl font-bold text-white">{{ content.directionsTitle }}</h3>
          </div>
          <div class="grid gap-3">
            <div v-for="item in content.directions" :key="item" class="rounded-xl bg-white/5 px-4 py-3 text-sm text-blue-200/80">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('careers')
const { locale } = useI18n()

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Join Us',
      heroSubtitle: 'Leave your CV and application details',
      sidebarTitle: 'Careers',
      formTitle: 'Leave Your CV',
      formDesc: 'Fill in the form, attach your CV, optionally add a motivation letter, and specify your preferred direction.',
      checklistTitle: 'What to Include',
      directionsTitle: 'Popular Directions',
      checklist: ['Personal details and contact information', 'Preferred position or professional direction', 'CV (PDF / DOC / DOCX)', 'Optional motivation letter'],
      directions: ['Aircraft maintenance', 'Avionics and radio-electronic systems', 'Engineering and technical support', 'Training programs'],
      labels: {
        firstName: 'First Name', lastName: 'Last Name', email: 'Contact Email', phone: 'Phone',
        role: 'Preferred position / direction', subject: 'Subject', message: 'Additional information',
        cv: 'Upload CV', motivation: 'Motivation Letter',
      },
      submit: 'Send via Email',
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Присоединяйтесь',
      heroSubtitle: 'Оставьте CV и данные заявки',
      sidebarTitle: 'Карьера',
      formTitle: 'Оставьте своё CV',
      formDesc: 'Заполните форму, приложите CV, при желании добавьте мотивационное письмо и укажите интересующее направление.',
      checklistTitle: 'Что указать',
      directionsTitle: 'Популярные направления',
      checklist: ['Личные данные и контакты', 'Желаемая позиция или направление', 'CV (PDF / DOC / DOCX)', 'Мотивационное письмо по желанию'],
      directions: ['Техническое обслуживание ЛА', 'Авионика и радиоэлектронные системы', 'Инженерия и техническая поддержка', 'Обучающие программы'],
      labels: {
        firstName: 'Имя', lastName: 'Фамилия', email: 'Контактный email', phone: 'Телефон',
        role: 'Желаемая позиция / направление', subject: 'Тема', message: 'Дополнительная информация',
        cv: 'Загрузить CV', motivation: 'Мотивационное письмо',
      },
      submit: 'Отправить по email',
    }
  }
  return {
    heroTitle: 'შემოგვიერთდი',
    heroSubtitle: 'დაგვიტოვე CV და განაცხადის ინფორმაცია',
    sidebarTitle: 'კარიერა',
    formTitle: 'დაგვიტოვე სივი',
    formDesc: 'შეავსეთ ანკეტა, ატვირთეთ CV, სურვილის შემთხვევაში დაურთეთ სამოტივაციო წერილი და მიუთითეთ სასურველი მიმართულება.',
    checklistTitle: 'რა მიუთითოთ',
    directionsTitle: 'პოპულარული მიმართულებები',
    checklist: ['პირადი ინფორმაცია და საკონტაქტო მონაცემები', 'სასურველი პოზიცია ან პროფესიული მიმართულება', 'CV (PDF / DOC / DOCX)', 'სურვილის შემთხვევაში სამოტივაციო წერილი'],
    directions: ['საფრენი აპარატების ტექნიკური მომსახურება', 'ავიონიკა და რადიოელექტრონული სისტემები', 'ინჟინერია და ტექნიკური მხარდაჭერა', 'სასწავლო და ტრენინგ პროგრამები'],
    labels: {
      firstName: 'სახელი', lastName: 'გვარი', email: 'საკონტაქტო მეილი', phone: 'ტელეფონი',
      role: 'სასურველი პოზიცია / მიმართულება', subject: 'Subject', message: 'რას გვთავაზობთ / რა გაინტერესებთ',
      cv: 'CV ატვირთვა', motivation: 'სამოტივაციო წერილი',
    },
    submit: 'გაგზავნა ელფოსტით',
  }
})

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  role: '',
  subject: '',
  message: '',
  cvFile: '',
  motivationFile: '',
})

function updateFileName(type, event) {
  const file = event.target.files?.[0]
  if (type === 'cv') form.cvFile = file?.name || ''
  if (type === 'motivation') form.motivationFile = file?.name || ''
}

function submitApplication() {
  const subject = encodeURIComponent(form.subject || `Career Application${form.role ? ` - ${form.role}` : ''}`)
  const body = encodeURIComponent(
    [
      `${content.value.labels.firstName}: ${form.firstName}`,
      `${content.value.labels.lastName}: ${form.lastName}`,
      `${content.value.labels.email}: ${form.email}`,
      `${content.value.labels.phone}: ${form.phone}`,
      `${content.value.labels.role}: ${form.role}`,
      `CV: ${form.cvFile || '-'}`,
      `${content.value.labels.motivation}: ${form.motivationFile || '-'}`,
      '',
      `${content.value.labels.message}:`,
      form.message,
      '',
      'Please attach the selected files manually before sending.',
    ].join('\n')
  )

  window.location.href = `mailto:info@tam.ge?subject=${subject}&body=${body}`
}
</script>
