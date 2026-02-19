<template>
  <SectionLayout
    heroTitle="ვიდეო"
    heroSubtitle="ვიდეო მასალები"
    sidebarTitle="ახალი ამბები & მედია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="ვიდეო" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('news')
</script>
