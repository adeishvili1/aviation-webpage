<template>
  <SectionLayout
    heroTitle="რეზინტექნიკური წარმოება"
    heroSubtitle="რეზინტექნიკური პროდუქცია"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="რეზინტექნიკური წარმოება" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')
</script>
