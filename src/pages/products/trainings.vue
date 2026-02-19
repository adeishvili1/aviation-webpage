<template>
  <SectionLayout
    heroTitle="ტრენინგები"
    heroSubtitle="პროფესიული ტრენინგ პროგრამები"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="ტრენინგები" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')
</script>
