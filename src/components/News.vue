<script setup>

import ComponentWrapper from '../ui/shared/ComponentWrapper.vue'
import { ref } from 'vue'

const newsTextContent = ref([
  {
    id: '1',
    time: '7:30',
    date: '02.01.2023',
    textContent: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა'
  },
  {
    id: '2',
    time: '8:30',
    date: '02.01.2023',
    textContent: 'ასაწონად დღეიდან განკუთვნილი პოლიეთილენის პარკები აიკრძალა'
  },
  {
    id: '3',
    time: '9:25',
    date: '02.01.2023',
    textContent: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა'
  },
  {
    id: '4',
    time: '7:30',
    date: '02.01.2023',
    textContent: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა'
  },
  { id: '5', time: '8:30', date: '02.01.2023', textContent: 'ასაწონად დღეიდან განკუთვნილი პოლიეთილენის პარკები აიკრძალა' }
])
</script>

<template>
  <ComponentWrapper>
    <section class="pt-4 pl-4 h-[330px] overflow-y-scroll">
      <h3 class="mb-[27px] text-headline2Mobile md:text-headline2 border-b-interface-200">ყველა სიახლე</h3>
      <div class="py-4"
           :class="{ 'pt-4': index !== 0, 'border-b-2 border-dashed' : index !==newsTextContent.length - 1 ,'pt-0': index === 0 }"
           v-for="(item, index) in newsTextContent" :key="item.id">
        <div class="text-smallText text-primary-primary mb-[8px]">{{ item.time }} . {{ item.date }}</div>
        <p class="text-headline3">{{ item.textContent }}</p>
      </div>
    </section>
  </ComponentWrapper>
</template>