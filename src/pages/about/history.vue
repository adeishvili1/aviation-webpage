<template>
  <SectionLayout
    heroTitle="ისტორია"
    heroSubtitle="სს თბილავიამშენის ისტორია"
    sidebarTitle="ჩვენს შესახებ"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="ისტორია" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('about')
</script>
