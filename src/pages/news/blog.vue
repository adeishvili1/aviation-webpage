<template>
  <SectionLayout
    heroTitle="ბლოგი"
    heroSubtitle="სტატიები და პუბლიკაციები"
    sidebarTitle="ახალი ამბები & მედია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="ბლოგი" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../data/navigation.js'

const sidebarLinks = getSidebarLinks('news')
</script>
