<template>
  <section id="innovation" class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" data-parallax="0.2"></div>
    <div class="max-w-7xl mx-auto px-6 relative">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="reveal">
          <span class="text-blue-600 font-semibold text-sm tracking-widest uppercase">{{ $t('innovation.label') }}</span>
          <h2 class="text-4xl md:text-5xl font-black mt-3 text-gray-900 leading-tight">
            {{ $t('innovation.title1') }} <span class="text-blue-600">{{ $t('innovation.title2') }}</span>
          </h2>
          <p class="text-gray-500 mt-6 text-lg leading-relaxed">
            {{ $t('innovation.desc') }}
          </p>

          <div class="mt-10 space-y-6">
            <router-link
              v-for="feature in features"
              :key="feature.titleKey"
              :to="feature.link"
              class="flex gap-5 group rounded-2xl border border-transparent p-4 -m-4 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all"
            >
              <div class="shrink-0 w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <svg class="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feature.icon" />
                </svg>
              </div>
              <div class="flex-1">
                <div class="flex items-center justify-between gap-4">
                  <h4 class="font-bold text-gray-900 text-lg">{{ $t(feature.titleKey) }}</h4>
                  <svg class="w-5 h-5 text-blue-500 shrink-0 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p class="text-gray-500 mt-1">{{ $t(feature.descKey) }}</p>
              </div>
            </router-link>
          </div>
        </div>

        <div class="reveal relative" style="transition-delay:0.2s">
          <router-link to="/innovation/elite-jet" class="relative block rounded-3xl overflow-hidden mb-4 group">
            <img src="../assets/p4.png" alt="ELITE-Jet civilian aircraft" class="w-full object-cover rounded-3xl transition-transform duration-300 group-hover:scale-[1.02]" style="height:260px;" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
          </router-link>

          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-2xl overflow-hidden bg-white border border-gray-100 p-2 flex flex-col items-center justify-center">
              <img src="../assets/docx-images/image9.png" alt="ELITE-Jet labeled components diagram" class="w-full object-contain" style="max-height:180px;" />
              <p class="text-gray-400 text-xs text-center mt-1">{{ $t('innovation.diagram_caption') }}</p>
            </div>
            <div class="rounded-2xl overflow-hidden flex flex-col">
              <img src="../assets/docx-images/image8.jpeg" alt="GE-31 BORA integrated avionics cockpit" class="w-full object-cover flex-1" style="height:150px;" />
              <div class="bg-slate-800 p-2 text-center">
                <p class="text-blue-300 text-xs font-medium">{{ $t('innovation.cockpit_caption') }}</p>
              </div>
            </div>
          </div>

          <div class="absolute -top-4 -right-4 w-24 h-24 opacity-20" style="background-image: radial-gradient(#3b82f6 1.5px, transparent 1.5px); background-size: 12px 12px;"></div>
        </div>
      </div>

      <div class="mt-16 reveal">
        <h3 class="text-sm font-bold text-gray-700 mb-6 uppercase tracking-widest">
          {{ $t('innovation.drawings_title') }}
        </h3>

        <div class="relative rounded-2xl overflow-hidden border border-gray-200 bg-white mb-4 group" style="max-height:320px;">
          <img
            src="../assets/docx-images/image5.jpeg"
            :alt="$t('innovation.blueprint')"
            class="w-full h-full object-contain p-2"
            style="max-height:320px;"
          />
          <div class="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div class="w-full bg-linear-to-t from-blue-900/70 to-transparent p-4">
              <p class="text-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{{ $t('innovation.blueprint') }}</p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="relative rounded-2xl overflow-hidden border border-gray-200 bg-white group" style="max-height:240px;">
            <img
              src="../assets/docx-images/image6.jpeg"
              :alt="$t('innovation.layout6')"
              class="w-full h-full object-contain p-2"
              style="max-height:240px;"
            />
            <div class="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div class="w-full bg-linear-to-t from-blue-900/70 to-transparent p-4">
                <p class="text-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{{ $t('innovation.layout6') }}</p>
              </div>
            </div>
          </div>
          <div class="relative rounded-2xl overflow-hidden border border-gray-200 bg-white group" style="max-height:240px;">
            <img
              src="../assets/docx-images/image7.jpeg"
              :alt="$t('innovation.layout9')"
              class="w-full h-full object-contain p-2"
              style="max-height:240px;"
            />
            <div class="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div class="w-full bg-linear-to-t from-blue-900/70 to-transparent p-4">
                <p class="text-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{{ $t('innovation.layout9') }}</p>
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
    titleKey: 'innovation.feat1_title',
    descKey: 'innovation.feat1_desc',
    link: '/innovation/elite-jet',
    icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
  },
  {
    titleKey: 'innovation.feat2_title',
    descKey: 'innovation.feat2_desc',
    link: '/innovation/ge-31-bora',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
]
</script>
