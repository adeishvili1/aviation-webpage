<template>
  <SectionLayout
    heroTitle="რაკეტები"
    heroSubtitle="სარაკეტო სისტემები"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="რაკეტები" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')
</script>
