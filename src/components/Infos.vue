<script setup>

import ComponentWrapper from '../ui/shared/ComponentWrapper.vue'
import { ref } from 'vue'
import info1 from '../assets/images/infos-1.png'
import info2 from '../assets/images/infos-2.png'
import info3 from '../assets/images/infos-3.png'
import info4 from '../assets/images/infos-4.png'

const sectionInfosContent = ref([
  {
    id: '1',
    image: info1,
    date: '12.08.2023',
    topic: 'პოლიტიკა',
    textContent: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
    size: 'large'
  },
  {
    id: '2',
    image: info2,
    date: '12.08.2023',
    topic: 'პოლიტიკა',
    textContent: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
    size: 'small'
  },
  {
    id: '3',
    image: info3,
    date: '12.08.2023',
    topic: 'პოლიტიკა',
    textContent: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
    size: 'small'
  },
  {
    id: '4',
    image: info4,
    date: '12.08.2023',
    topic: 'პოლიტიკა',
    textContent: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
    size: 'small'
  },
  {
    id: '5',
    image: info2,
    date: '12.08.2023',
    topic: 'პოლიტიკა',
    textContent: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე',
    size: 'small'
  }
])
</script>

<template>
  <section class="md:grid md:grid-cols-2 gap-x-8 lg:grid-cols-custom3">
  <ComponentWrapper
        :class="{'px-3 pt-2 pb-6 col-span-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3' : index === 0, 'px-2 pt-2 pb-4' : index !== 0 }"
        v-for="(item, index) in sectionInfosContent" :key="item.id">
      <img class="mb-[8px]  rounded-[20px]" :src="item.image"
           :alt="`image ${index + 1}`"
           :class="{ 'min-h-[280px] mb-4 lg:min-h-[240px]' :item.size === 'large', 'mb-2 min-h-[160px] lg:min-h-[96px]' : item.size === 'small' }"
      />
      <div class="text-smallText mb-[8px]">
        <span class="inline-block py-[6px] px-[8px] bg-primary-light rounded-2xl mr-[4px]">{{ item.date }}</span>
        <span class="inline-block py-[6px] px-[8px] bg-primary-light rounded-2xl">{{ item.topic }}</span>
      </div>
      <p class="text-bodyTextMedium h-6" :class="{'overflow-hidden' : index !== 0}">{{ item.textContent }}</p>
    </ComponentWrapper>
  </section>
</template>