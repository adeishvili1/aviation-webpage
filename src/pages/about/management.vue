<template>
  <div class="bg-brand-950 min-h-screen">
    <PageHero title="ხელმძღვანელობა" subtitle="სს თბილავიამშენის ხელმძღვანელობა" />

    <div class="max-w-7xl mx-auto px-6 pb-20 -mt-10 relative z-10">
      <div class="flex flex-col lg:flex-row gap-8">

        <main class="lg:w-2/3 space-y-8">

          <!-- Member grid -->
          <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <button
              v-for="m in members"
              :key="m.id"
              @click="selectedId = m.id"
              class="group text-left rounded-xl border p-5 transition-all duration-200 flex items-center gap-4"
              :class="selectedId === m.id
                ? 'bg-blue-600/20 border-blue-400 shadow-lg shadow-blue-500/10'
                : 'bg-brand-900/40 border-blue-500/15 hover:border-blue-400/40 hover:bg-brand-900/60'"
            >
              <div
                class="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-lg font-black transition-colors"
                :class="selectedId === m.id ? 'bg-blue-500 text-white' : 'bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/30'"
              >
                {{ m.initials }}
              </div>
              <div class="min-w-0">
                <div class="text-white font-bold text-sm leading-snug">{{ m.name }}</div>
                <div class="text-blue-300 text-xs mt-0.5 leading-snug">{{ m.role }}</div>
              </div>
            </button>
          </div>

          <!-- Selected member profile -->
          <Transition name="profile" mode="out-in">
            <div v-if="selected" :key="selected.id" class="space-y-6">

              <!-- Header card -->
              <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
                <div class="flex flex-col sm:flex-row gap-6 items-start">
                  <div class="shrink-0 w-40 h-48 rounded-xl bg-blue-600/10 border border-blue-500/20 flex flex-col items-center justify-center gap-3">
                    <svg class="w-16 h-16 text-blue-500/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    <span class="text-blue-500/40 text-xs">სურათი</span>
                  </div>

                  <div class="flex-1">
                    <h2 class="text-3xl font-black text-white mb-1">{{ selected.name }}</h2>
                    <div class="border-l-4 border-blue-400 pl-4 mb-5">
                      <p class="text-blue-300 font-semibold text-lg">{{ selected.role }}</p>
                    </div>
                    <div class="grid sm:grid-cols-2 gap-3">
                      <div v-if="selected.dob" class="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                        <div class="text-blue-300/70 text-xs font-semibold mb-1 uppercase tracking-wider">დაბადების თარიღი</div>
                        <div class="text-white text-sm font-medium">{{ selected.dob }}</div>
                      </div>
                      <div v-if="selected.languages?.length" class="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                        <div class="text-blue-300/70 text-xs font-semibold mb-1 uppercase tracking-wider">ენები</div>
                        <div class="text-white text-sm font-medium">{{ selected.languages.join(', ') }}</div>
                      </div>
                      <div v-if="selected.specialty" class="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 sm:col-span-2">
                        <div class="text-blue-300/70 text-xs font-semibold mb-1 uppercase tracking-wider">სპეციალობა</div>
                        <div class="text-white text-sm font-medium">{{ selected.specialty }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Career timeline -->
              <div class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
                <div class="border-l-4 border-blue-400 pl-6 mb-6">
                  <h3 class="text-xl font-bold text-white">სამუშაო გამოცდილება</h3>
                </div>
                <div v-for="(group, gi) in selected.experience" :key="gi" class="mb-6 last:mb-0">
                  <div class="text-blue-400 font-bold text-sm mb-3 uppercase tracking-widest">{{ group.company }}</div>
                  <div class="relative pl-5 space-y-3">
                    <div class="absolute left-0 top-2 bottom-2 w-px bg-blue-500/20"></div>
                    <div v-for="(item, ii) in group.items" :key="ii" class="relative">
                      <div class="absolute -left-5 top-2 w-2.5 h-2.5 rounded-full border-2 border-blue-400 bg-brand-950"></div>
                      <div class="bg-blue-500/8 rounded-lg p-3 border border-blue-500/10">
                        <div class="text-white font-semibold text-sm">{{ item.role }}</div>
                        <div class="text-blue-300/60 text-xs mt-0.5">{{ item.period }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Education -->
              <div v-if="selected.education?.length" class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
                <div class="border-l-4 border-blue-400 pl-6 mb-6">
                  <h3 class="text-xl font-bold text-white">განათლება</h3>
                </div>
                <div class="space-y-3">
                  <div v-for="(edu, i) in selected.education" :key="i" class="flex gap-4 p-4 bg-blue-500/8 rounded-lg border border-blue-500/10">
                    <div class="shrink-0 w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                      <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-white font-semibold text-sm">{{ edu.institution }}</div>
                      <div class="text-blue-300/80 text-sm">{{ edu.degree }}</div>
                      <div class="text-blue-300/50 text-xs mt-0.5">{{ edu.period }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Awards -->
              <div v-if="selected.awards?.length" class="bg-brand-900/40 backdrop-blur-xl rounded-xl border border-blue-500/15 shadow-2xl shadow-black/30 p-8">
                <div class="border-l-4 border-blue-400 pl-6 mb-6">
                  <h3 class="text-xl font-bold text-white">სახელმწიფო ჯილდოები</h3>
                </div>
                <div class="space-y-3">
                  <div v-for="(award, i) in selected.awards" :key="i" class="flex gap-4 p-4 bg-yellow-500/5 rounded-lg border border-yellow-500/15">
                    <div class="shrink-0 text-yellow-400 text-xl">🏅</div>
                    <div>
                      <div class="text-white font-semibold text-sm">{{ award.title }}</div>
                      <div class="text-blue-200/60 text-xs mt-0.5">{{ award.desc }}</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Transition>

        </main>

        <PageSidebar title="ჩვენს შესახებ" :links="sidebarLinks" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PageHero from '../../components/PageHero.vue'
import PageSidebar from '../../components/PageSidebar.vue'
import { getSidebarLinks } from '../../data/navigation.js'
import { useManagementStore } from '../../stores/management.js'

const sidebarLinks = getSidebarLinks('about')
const store = useManagementStore()
const members = computed(() => store.members)

const selectedId = ref(members.value[0]?.id ?? null)
const selected = computed(() => members.value.find(m => m.id === selectedId.value) ?? members.value[0])
</script>

<style scoped>
.profile-enter-active, .profile-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.profile-enter-from { opacity: 0; transform: translateY(12px); }
.profile-leave-to   { opacity: 0; transform: translateY(-8px); }
</style>
