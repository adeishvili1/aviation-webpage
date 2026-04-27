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
          <h3 class="text-2xl font-bold text-white">{{ content.labsTitle }}</h3>
          <p class="text-blue-200/80 mt-2 leading-relaxed">{{ content.labsIntro }}</p>
        </div>

        <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          <div v-for="image in laboratoryImages" :key="image.src" class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img :src="image.src" :alt="image.alt" class="w-full h-48 object-cover" />
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div v-for="lab in content.laboratoryItems" :key="lab" class="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/15">
            <span class="w-2 h-2 bg-blue-400 rounded-full shrink-0"></span>
            <span class="text-blue-100/90 text-sm">{{ lab }}</span>
          </div>
        </div>
      </section>

      <section v-for="section in content.sections" :key="section.title" class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
        <div class="border-l-4 border-blue-400 pl-6 mb-6">
          <h3 class="text-2xl font-bold text-white">{{ section.title }}</h3>
          <p v-if="section.subtitle" class="text-blue-200/80 mt-2 leading-relaxed">{{ section.subtitle }}</p>
        </div>

        <div v-if="section.images?.length" class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <div v-for="image in section.images" :key="image.src" class="rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <img :src="image.src" :alt="image.alt" class="w-full h-52 object-cover" />
          </div>
        </div>

        <div v-if="section.text" class="p-6 bg-blue-500/10 rounded-xl border border-blue-500/15">
          <p class="text-blue-100/90 leading-relaxed">{{ section.text }}</p>
        </div>

        <div v-if="section.items?.length" class="grid md:grid-cols-2 gap-3 mt-6">
          <div v-for="item in section.items" :key="item" class="flex items-start gap-3 rounded-xl border border-blue-500/15 bg-white/5 p-4 text-blue-100/90">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400"></span>
            <span>{{ item }}</span>
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

const laboratoryImages = [
  { src: new URL('../../assets/t.png', import.meta.url).href, alt: 'Laboratory' },
  { src: new URL('../../assets/t1.png', import.meta.url).href, alt: 'Technical laboratory' },
  { src: new URL('../../assets/t2.png', import.meta.url).href, alt: 'Laboratory testing' },
  { src: new URL('../../assets/t4.png', import.meta.url).href, alt: 'Systems testing' },
  { src: new URL('../../assets/t5.jpg', import.meta.url).href, alt: 'Radio-electronic systems' },
  { src: new URL('../../assets/t6.png', import.meta.url).href, alt: 'Navigation systems' },
  { src: new URL('../../assets/t7.png', import.meta.url).href, alt: 'Aggregate testing' },
]

