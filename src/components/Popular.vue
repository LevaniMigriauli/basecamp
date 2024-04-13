<script setup>
import ComponentWrapper from '../ui/shared/ComponentWrapper.vue'
import popularImg from '../assets/images/popular.png'
import { ref } from 'vue'
import HeadingTertiary from '../ui/shared/HeadingTertiary.vue'

const sectionPopularContent = ref([
  { id: '1', image: popularImg, textContent: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა' },
  { id: '2', image: popularImg, textContent: 'ასაწონად დღეიდან განკუთვნილი პოლიეთილენის პარკები აიკრძალა' },
  { id: '3', image: popularImg, textContent: 'დღეიდან ასაწონად განკუთვნილი პოლიეთილენის პარკები აიკრძალა' },
  { id: '4', image: popularImg, textContent: 'ასაწონად დღეიდან განკუთვნილი პოლიეთილენის პარკები აიკრძალა' }
])

</script>

<template>
  <ComponentWrapper class="max-h-[330px]  col-start-2 row-start-2 row-end-4 lg:max-h-[618px]">
    <section class="pt-[25px] pl-4 pr-3">
      <HeadingTertiary textContent="პოპულარული" />
      <div class="max-h-[250px]  overflow-auto pr-[8px] lg:max-h-[542px]">
        <div v-for="(item, index) in sectionPopularContent" :key="item.id"
             class="flex items-center gap-2 pb-4"
             :class="{ 'pt-4': index !== 0, 'border-b-2 border-dashed' : index !==sectionPopularContent.length - 1 , 'pt-0': index === 0 }">
          <img :src="item.image" :alt="`image ${index + 1}`"/>
          <p class="text-headline3">{{ item.textContent }}</p>
        </div>
      </div>
    </section>
  </ComponentWrapper>
</template>