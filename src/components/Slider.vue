<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

import sliderImg1 from '../assets/images/slider-img-1.png'
import sliderImg2 from '../assets/images/slider-img-2.png'
import sliderImg3 from '../assets/images/slider-img-3.png'
import sliderImg4 from '../assets/images/slider-img-4.png'

import 'swiper/css'
import ComponentWrapper from '../ui/shared/ComponentWrapper.vue'

const slides = ref([
  { image: sliderImg1 },
  { image: sliderImg2 },
  { image: sliderImg3 },
  { image: sliderImg4 }
])

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

let swiperInstance

const onSwiper = (swiper) => {
  swiperInstance = swiper
}
const onSlideChange = () => {
  console.log('slide change')
}

const slideTo = (index) => {
  console.log(index, swiperInstance)
  if (swiperInstance) {
    swiperInstance.slideTo(index)
  }
}

const next = () => {
  if (swiperInstance) {
    swiperInstance.slideNext()
  }
}

const prev = () => {
  if (swiperInstance) {
    swiperInstance.slidePrev()
  }
}

</script>

<template>
  <ComponentWrapper>
    <div class="px-[16px] pt-[12px] pb-[24px] mb-6">
      <swiper :options="swiperOptions" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img class="max-h-[280px] mb-[16px] rounded-[20px] object-cover w-full" :src="slide.image" alt="Slide {{ index + 1 }}"/>
          <div class="text-smallText mb-[8px]">
            <span class="py-[6px] px-[8px] bg-primary-light rounded-2xl mr-[4px]">12.08.2023</span>
            <span class="py-[6px] px-[8px] bg-primary-light rounded-2xl">პოლიტიკა</span>
          </div>
          <div class="text-headline2">
            ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება
          </div>
          <p class="hidden text-bodyTextRegular text-interface-600  md:block ">განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD</p>
        </swiper-slide>
      </swiper>
      <div>
        <button @click="prev">prev</button>
        <button @click="next">next</button>
      </div>
    </div>
  </ComponentWrapper>
</template>