<template>
  <SectionLayout
    heroTitle="სერვისი"
    heroSubtitle="სერვისი და ტექნიკური მომსახურება"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="სერვისი" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')
</script>
