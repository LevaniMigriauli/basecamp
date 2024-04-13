<script setup>

import ComponentWrapper from '../ui/shared/ComponentWrapper.vue'
import { ref } from 'vue'
import wellKnowImg from '../assets/images/well-known.png'

const sectionWellKnownContent = ref([
  { id: '1', image: wellKnowImg, textContent: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების' },
  { id: '2', image: wellKnowImg, textContent: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების' },
  { id: '3', image: wellKnowImg, textContent: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების' },
  { id: '4', image: wellKnowImg, textContent: 'ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების' }
])
</script>

<template>
  <ComponentWrapper class="row-start-2">
    <section class="pt-4 pl-4 pb-[47px]">
      <h3 class="mb-5 text-headline2Mobile md:text-headline2 border-b-interface-200">ცნობილი ფაქტები</h3>
      <div class="flex gap-4 overflow-x-scroll overflow-y-hidden hide-scrollbar">
        <div class="shrink-0 bg-primary-light px-3 pt-3 pb-4 h-[204px] rounded-[20px] basis-[312px]"
             :class="{ 'pt-4': index !== 0 ,'pt-0': index === 0 , 'mr-4' : index === sectionWellKnownContent.length - 1}"
             v-for="(item, index) in sectionWellKnownContent" :key="item.id">
          <img class="text-smallText text-primary-primary mb-[8px] w-[288px] rounded-[20px]" :src="item.image"
               :alt="`image ${index + 1}`"/>
          <p class="text-bodyTextMedium">{{ item.textContent }}</p>
        </div>
      </div>
    </section>
  </ComponentWrapper>
</template>