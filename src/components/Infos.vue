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
  <ComponentWrapper :class="{'px-3 pt-2 pb-6' : index === 0, 'px-2 pt-2 pb-4' : index !== 0 }"
                    v-for="(item, index) in sectionInfosContent" :key="item.id">
    <img class="mb-[8px] w-full rounded-[20px]" :src="item.image"
         :alt="`image ${index + 1}`"
         :class="{ 'min-h-[280px] mb-4' :item.size === 'large', 'mb-2 min-h-[160px]' : item.size === 'small' }"
    />
    <div class="text-smallText mb-[8px]">
      <span class="inline-block py-[6px] px-[8px] bg-primary-light rounded-2xl mr-[4px]">{{ item.date }}</span>
      <span class="inline-block py-[6px] px-[8px] bg-primary-light rounded-2xl">{{ item.topic }}</span>
    </div>
    <p class="text-bodyTextMedium">{{ item.textContent }}</p>
  </ComponentWrapper>
</template>