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
  ai9v: [
    { src: new URL('../../assets/tech-ai9v-1.png', import.meta.url).href, alt: 'AI-9V APU stand control unit' },
    { src: new URL('../../assets/tech-ai9v-2.png', import.meta.url).href, alt: 'AI-9V APU stand equipment' },
  ],
  flight: [
    { src: new URL('../../assets/m.png', import.meta.url).href, alt: 'Flight-test territory' },
    { src: new URL('../../assets/m1.jpg', import.meta.url).href, alt: 'Aerodrome infrastructure' },
    { src: new URL('../../assets/m2.jpg', import.meta.url).href, alt: 'Ground checks' },
    { src: new URL('../../assets/m4.jpg', import.meta.url).href, alt: 'Test flights' },
  ],
  transmission: [
    { src: new URL('../../assets/m5.jpg', import.meta.url).href, alt: 'Transmission stand' },
    { src: new URL('../../assets/m6.png', import.meta.url).href, alt: 'Transmission test' },
  ],
  landingGear: [
    { src: new URL('../../assets/tech-landing-gear.png', import.meta.url).href, alt: 'Landing gear test stand' },
  ],
  damper: [
    { src: new URL('../../assets/tech-damper.png', import.meta.url).href, alt: 'Damper stand' },
  ],
  ndt: [
    { src: new URL('../../assets/tech-ndt-1.jpg', import.meta.url).href, alt: 'Magnetic and non-destructive testing machine' },
    { src: new URL('../../assets/tech-ndt-2.jpg', import.meta.url).href, alt: 'Magnetic and non-destructive testing process' },
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
      heroSubtitle: 'Laboratories, stands and test infrastructure',
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
        {
          title: 'AI-9V Auxiliary Power Unit (APU) Stand',
          images: sectionImages.ai9v,
          text: 'Designed for functional checking, parameter control and testing of the power unit in different operating regimes, ensuring serviceability and reliability assessment.',
        },
        {
          title: 'Flight-Test Territory',
          images: sectionImages.flight,
          text: 'After overhaul and technical maintenance, aircraft move to the company aerodrome for ground checks and test flights.',
          items: [
            'Runway length: 1,800 meters.',
            'Total area: 170 hectares.',
            'Infrastructure includes specialized hangars, GSE and technical systems for inspection and testing.',
          ],
        },
        {
          title: 'Transmission Test Stand',
          images: sectionImages.transmission,
          items: [
            'Helicopter transmission testing for Mi-8, Mi-17, Mi-171, Mi-172, Mi-24 and Mi-35.',
            'Simulation of transmission operation in different modes.',
            'Testing of all generators.',
            'Testing under flight-equivalent loads.',
          ],
        },
        {
          title: 'Landing Gear Test Stand',
          images: sectionImages.landingGear,
          text: 'The stand performs functional and load testing of landing gear, including mechanical strength, shock absorption efficiency and reliability in operating regimes.',
        },
        {
          title: 'Damper Stand',
          images: sectionImages.damper,
          text: 'A test device for damper performance, durability and effectiveness under different loads and operating conditions.',
        },
        {
          title: 'Magnetic and Non-Destructive Testing',
          images: sectionImages.ndt,
          text: 'Diagnostic methods such as magnetic particle, ultrasonic and radiographic testing are used to detect cracks, internal defects, corrosion and structural damage without disassembly.',
        },
        { title: 'Paint Removal Hangar', images: sectionImages.paintRemoval },
        { title: 'Paint Hangar', images: sectionImages.paint },
      ],
    }
  }

  if (locale.value === 'ru') {
    return {
      heroTitle: 'Технические возможности',
      heroSubtitle: 'Лаборатории, стенды и испытательная инфраструктура',
      labsTitle: 'Лаборатории',
      labsIntro: 'На предприятии действуют уникальные лаборатории для проверки и ремонта агрегатов и систем летательных аппаратов.',
      laboratoryItems: [
        'Агрегаты топливной системы',
        'Агрегаты гидравлической системы',
        'Агрегаты пневматической системы',
        'Системы вооружения и управления огнем',
        'Двигатели и системы управления',
        'Радиоэлектронные системы',
        'Навигационные системы',
      ],
      sections: [
        {
          title: 'Стенд вспомогательной силовой установки AI-9V (APU)',
          images: sectionImages.ai9v,
          text: 'Предназначен для функциональной проверки, контроля параметров и испытаний силовой установки в различных рабочих режимах, что обеспечивает оценку ее исправности и надежности.',
        },
        {
          title: 'Летно-испытательная территория',
          images: sectionImages.flight,
          text: 'После капитального ремонта и технического обслуживания летательные аппараты переходят на аэродром компании для наземных проверок и испытательных полетов.',
          items: [
            'Длина ВПП: 1 800 метров.',
            'Общая площадь: 170 гектаров.',
            'Инфраструктура включает специализированные ангары, GSE и технические системы для инспекции и испытаний.',
          ],
        },
        {
          title: 'Стенд испытания трансмиссии',
          images: sectionImages.transmission,
          items: [
            'Испытания трансмиссии вертолетов Mi-8, Mi-17, Mi-171, Mi-172, Mi-24 и Mi-35.',
            'Имитация работы трансмиссии в различных режимах.',
            'Испытания всех генераторов.',
            'Испытания при нагрузках, аналогичных полетным.',
          ],
        },
        {
          title: 'Стенд испытания шасси',
          images: sectionImages.landingGear,
          text: 'На стенде проводятся функциональные и нагрузочные испытания шасси, включая механическую прочность, эффективность амортизации и надежность в рабочих режимах.',
        },
        {
          title: 'Стенд демпфера',
          images: sectionImages.damper,
          text: 'Устройство для испытания работы, прочности и эффективности демпфера при различных нагрузках и режимах.',
        },
        {
          title: 'Магнитный и неразрушающий контроль',
          images: sectionImages.ndt,
          text: 'Методы магнитопорошкового, ультразвукового, рентгеновского и другого контроля позволяют выявлять трещины, внутренние дефекты, коррозию и структурные повреждения без разборки.',
        },
        { title: 'Ангар удаления краски', images: sectionImages.paintRemoval },
        { title: 'Покрасочный ангар', images: sectionImages.paint },
      ],
    }
  }

  return {
    heroTitle: 'ტექნიკური შესაძლებლობები',
    heroSubtitle: 'ლაბორატორიები, სტენდები და საგამოცდო ინფრასტრუქტურა',
    labsTitle: 'ლაბორატორიები',
    labsIntro: 'თბილავიამშენში მოქმედებს უნიკალური ლაბორატორიები, სადაც ხდება საფრენი აპარატების აგრეგატებისა და სისტემების შემოწმება და რემონტი.',
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
      {
        title: 'AI-9V ტიპის დამხმარე ძალური დანადგარის (APU) სტენდი',
        images: sectionImages.ai9v,
        text: 'AI-9V ტიპის დამხმარე ძალური დანადგარის (APU) სტენდი — განკუთვნილია ძალური დანადგარის ფუნქციონალური შემოწმების, პარამეტრების კონტროლისა და გამოცდისთვის სხვადასხვა სამუშაო რეჟიმებში, რაც უზრუნველყოფს მისი გამართულობისა და საიმედოობის შეფასებას.',
      },
      {
        title: 'საფრენ-საგამოცდო ტერიტორია',
        images: sectionImages.flight,
        text: 'კაპიტალური რემონტისა და ტექნიკური მომსახურების დასრულების შემდეგ, საჰაერო აპარატები გადადის კომპანიის აეროდრომზე, სადაც ტარდება მიწისზედა შემოწმებები და საგამოცდო ფრენები.',
        items: [
          'ასაფრენ-დასაფრენი ზოლის სიგრძე: 1,800 მეტრი.',
          'საერთო ფართობი: 170 ჰექტარი.',
          'ინფრასტრუქტურა მოიცავს სპეციალიზებულ ანგრებს, GSE-ს და შესაბამის ტექნიკურ სისტემებს.',
        ],
      },
      {
        title: 'ტრანსმისიის გამოსაცდელი სტენდი',
        images: sectionImages.transmission,
        items: [
          'შვეულმფრენის ტრანსმისიის გამოცდა Mi-8, Mi-17, Mi-171, Mi-172, Mi-24 და Mi-35 ტიპებისთვის.',
          'ტრანსმისიის მუშაობის იმიტაცია სხვადასხვა რეჟიმებში.',
          'ყველა გენერატორის გამოცდა.',
          'გამოცდა ფრენისას არსებულის ანალოგიურ დატვირთვაზე.',
        ],
      },
      {
        title: 'შასების გამოსაცდელი სტენდი',
        images: sectionImages.landingGear,
        text: 'სტენდზე ტარდება შასების ფუნქციონალური და დატვირთვითი გამოცდები, რაც მოიცავს მის მექანიკურ გამძლეობას, ამორტიზაციის ეფექტურობასა და საიმედოობის შეფასებას.',
      },
      {
        title: 'დემფერის სტენდი',
        images: sectionImages.damper,
        text: 'მოწყობილობა, რომელზეც ტარდება დემფერის მუშაობის, გამძლეობისა და ეფექტურობის გამოცდა სხვადასხვა დატვირთვისა და სამუშაო რეჟიმების პირობებში.',
      },
      {
        title: 'მაგნიტური და ურღვევი კონტროლი',
        images: sectionImages.ndt,
        text: 'დეტალებისა და კონსტრუქციების დიაგნოსტიკა ხდება სპეციალური მეთოდებით, რათა დადგინდეს ბზარები, შიდა დეფექტები, კოროზია და სტრუქტურული დაზიანებები დაშლის გარეშე.',
      },
      { title: 'საღებავის მოსაცილებელი ანგარი', images: sectionImages.paintRemoval },
      { title: 'სამღებრო ანგარი', images: sectionImages.paint },
    ],
  }
})
</script>
