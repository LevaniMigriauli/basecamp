<script setup>
import Slider from '../components/Slider.vue'
import News from '../components/News.vue'
import Popular from '../components/Popular.vue'
import WellKnownFacts from '../components/WellKnownFacts.vue'
import Infos from '../components/Infos.vue'

</script>

<template>
  <div class="max-w-contentWidth m-auto">
    <Slider/>
    <div class="md:flex gap-[32px]">
      <News/>
      <Popular/>
    </div>
    <WellKnownFacts/>
    <Infos/>
  </div>
</template>