<template>
  <SectionLayout
    heroTitle="სამუშაო შეთავაზებები"
    heroSubtitle="ვაკანსიები და სამუშაო შეთავაზებები"
    sidebarTitle="კარიერა"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="სამუშაო შეთავაზებები" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('careers')
</script>
