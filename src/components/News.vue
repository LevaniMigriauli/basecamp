<script setup>

import ComponentWrapper from '../ui/shared/ComponentWrapper.vue'
import HeadingTertiary from '../ui/shared/HeadingTertiary.vue'
import timeSvg from "../assets/svgs/Icons/ic_outline-access-time.svg"
import dotSvg from "../assets/svgs/Icons/dot.svg"
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
  {
    id: '5',
    time: '8:30',
    date: '02.01.2023',
    textContent: 'ასაწონად დღეიდან განკუთვნილი პოლიეთილენის პარკები აიკრძალა'
  }
])
</script>

<template>
  <ComponentWrapper class="col-start-2 row-start-1">
    <section class="pt-[25px] pl-4 pr-3">
      <HeadingTertiary textContent="ყველა სიახლე" />
      <div class="max-h-[250px] overflow-auto pr-[8px] lg:max-h-[520px] ">
        <div class="py-4"
             :class="{ 'pt-4': index !== 0, 'border-b-2 border-dashed border-interface-200' : index !==newsTextContent.length - 1 ,'pt-0': index === 0 }"
             v-for="(item, index) in newsTextContent" :key="item.id">
          <div class="text-smallText text-primary-primary mb-[8px] flex items-center gap-2">
            <img :src="timeSvg" alt="time" /> {{ item.time }} <img :src="dotSvg"/> {{ item.date }}</div>
          <p class="text-headline3">{{ item.textContent }}</p>
        </div>
      </div>
    </section>
  </ComponentWrapper>
</template>