const sectionImages = {
  flight: [
    { src: new URL('../../assets/m.png', import.meta.url).href, alt: 'Flight test territory' },
    { src: new URL('../../assets/m1.jpg', import.meta.url).href, alt: 'Aerodrome infrastructure' },
    { src: new URL('../../assets/m2.jpg', import.meta.url).href, alt: 'Ground checks' },
    { src: new URL('../../assets/m4.jpg', import.meta.url).href, alt: 'Test flights' },
  ],
  transmission: [
    { src: new URL('../../assets/m5.jpg', import.meta.url).href, alt: 'Transmission stand' },
    { src: new URL('../../assets/m6.png', import.meta.url).href, alt: 'Transmission test' },
  ],
  paintRemoval: [
    { src: new URL('../../assets/m7.png', import.meta.url).href, alt: 'Paint removal hangar' },
    { src: new URL('../../assets/m8.png', import.meta.url).href, alt: 'Paint removal process' },
  ],
  paint: [
    { src: new URL('../../assets/m9.png', import.meta.url).href, alt: 'Paint hangar' },
    { src: new URL('../../assets/m10.png', import.meta.url).href, alt: 'Painting works' },
    { src: new URL('../../assets/m11.png', import.meta.url).href, alt: 'Aircraft painting' },
  ],
}

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      heroTitle: 'Technical Capabilities',
      heroSubtitle: 'Laboratories, stands and flight-test infrastructure',
      labsTitle: 'Laboratories',
      labsIntro: 'The plant operates unique laboratories for inspection and repair of aircraft aggregates and systems.',
      laboratoryItems: [
        'Fuel system aggregates',
        'Hydraulic system aggregates',
        'Pneumatic system aggregates',
        'Weapon and fire-control systems',
        'Engines and control systems',
        'Radio-electronic systems',
        'Navigation systems',
      ],
      sections: [
        { title: 'AI-9V APU Stand', text: 'Designed for functional checking, parameter control and testing of the AI-9V auxiliary power unit in different operating regimes.' },
        { title: 'Flight Test Infrastructure', subtitle: 'JSC TAM flight-test territory', images: sectionImages.flight, text: 'After overhaul and technical maintenance, aircraft move to the company aerodrome for ground checks and test flights.', items: ['Runway length: 1,800 meters.', 'Total area: 170 hectares.', 'Infrastructure includes specialized hangars, GSE and technical systems for inspection and testing.'] },
        { title: 'Transmission Test Stand', images: sectionImages.transmission, items: ['Helicopter transmission testing for Mi-8, Mi-17, Mi-171, Mi-172, Mi-24 and Mi-35.', 'Simulation of transmission operation in different modes.', 'Testing of all generators.', 'Testing under flight-equivalent loads.'] },
        { title: 'Landing Gear Test Stand', text: 'The stand performs functional and load testing of landing gear, including mechanical strength, shock absorption efficiency and reliability in operating regimes.' },
        { title: 'Damper Stand', text: 'A test device for damper performance, durability and effectiveness under different loads and operating conditions.' },
        { title: 'Magnetic and Non-Destructive Testing', text: 'Diagnostic methods such as magnetic particle, ultrasonic and radiographic testing are used to detect cracks, internal defects, corrosion and structural damage without disassembly.' },
        { title: 'Paint Removal Hangar', images: sectionImages.paintRemoval },
        { title: 'Paint Hangar', images: sectionImages.paint },
      ],
    }
  }
  if (locale.value === 'ru') {
    return {
      heroTitle: 'Технические возможности',
      heroSubtitle: 'Лаборатории, стенды и инфраструктура лётных испытаний',
      labsTitle: 'Лаборатории',
      labsIntro: 'На предприятии действуют уникальные лаборатории для проверки и ремонта агрегатов и систем летательных аппаратов.',
      laboratoryItems: [
        'Агрегаты топливной системы',
        'Агрегаты гидравлической системы',
        'Агрегаты пневматической системы',
        'Системы вооружения и управления огнём',
        'Двигатели и системы управления',
        'Радиоэлектронные системы',
        'Навигационные системы',
      ],
      sections: [
        { title: 'Стенд APU AI-9V', text: 'Предназначен для функциональной проверки, контроля параметров и испытаний вспомогательной силовой установки AI-9V в различных режимах работы.' },
        { title: 'Инфраструктура лётных испытаний', subtitle: 'Лётно-испытательная территория JSC TAM', images: sectionImages.flight, text: 'После капитального ремонта и технического обслуживания летательные аппараты переходят на аэродром компании для наземных проверок и испытательных полётов.', items: ['Длина ВПП: 1 800 метров.', 'Общая площадь: 170 гектаров.', 'Инфраструктура включает специализированные ангары, GSE и технические системы для инспекции и испытаний.'] },
        { title: 'Стенд испытания трансмиссии', images: sectionImages.transmission, items: ['Испытания трансмиссии вертолётов Mi-8, Mi-17, Mi-171, Mi-172, Mi-24 и Mi-35.', 'Имитация работы трансмиссии в различных режимах.', 'Испытания всех генераторов.', 'Испытания при нагрузках, аналогичных полётным.'] },
        { title: 'Стенд испытания шасси', text: 'На стенде проводятся функциональные и нагрузочные испытания шасси, включая механическую прочность, эффективность амортизации и надёжность в рабочих режимах.' },
        { title: 'Стенд демпфера', text: 'Устройство для испытания работы, прочности и эффективности демпфера при различных нагрузках и режимах.' },
        { title: 'Магнитный и неразрушающий контроль', text: 'Методы магнитопорошкового, ультразвукового, рентгеновского и другого контроля позволяют выявлять трещины, внутренние дефекты и коррозию без разборки.' },
        { title: 'Ангар удаления краски', images: sectionImages.paintRemoval },
        { title: 'Покрасочный ангар', images: sectionImages.paint },
      ],
    }
  }
  return {
    heroTitle: 'ტექნიკური შესაძლებლობები',
    heroSubtitle: 'ლაბორატორიები, სტენდები და საფრენი ინფრასტრუქტურა',
    labsTitle: 'ლაბორატორიები',
    labsIntro: 'თბილავიამშენში მოქმედებს უნიკალური ლაბორატორიები, სადაც ხდება საფრენი აპარატების აგრეგატების და სისტემების შემოწმება და რემონტი.',
    laboratoryItems: [
      'საწვავის სისტემის აგრეგატები',
      'ჰიდრავლიკური სისტემის აგრეგატები',
      'პნევმატური სისტემის აგრეგატები',
      'შეიარაღებისა და ცეცხლის მართვის სისტემები',
      'ძრავები და მართვის სისტემები',
      'რადიოელექტრონული სისტემები',
      'ნავიგაციის სისტემები',
    ],
    sections: [
      { title: 'AI-9V ტიპის დამხმარე ძალური დანადგარის სტენდი', text: 'განკუთვნილია დამხმარე ძალური დანადგარის ფუნქციონალური შემოწმების, პარამეტრების კონტროლისა და გამოცდისთვის სხვადასხვა სამუშაო რეჟიმებში.' },
      { title: 'საფრენი გამოცდების ინფრასტრუქტურა', subtitle: 'სს თამ თბილავიამშენის საფრენ-საგამოცდო ტერიტორია', images: sectionImages.flight, text: 'კაპიტალური რემონტისა და ტექნიკური მომსახურების დასრულების შემდეგ, საფრენი აპარატები გადადის კომპანიის აეროდრომზე, სადაც ტარდება მიწისზედა შემოწმებები და საგამოცდო ფრენები.', items: ['ასაფრენ-დასაფრენი ზოლის სიგრძე: 1,800 მეტრი.', 'საერთო ფართობი: 170 ჰექტარი.', 'ინფრასტრუქტურა მოიცავს სპეციალიზებულ ანგრებს, GSE-ს და შესაბამის ტექნიკურ სისტემებს.'] },
      { title: 'ტრანსმისიის გამოსაცდელი სტენდი', images: sectionImages.transmission, items: ['შვეულმფრენის ტრანსმისიის გამოცდა Mi-8, Mi-17, Mi-171, Mi-172, Mi-24 და Mi-35 ტიპებისთვის.', 'ტრანსმისიის მუშაობის იმიტაცია სხვადასხვა რეჟიმებში.', 'ყველა გენერატორის გამოცდა.', 'გამოცდა ფრენისას არსებულის ანალოგიურ დატვირთვაზე.'] },
      { title: 'შასების გამოსაცდელი სტენდი', text: 'სტენდზე ტარდება შასის ფუნქციონალური და დატვირთვითი გამოცდები, რაც მოიცავს მის მექანიკურ გამძლეობას, ამორტიზაციის ეფექტურობასა და საიმედოობას.' },
      { title: 'დემფერის სტენდი', text: 'მოწყობილობა, რომელზეც ტარდება დემფერის მუშაობის, გამძლეობისა და ეფექტურობის გამოცდა სხვადასხვა დატვირთვისა და სამუშაო რეჟიმების პირობებში.' },
      { title: 'მაგნიტური და ურღვევი კონტროლი', text: 'დეტალებისა და კონსტრუქციების დიაგნოსტიკა ხდება სპეციალური მეთოდებით, რათა დადგინდეს ბზარები, შიდა დეფექტები, კოროზია და სტრუქტურული დაზიანებები დაშლის გარეშე.' },
      { title: 'საღებავის მოსაცილებელი ანგარი', images: sectionImages.paintRemoval },
      { title: 'სამღებრო ანგარი', images: sectionImages.paint },
    ],
  }
})
</script>
