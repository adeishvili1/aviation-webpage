import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },

  // About Us
  { path: '/about/history', name: 'AboutHistory', component: () => import('../pages/about/history.vue') },
  { path: '/about/factory', name: 'AboutFactory', component: () => import('../pages/about/factory.vue') },
  { path: '/about/management', name: 'AboutManagement', component: () => import('../pages/about/management.vue') },
  { path: '/about/certificates/licenses', name: 'CertLicenses', component: () => import('../pages/about/certificates/licenses.vue') },
  { path: '/about/certificates/international', name: 'CertInternational', component: () => import('../pages/about/certificates/international.vue') },

  // Products
  { path: '/products/military/rubber', name: 'MilitaryRubber', component: () => import('../pages/products/military/rubber.vue') },
  { path: '/products/military/helicopters', name: 'MilitaryHelicopters', component: () => import('../pages/products/military/helicopters.vue') },
  { path: '/products/military/missiles', name: 'MilitaryMissiles', component: () => import('../pages/products/military/missiles.vue') },
  { path: '/products/services', name: 'ProductsServices', component: () => import('../pages/products/services.vue') },
  { path: '/products/trainings', name: 'ProductsTrainings', component: () => import('../pages/products/trainings.vue') },
  { path: '/products/technical', name: 'ProductsTechnical', component: () => import('../pages/products/technical.vue') },
  { path: '/products/capacity', name: 'ProductsCapacity', component: () => import('../pages/products/capacity.vue') },

  // News & Media
  { path: '/news', name: 'News', component: () => import('../pages/news/index.vue') },
  { path: '/news/events', name: 'NewsEvents', component: () => import('../pages/news/events.vue') },
  { path: '/news/gallery', name: 'NewsGallery', component: () => import('../pages/news/gallery.vue') },
  { path: '/news/video', name: 'NewsVideo', component: () => import('../pages/news/video.vue') },
  { path: '/news/blog', name: 'NewsBlog', component: () => import('../pages/news/blog.vue') },

  // Careers
  { path: '/careers/jobs', name: 'CareersJobs', component: () => import('../pages/careers/jobs.vue') },
  { path: '/careers/join', name: 'CareersJoin', component: () => import('../pages/careers/join.vue') },

  // Partners
  { path: '/partners', name: 'Partners', component: () => import('../pages/partners/index.vue') },

  // Contact
  { path: '/contact', name: 'Contact', component: () => import('../pages/contact/index.vue') },

  // Legacy redirect
  { path: '/director', redirect: '/about/management' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
