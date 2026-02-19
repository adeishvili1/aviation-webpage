<template>
  <SectionLayout
    heroTitle="საწარმოო სიმძლავრე"
    heroSubtitle="წარმოების შესაძლებლობები"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="საწარმოო სიმძლავრე" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')
</script>
