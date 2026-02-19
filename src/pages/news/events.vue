<template>
  <SectionLayout
    heroTitle="ღონისძიებები"
    heroSubtitle="მოვლენები და ღონისძიებები"
    sidebarTitle="ახალი ამბები & მედია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="ღონისძიებები" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('news')
</script>
