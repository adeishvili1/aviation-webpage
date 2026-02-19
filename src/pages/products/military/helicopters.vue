<template>
  <SectionLayout
    heroTitle="ვერტმფრენები & თვითმფრინავები"
    heroSubtitle="საჰაერო ხომალდები"
    sidebarTitle="პროდუქცია"
    :sidebarLinks="sidebarLinks"
  >
    <PlaceholderContent pageName="ვერტმფრენები & თვითმფრინავები" />
  </SectionLayout>
</template>

<script setup>
import SectionLayout from '../../../layouts/SectionLayout.vue'
import PlaceholderContent from '../../../components/PlaceholderContent.vue'
import { getSidebarLinks } from '../../../data/navigation.js'

const sidebarLinks = getSidebarLinks('products')
</script>
