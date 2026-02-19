<template>
  <SectionLayout
    heroTitle="საერთაშორისო სერტიფიკატები"
    heroSubtitle="ISO და EN სერტიფიკატები"
    sidebarTitle="ჩვენს შესახებ"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="საერთაშორისო სერტიფიკატები" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../../data/navigation.js'

const sidebarLinks = getSidebarLinks('about')
</script>
