<template>
  <div class="bg-brand-950 min-h-screen">
    <PageHero :title="content.heroTitle" :subtitle="content.heroSubtitle" />

    <div class="max-w-7xl mx-auto px-6 pb-20 -mt-10 relative z-10 space-y-8">
      <div class="overflow-hidden rounded-xl border border-blue-500/15 bg-brand-900/40 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.1232157167055!2d44.87504687666461!3d41.66840007924171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440fffe8b30641%3A0xc717db8471e67396!2sJSC%20%22TAM%22%20Tbilisi%20Aircraft%20Manufacturing!5e0!3m2!1sen!2sge!4v1770000000000"
          class="h-96 w-full"
          style="border:0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
          <div class="border-l-4 border-blue-400 pl-6 mb-6">
            <h3 class="text-2xl font-bold text-white">{{ content.contactTitle }}</h3>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div
              v-for="item in content.contactItems"
              :key="item.label"
              class="rounded-2xl border border-blue-500/15 bg-white/5 p-5"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/60">{{ item.label }}</p>
              <p class="mt-3 text-sm leading-relaxed text-white">{{ item.value }}</p>
            </div>
          </div>
        </div>

        <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
          <div class="border-l-4 border-blue-400 pl-6 mb-6">
            <h3 class="text-2xl font-bold text-white">{{ content.quickLinksTitle }}</h3>
          </div>

          <div class="grid gap-3">
            <a
              href="tel:+995322700057"
              class="rounded-xl bg-white/5 px-4 py-4 text-sm text-blue-200/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {{ content.phoneLink }}
            </a>
            <a
              href="mailto:info@tam.ge"
              class="rounded-xl bg-white/5 px-4 py-4 text-sm text-blue-200/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {{ content.emailLink }}
            </a>
            <a
              href="https://www.google.com/maps/place/JSC+%22TAM%22+Tbilisi+Aircraft+Manufacturing/@41.6682696,44.8773733,19.6z/data=!4m6!3m5!1s0x40440fffe8b30641:0xc717db8471e67396!8m2!3d41.6683942!4d44.8776208!16s%2Fg%2F11fw4qdhq2?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              class="rounded-xl bg-white/5 px-4 py-4 text-sm text-blue-200/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {{ content.mapLink }}
            </a>
          </div>

          <div class="mt-6 rounded-2xl border border-blue-500/15 bg-white/5 p-5 text-sm leading-relaxed text-blue-200/80">
            {{ content.note }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageHero from '../../components/PageHero.vue'

const { locale } = useI18n()

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Contact Us',
      heroSubtitle: 'Address, map, and direct contact details',
      contactTitle: 'Contact Information',
      quickLinksTitle: 'Quick Links',
      phoneLink: 'Phone: +995 32 270 00 57',
      emailLink: 'Email: info@tam.ge',
      mapLink: 'Open in Google Maps',
      note: 'For direct inquiries, please use the listed phone number, email, or map link.',
      contactItems: [
        { label: 'Address', value: '191 Beri Gabriel Salosi Avenue, Tbilisi, Georgia' },
        { label: 'Postal Code', value: '0144' },
        { label: 'Phone', value: '+995 32 270 00 57' },
        { label: 'Info Email', value: 'info@tam.ge' },
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Контакты',
      heroSubtitle: 'Адрес, карта и контактные данные',
      contactTitle: 'Контактная информация',
      quickLinksTitle: 'Быстрые ссылки',
      phoneLink: 'Телефон: +995 32 270 00 57',
      emailLink: 'Эл. почта: info@tam.ge',
      mapLink: 'Открыть в Google Maps',
      note: 'Для прямой связи используйте указанный телефон, email или ссылку на карту.',
      contactItems: [
        { label: 'Адрес', value: 'проспект Бери Габриэла Салоси 191, Тбилиси, Грузия' },
        { label: 'Почтовый индекс', value: '0144' },
        { label: 'Телефон', value: '+995 32 270 00 57' },
        { label: 'Инфо email', value: 'info@tam.ge' },
      ],
    }
  }

  return {
    heroTitle: 'კონტაქტი',
    heroSubtitle: 'მისამართი, რუკა და საკონტაქტო ინფორმაცია',
    contactTitle: 'საკონტაქტო ინფორმაცია',
    quickLinksTitle: 'სწრაფი ბმულები',
    phoneLink: 'ტელეფონი: +995 32 270 00 57',
    emailLink: 'ელფოსტა: info@tam.ge',
    mapLink: 'გახსნა Google Maps-ში',
    note: 'დასაკავშირებლად გამოიყენეთ მითითებული ტელეფონი, ელფოსტა ან რუკის ბმული.',
    contactItems: [
      { label: 'მისამართი', value: 'ბერი გაბრიელ სალოსის გამზირი 191, თბილისი, საქართველო' },
      { label: 'საფოსტო ინდექსი', value: '0144' },
      { label: 'ტელეფონი', value: '+995 32 270 00 57' },
      { label: 'ინფოს მეილი', value: 'info@tam.ge' },
    ],
  }
})
</script>
