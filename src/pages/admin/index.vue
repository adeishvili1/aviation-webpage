<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center px-4">
    <div class="w-full max-w-sm">
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
          <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h1 class="text-2xl font-black text-white">Admin Panel</h1>
        <p class="text-slate-400 text-sm mt-1">სს თბილავიამშენი</p>
      </div>

      <form @submit.prevent="login" class="bg-slate-900 rounded-2xl border border-slate-700/50 p-6 space-y-4">
        <div>
          <label class="block text-slate-300 text-sm font-medium mb-2">მომხმარებელი</label>
          <input
            v-model="username"
            type="text"
            placeholder="admin"
            autocomplete="username"
            class="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-500"
          />
        </div>
        <div>
          <label class="block text-slate-300 text-sm font-medium mb-2">პაროლი</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            autocomplete="current-password"
            class="w-full bg-slate-800 border border-slate-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-500"
          />
        </div>

        <div v-if="error" class="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
          {{ error }}
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors"
        >
          შესვლა
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

// Simple credentials — change these as needed
const ADMIN_USER = 'admin'
const ADMIN_PASS = 'tam2025'

function login() {
  if (username.value === ADMIN_USER && password.value === ADMIN_PASS) {
    sessionStorage.setItem('tam_admin', '1')
    router.push('/admin/management')
  } else {
    error.value = 'არასწორი მომხმარებელი ან პაროლი'
  }
}
</script>
