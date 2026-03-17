<template>
  <section id="innovation" class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Content -->
        <div class="reveal">
          <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">ინოვაცია</span>
          <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900 leading-tight">
            ავიაციის <span class="text-blue-600">კონცეფციები</span>
          </h2>
          <p class="text-gray-500 mt-6 text-lg leading-relaxed">
            სს „თბილავიამშენი" ავიაციის სამომავლო კონცეფციებს ავითარებს — Business Jet კლასის
            საფრენი აპარატებიდან, თანამედროვე კომპოზიტური ტექნოლოგიებით შექმნილ ELITE-Jet-მდე.
          </p>

          <div class="mt-10 space-y-6">
            <div v-for="feature in features" :key="feature.title" class="flex gap-5 group">
              <div class="shrink-0 w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <svg class="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon"/>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">{{ feature.title }}</h4>
                <p class="text-gray-500 mt-1">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Aircraft Images -->
        <div class="reveal relative" style="transition-delay:0.2s">
          <!-- ELITE-Jet main photo -->
          <div class="relative rounded-3xl overflow-hidden mb-4">
            <img src="../assets/docx-images/image3.jpeg" alt="ELITE-Jet business aircraft" class="w-full object-cover rounded-3xl" style="height:260px;" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-3xl">
              <p class="text-white font-semibold text-sm">ELITE-Jet — Business Aviation Concept</p>
            </div>
          </div>
          <!-- Bottom row: diagram + cockpit side by side -->
          <div class="grid grid-cols-2 gap-3">
            <!-- ELITE-Jet labeled diagram -->
            <div class="rounded-2xl overflow-hidden bg-white border border-gray-100 p-2 flex flex-col items-center justify-center">
              <img src="../assets/docx-images/image9.png" alt="ELITE-Jet labeled components diagram" class="w-full object-contain" style="max-height:180px;" />
              <p class="text-gray-400 text-xs text-center mt-1">Component Diagram</p>
            </div>
            <!-- GE-31 cockpit avionics -->
            <div class="rounded-2xl overflow-hidden flex flex-col">
              <img src="../assets/docx-images/image8.jpeg" alt="GE-31 BORA integrated avionics cockpit" class="w-full object-cover flex-1" style="height:150px;" />
              <div class="bg-slate-800 p-2 text-center">
                <p class="text-blue-300 text-xs font-medium">GE-31 Avionics (BORA)</p>
              </div>
            </div>
          </div>
          <div class="absolute -top-4 -right-4 w-24 h-24 opacity-20" style="background-image: radial-gradient(#3b82f6 1.5px, transparent 1.5px); background-size: 12px 12px;"></div>
        </div>
      </div>

      <!-- ELITE-Jet technical drawings gallery — below main content -->
      <div class="mt-16 reveal">
        <h3 class="text-sm font-bold text-gray-700 mb-6 uppercase tracking-widest">
          ELITE-Jet — ტექნიკური ნახაზები და განლაგება
        </h3>

        <!-- Part 1: Full-width blueprint -->
        <div class="relative rounded-2xl overflow-hidden border border-gray-200 bg-white mb-4 group cursor-pointer" style="max-height:320px;">
          <img src="../assets/docx-images/image5.jpeg" alt="ტექნიკური ბლუპრინტი"
               class="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]" style="max-height:320px;" />
          <div class="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="w-full bg-gradient-to-t from-blue-900/70 to-transparent p-4">
              <p class="text-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">ტექნიკური ბლუპრინტი</p>
            </div>
          </div>
        </div>

        <!-- Part 2: Interior layouts side by side -->
        <div class="grid md:grid-cols-2 gap-4">
          <div class="relative rounded-2xl overflow-hidden border border-gray-200 bg-white group cursor-pointer" style="max-height:240px;">
            <img src="../assets/docx-images/image6.jpeg" alt="6-ადგილიანი სალონის განლაგება"
                 class="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.05]" style="max-height:240px;" />
            <div class="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-full bg-gradient-to-t from-blue-900/70 to-transparent p-4">
                <p class="text-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">6-ადგილიანი სალონის განლაგება</p>
              </div>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden border border-gray-200 bg-white group cursor-pointer" style="max-height:240px;">
            <img src="../assets/docx-images/image7.jpeg" alt="9-ადგილიანი სალონის განლაგება"
                 class="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.05]" style="max-height:240px;" />
            <div class="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-full bg-gradient-to-t from-blue-900/70 to-transparent p-4">
                <p class="text-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">9-ადგილიანი სალონის განლაგება</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: 'ELITE-Jet (6 & 9 seater)',
    desc: '6-ადგილიანი და 9-ადგილიანი ELITE-Jet NG — შექმნილია კომპოზიტური მასალებით თანამედროვე ტექნოლოგიებით. საოფისე და გართობის სისტემები, Sat com, DVD/CD, საჰაერო შოუ სისტემა.',
    icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
  },
  {
    title: 'GE-31 Attack Aircraft',
    desc: 'ახალი საიერიშო თვითმფრინავი GE-31 — Su-25 ტიპის მოდიფიკაცია დასავლური წარმოების ახალი ავიონიკით, ძრავებით, სარადიო-ელექტრონული და ფრენ-ნავიგაციური სისტემებით.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Business Class Aircraft',
    desc: 'Business Class კლასის საფრენი აპარატები — სრული გალი, გართობის სისტემა, კლუბური სავარძლები და ყველა თანამედროვე მგზავრის კომფორტის ელემენტი.',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
]
</script>
