<template>
  <div class="min-h-screen bg-slate-950 text-white">

    <!-- Top bar -->
    <div class="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700/50 px-6 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </div>
        <div>
          <span class="font-bold text-white">ხელმძღვანელობა</span>
          <span class="text-slate-400 text-sm ml-2">— Admin Panel</span>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button @click="resetAll" class="text-slate-400 hover:text-red-400 text-sm transition-colors">
          გადაყენება
        </button>
        <a href="/about/management" target="_blank" class="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-1 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
          გვერდი
        </a>
        <button @click="logout" class="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-colors">
          გამოსვლა
        </button>
      </div>
    </div>

    <div class="max-w-5xl mx-auto px-6 py-8">

      <!-- Member selector tabs -->
      <div class="flex gap-2 flex-wrap mb-8">
        <button
          v-for="m in store.members"
          :key="m.id"
          @click="selectMember(m)"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all"
          :class="editing?.id === m.id
            ? 'bg-blue-600 text-white'
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'"
        >
          {{ m.name }}
        </button>
      </div>

      <!-- Editor -->
      <div v-if="editing" class="space-y-6">

        <!-- Save banner -->
        <Transition name="fade">
          <div v-if="dirty" class="bg-blue-600/20 border border-blue-500/30 rounded-xl px-5 py-3 flex items-center justify-between">
            <span class="text-blue-300 text-sm">შეუნახავი ცვლილებებია</span>
            <div class="flex gap-2">
              <button @click="discardChanges" class="px-4 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm transition-colors">გაუქმება</button>
              <button @click="saveChanges" class="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-bold transition-colors">შენახვა</button>
            </div>
          </div>
        </Transition>

        <!-- Basic info -->
        <section class="bg-slate-900 rounded-2xl border border-slate-700/50 p-6">
          <h2 class="font-bold text-lg mb-5 text-blue-300">ძირითადი ინფორმაცია</h2>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="field-label">სახელი და გვარი</label>
              <input v-model="editing.name" @input="dirty=true" class="field-input" />
            </div>
            <div>
              <label class="field-label">თანამდებობა</label>
              <input v-model="editing.role" @input="dirty=true" class="field-input" />
            </div>
            <div>
              <label class="field-label">ინიციალები (Avatar)</label>
              <input v-model="editing.initials" @input="dirty=true" class="field-input" maxlength="3" />
            </div>
            <div>
              <label class="field-label">დაბადების თარიღი</label>
              <input v-model="editing.dob" @input="dirty=true" class="field-input" />
            </div>
            <div class="sm:col-span-2">
              <label class="field-label">სპეციალობა</label>
              <input v-model="editing.specialty" @input="dirty=true" class="field-input" />
            </div>
            <div class="sm:col-span-2">
              <label class="field-label">ენები (მძიმით გამოყოფილი)</label>
              <input
                :value="editing.languages.join(', ')"
                @input="e => { editing.languages = e.target.value.split(',').map(s=>s.trim()).filter(Boolean); dirty=true }"
                class="field-input"
                placeholder="ქართული, ინგლისური, რუსული"
              />
            </div>
          </div>
        </section>

        <!-- Experience -->
        <section class="bg-slate-900 rounded-2xl border border-slate-700/50 p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="font-bold text-lg text-blue-300">სამუშაო გამოცდილება</h2>
            <button @click="addCompany" class="add-btn">+ კომპანია</button>
          </div>

          <div v-for="(group, gi) in editing.experience" :key="gi" class="mb-6 last:mb-0 bg-slate-800/60 rounded-xl p-4">
            <div class="flex items-center gap-3 mb-4">
              <input v-model="group.company" @input="dirty=true" class="field-input flex-1" placeholder="კომპანიის სახელი" />
              <button @click="removeCompany(gi)" class="text-red-400 hover:text-red-300 shrink-0 p-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>

            <div class="space-y-2">
              <div v-for="(item, ii) in group.items" :key="ii" class="flex gap-2">
                <input v-model="item.role" @input="dirty=true" class="field-input flex-1" placeholder="თანამდებობა" />
                <input v-model="item.period" @input="dirty=true" class="field-input w-44" placeholder="პერიოდი" />
                <button @click="removeExpItem(gi, ii)" class="text-slate-500 hover:text-red-400 shrink-0 p-1 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <button @click="addExpItem(gi)" class="add-btn mt-1">+ სტრიქონი</button>
            </div>
          </div>
        </section>

        <!-- Education -->
        <section class="bg-slate-900 rounded-2xl border border-slate-700/50 p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="font-bold text-lg text-blue-300">განათლება</h2>
            <button @click="addEdu" class="add-btn">+ დამატება</button>
          </div>

          <div v-for="(edu, i) in editing.education" :key="i" class="flex gap-3 mb-3 last:mb-0 bg-slate-800/60 rounded-xl p-3">
            <div class="grid sm:grid-cols-3 gap-2 flex-1">
              <input v-model="edu.institution" @input="dirty=true" class="field-input sm:col-span-2" placeholder="სასწავლებელი" />
              <input v-model="edu.period" @input="dirty=true" class="field-input" placeholder="წლები" />
              <input v-model="edu.degree" @input="dirty=true" class="field-input sm:col-span-3" placeholder="კვალიფიკაცია / ფაკულტეტი" />
            </div>
            <button @click="removeEdu(i)" class="text-slate-500 hover:text-red-400 shrink-0 p-1 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <p v-if="!editing.education.length" class="text-slate-500 text-sm">განათლება არ არის დამატებული</p>
        </section>

        <!-- Awards -->
        <section class="bg-slate-900 rounded-2xl border border-slate-700/50 p-6">
          <div class="flex items-center justify-between mb-5">
            <h2 class="font-bold text-lg text-blue-300">სახელმწიფო ჯილდოები</h2>
            <button @click="addAward" class="add-btn">+ დამატება</button>
          </div>

          <div v-for="(award, i) in editing.awards" :key="i" class="flex gap-3 mb-3 last:mb-0 bg-slate-800/60 rounded-xl p-3">
            <div class="grid gap-2 flex-1">
              <input v-model="award.title" @input="dirty=true" class="field-input" placeholder="ჯილდოს სახელი" />
              <input v-model="award.desc" @input="dirty=true" class="field-input" placeholder="აღწერა" />
            </div>
            <button @click="removeAward(i)" class="text-slate-500 hover:text-red-400 shrink-0 p-1 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <p v-if="!editing.awards?.length" class="text-slate-500 text-sm">ჯილდოები არ არის დამატებული</p>
        </section>

        <!-- Save button (bottom) -->
        <div class="flex justify-end">
          <button @click="saveChanges" class="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-colors">
            შენახვა
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useManagementStore } from '../../stores/management.js'

