<template>
  <SectionLayout
    heroTitle="ტექნიკური შესაძლებლობები"
    heroSubtitle="საწარმოო ტექნიკური ბაზა"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="ტექნიკური შესაძლებლობები" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')
</script>
