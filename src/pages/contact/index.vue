<template>
  <div class="bg-brand-950 min-h-screen">
    <PageHero title="კონტაქტი" subtitle="დაგვიკავშირდით" />

    <div class="max-w-7xl mx-auto px-6 pb-20 -mt-10 relative z-10 space-y-8">
      <!-- Map Placeholder -->
      <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 overflow-hidden">
        <div class="h-80 bg-blue-900/30 flex items-center justify-center">
          <div class="text-center">
            <svg class="w-16 h-16 text-blue-400/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <p class="text-white/40">რუკა მალე დაემატება</p>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Contact Info -->
        <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
          <div class="border-l-4 border-blue-400 pl-6 mb-6">
            <h3 class="text-2xl font-bold text-white">საკონტაქტო ინფორმაცია</h3>
          </div>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-1">მისამართი</h4>
                <p class="text-blue-200/60 text-sm">თბილისი, საქართველო</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-1">ტელეფონი</h4>
                <p class="text-blue-200/60 text-sm">+995 (32) XXX XX XX</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-1">ელ. ფოსტა</h4>
                <p class="text-blue-200/60 text-sm">info@tbilaircraft.ge</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
          <div class="border-l-4 border-blue-400 pl-6 mb-6">
            <h3 class="text-2xl font-bold text-white">მოგვწერეთ</h3>
          </div>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-blue-300/80 mb-2">სახელი</label>
              <input type="text" disabled class="w-full bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-white/50 placeholder-white/30" placeholder="თქვენი სახელი">
            </div>
            <div>
              <label class="block text-sm font-medium text-blue-300/80 mb-2">ელ. ფოსტა</label>
              <input type="email" disabled class="w-full bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-white/50 placeholder-white/30" placeholder="email@example.com">
            </div>
            <div>
              <label class="block text-sm font-medium text-blue-300/80 mb-2">შეტყობინება</label>
              <textarea disabled rows="4" class="w-full bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-white/50 placeholder-white/30 resize-none" placeholder="თქვენი შეტყობინება..."></textarea>
            </div>
            <button disabled class="w-full bg-blue-600/50 text-white/50 font-semibold py-3 rounded-lg cursor-not-allowed">
              გაგზავნა (მალე)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHero from '../../components/PageHero.vue'
</script>
