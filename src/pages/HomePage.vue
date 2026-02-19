<template>
  <HeroSection />
  <FleetSection />
  <InnovationSection />
  <DestinationsSection />
  <SustainabilitySection />
  <NewsSection />
  <PartnersMarquee />
  <ContactSection />
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import FleetSection from '../components/FleetSection.vue'
import InnovationSection from '../components/InnovationSection.vue'
import DestinationsSection from '../components/DestinationsSection.vue'
import SustainabilitySection from '../components/SustainabilitySection.vue'
import NewsSection from '../components/NewsSection.vue'
import PartnersMarquee from '../components/PartnersMarquee.vue'
import ContactSection from '../components/ContactSection.vue'

import { useScrollReveal } from '../composables/useScrollReveal'
import { useCounterAnimation } from '../composables/useCounterAnimation'

useScrollReveal()
useCounterAnimation()
</script>
