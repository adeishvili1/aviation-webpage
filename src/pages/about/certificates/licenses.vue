<template>
  <SectionLayout
    heroTitle="ლიცენზიები"
    heroSubtitle="ადგილობრივი ლიცენზიები"
    sidebarTitle="ჩვენს შესახებ"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="ლიცენზიები" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../../data/navigation.js'

const sidebarLinks = getSidebarLinks('about')
</script>
