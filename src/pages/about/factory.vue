<template>
  <SectionLayout
    heroTitle="ქარხანა"
    heroSubtitle="სს თბილავიამშენის საწარმო"
    sidebarTitle="ჩვენს შესახებ"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="ქარხანა" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('about')
</script>
