<template>
  <SectionLayout
    heroTitle="ქარხანა"
    heroSubtitle="სს თბილავიამშენის საწარმო"
    sidebarTitle="ჩვენს შესახებ"
    :sidebarLinks="sidebarLinks"
  >
    <!-- Factory exterior photo -->
    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 overflow-hidden mb-6">
      <img src="../../assets/docx-images/image23.jpeg" alt="TAM Tbilisi Aircraft Manufacturing facility" class="w-full object-cover max-h-96" />
    </div>

    <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
      <div class="border-l-4 border-blue-400 pl-6 mb-6">
        <h3 class="text-2xl font-bold text-white">„თბილავიამშენი" — პირველი ქართული საავიაციო საწარმო</h3>
      </div>
      <div class="text-blue-200/80 leading-relaxed space-y-4">
        <p>
          კომპანია 1941 წელს დაარსდა და რამდენიმე წელიწადში ერთ-ერთ წამყვან საავიაციო ქარხნად
          ჩამოყალიბდა. ისტორიის მანძილზე „თბილავიამშენმა" 8 500-ზე მეტი სხვადასხვა ტიპის საფრენი
          აპარატი აწარმოა და გაარემონტა.
        </p>
        <p>
          „თბილავიამშენი" წლების მანძილზე დიდი ავტორიტეტით სარგებლობდა და მასთან თანამშრომლობის
          სურვილს მრავალი ქვეყნის უწყებები გამოთქვამდნენ. ქარხანაში წარმოებული თუ გარემონტებული
          თვითმფრინავები დღესდღეობითაც მოქმედია და სხვადასხვა სახელმწიფოს კუთვნილებაა.
        </p>
        <p>
          კომპანია დაკომპლექტებულია კვალიფიციური პერსონალით, რომლებიც წლების მანძილზე
          დაგროვებულ გამოცდილებას ყოველდღიურ საქმიანობაში გამოიყენებენ. „თბილავიამშენის" გუნდშია
          ახალგაზრდა სპეციალისტებიც, რომლებიც კოლეგებისგან ადგილზე ეუფლებიან იშვიათ
          პროფესიას და იმაღლებენ კვალიფიკაციას.
        </p>
        <p>
          დღესდღეობით „თბილავიამშენი" სხვადასხვა ტიპის თვითმფრინავებისა და ვერტმფრენების
          სრულ რემონტს და მოდერნიზებას ახორციელებს, როგორც ადგილობრივ, ასევე საერთაშორისო
          დაკვეთების ფარგლებში. განსაკუთრებული ყურადღება ენიჭება თანამედროვე ტექნოლოგიებისა
          და მეთოდოლოგიის დანერგვას, თანამშრომელთათვის კომფორტული გარემოს შექმნასა და
          სამუშაო პირობების გაუმჯობესებას.
        </p>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-6">
      <div v-for="fact in facts" :key="fact.label" class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-6 text-center">
        <div class="text-4xl font-black text-blue-400 mb-2">{{ fact.value }}</div>
        <div class="text-white font-semibold mb-1">{{ fact.label }}</div>
        <div class="text-blue-200/60 text-sm">{{ fact.desc }}</div>
      </div>
    </div>
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('about')

const facts = [
  { value: '1941', label: 'დაარსების წელი', desc: '15 დეკემბერი, 1941 წელი' },
  { value: '85+', label: 'წლიანი გამოცდილება', desc: 'საავიაციო სექტორში' },
  { value: '8 500+', label: 'წარმოებული საფრენი აპარატი', desc: 'სხვადასხვა ტიპი' },
  { value: '300+', label: 'საფრენი აპარატის მომსახურება', desc: 'ადგილობრივი და საერთაშორისო' },
]
</script>