const router = useRouter()
const store = useManagementStore()

const editing = ref(null)
const originalSnapshot = ref(null)
const dirty = ref(false)

onMounted(() => {
  if (!sessionStorage.getItem('tam_admin')) {
    router.replace('/admin')
    return
  }
  selectMember(store.members[0])
})

function selectMember(m) {
  if (dirty.value && !confirm('შეუნახავი ცვლილებებია. გააგრძელებთ?')) return
  editing.value = JSON.parse(JSON.stringify(m))
  originalSnapshot.value = JSON.parse(JSON.stringify(m))
  dirty.value = false
}

function saveChanges() {
  store.updateMember(editing.value)
  originalSnapshot.value = JSON.parse(JSON.stringify(editing.value))
  dirty.value = false
}

function discardChanges() {
  editing.value = JSON.parse(JSON.stringify(originalSnapshot.value))
  dirty.value = false
}

// Experience helpers
function addCompany() {
  editing.value.experience.push({ company: '', items: [{ role: '', period: '' }] })
  dirty.value = true
}
function removeCompany(gi) {
  editing.value.experience.splice(gi, 1)
  dirty.value = true
}
function addExpItem(gi) {
  editing.value.experience[gi].items.push({ role: '', period: '' })
  dirty.value = true
}
function removeExpItem(gi, ii) {
  editing.value.experience[gi].items.splice(ii, 1)
  dirty.value = true
}

// Education helpers
function addEdu() {
  editing.value.education.push({ institution: '', degree: '', period: '' })
  dirty.value = true
}
function removeEdu(i) {
  editing.value.education.splice(i, 1)
  dirty.value = true
}

// Award helpers
function addAward() {
  if (!editing.value.awards) editing.value.awards = []
  editing.value.awards.push({ title: '', desc: '' })
  dirty.value = true
}
function removeAward(i) {
  editing.value.awards.splice(i, 1)
  dirty.value = true
}

function resetAll() {
  if (confirm('ყველა ცვლილება გაუქმდება და ნაგულისხმევი მონაცემები აღდგება. დარწმუნებული ხართ?')) {
    store.resetToDefault()
    selectMember(store.members[0])
  }
}

function logout() {
  sessionStorage.removeItem('tam_admin')
  router.push('/admin')
}
</script>

<style scoped>
.field-label {
  @apply block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider;
}
.field-input {
  @apply w-full bg-slate-800 border border-slate-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-500;
}
.add-btn {
  @apply text-blue-400 hover:text-blue-300 text-xs font-semibold transition-colors border border-blue-500/30 hover:border-blue-400/50 rounded-lg px-3 py-1.5;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
