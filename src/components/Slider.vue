<!--<script setup>-->
<!--import { Swiper, SwiperSlide } from 'swiper/vue'-->
<!--import { ref } from 'vue'-->

<!--import sliderImg1 from '../assets/images/slider-img-1.png'-->
<!--import sliderImg2 from '../assets/images/slider-img-2.png'-->
<!--import sliderImg3 from '../assets/images/slider-img-3.png'-->
<!--import sliderImg4 from '../assets/images/slider-img-4.png'-->

<!--import 'swiper/css'-->
<!--import 'swiper/css/pagination';-->
<!--import ComponentWrapper from '../ui/shared/ComponentWrapper.vue'-->

<!--const slides = ref([-->
<!--  { image: sliderImg1 },-->
<!--  { image: sliderImg2 },-->
<!--  { image: sliderImg3 },-->
<!--  { image: sliderImg4 }-->
<!--])-->

<!--const swiperOptions = {-->
<!--  slidesPerView: 1,-->
<!--  spaceBetween: 50,-->
<!--  loop: true,-->
<!--  autoplay: {-->
<!--    delay: 3000,-->
<!--    disableOnInteraction: false-->
<!--  },-->
<!--  pagination: {-->
<!--    el: '.swiper-pagination',-->
<!--    clickable: true-->
<!--  }-->
<!--}-->

<!--let swiperInstance-->

<!--const onSwiper = (swiper) => {-->
<!--  console.log('swipe')-->
<!--  swiperInstance = swiper-->
<!--}-->
<!--const onSlideChange = () => {-->
<!--  console.log('slide change')-->
<!--}-->

<!--const slideTo = (index) => {-->
<!--  console.log(index, swiperInstance)-->
<!--  if (swiperInstance) {-->
<!--    swiperInstance.slideTo(index)-->
<!--  }-->
<!--}-->

<!--const next = () => {-->
<!--  if (swiperInstance) {-->
<!--    swiperInstance.slideNext()-->
<!--  }-->
<!--}-->

<!--const prev = () => {-->
<!--  if (swiperInstance) {-->
<!--    swiperInstance.slidePrev()-->
<!--  }-->
<!--}-->

<!--</script>-->

<!--<template>-->
<!--  <ComponentWrapper>-->
<!--    <div class="px-[16px] pt-[12px] pb-[24px] mb-6">-->
<!--      <swiper @options="swiperOptions" @swiper="onSwiper" @slideChange="onSlideChange" :pagination="{clickable: true}">-->
<!--        <swiper-slide v-for="(slide, index) in slides" :key="index">-->
<!--          <img class="max-h-[280px] mb-[16px] rounded-[20px] object-cover w-full" :src="slide.image"-->
<!--               alt="Slide {{ index + 1 }}"/>-->
<!--          <div class="text-smallText mb-[8px]">-->
<!--            <span class="py-[6px] px-[8px] bg-primary-light rounded-2xl mr-[4px]">12.08.2023</span>-->
<!--            <span class="py-[6px] px-[8px] bg-primary-light rounded-2xl">პოლიტიკა</span>-->
<!--          </div>-->
<!--          <div class="text-headline2">-->
<!--            ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება-->
<!--          </div>-->
<!--          <p class="hidden text-bodyTextRegular text-interface-600  md:block ">განთავსების (ლისტინგის) ორგანიზატორი-->
<!--            სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD</p>-->
<!--        </swiper-slide>-->
<!--      </swiper>-->
<!--      <div>-->
<!--        <button @click="prev">prev</button>-->
<!--        <button @click="next">next</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </ComponentWrapper>-->
<!--</template>-->
<template>
  <ComponentWrapper>
    <section class="px-[16px] pt-[12px] pb-[24px] mb-6">
      <swiper
          :modules="modules"
          :options="swiperOptions"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          autoplay
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img class="relative max-h-[280px] mb-[16px] rounded-[20px] object-cover w-full lg:max-h-[406px]" :src="slide.image"
               alt="Slide {{ index + 1 }}"/>
          <button class="absolute left-0 top-1/4" @click="prev">
            <ArrowLeft/>
          </button>
          <button class="absolute right-0 top-1/4" @click="next">
            <ArrowRight/>
          </button>
          <div class="text-smallText mb-[8px]">
            <span class="py-[6px] px-[8px] bg-primary-light rounded-2xl mr-[4px]">12.08.2023</span>
            <span class="py-[6px] px-[8px] bg-primary-light rounded-2xl">პოლიტიკა</span>
          </div>
          <div class="text-headline2 lg:headline1 lg:mb-2">
            ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება
          </div>
          <p class="hidden text-bodyTextRegular text-interface-600  md:block ">განთავსების (ლისტინგის) ორგანიზატორი
            სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD</p>
        </swiper-slide>
      </swiper>
    </section>
  </ComponentWrapper>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { ref } from 'vue'
import sliderImg1 from '../assets/images/slider-img-1.png'
import sliderImg2 from '../assets/images/slider-img-2.png'
import sliderImg3 from '../assets/images/slider-img-3.png'
import sliderImg4 from '../assets/images/slider-img-4.png'
import SvgArrow from '../assets/svgs/ArrowLeft.vue'
import ArrowLeft from '../assets/svgs/ArrowLeft.vue'
import ArrowRight from '../assets/svgs/ArrowRight.vue'
import ComponentWrapper from '../ui/shared/ComponentWrapper.vue'

const slides = ref([
  { image: sliderImg1 },
  { image: sliderImg2 },
  { image: sliderImg3 },
  { image: sliderImg4 }
])

export default {
  components: {
    ComponentWrapper,
    ArrowRight,
    ArrowLeft,
    SvgArrow,
    Swiper,
    SwiperSlide
  },
  setup () {
    const swiperRef = ref(null)

    const onSwiper = (swiper) => {
      swiperRef.value = swiper
    }

    const onSlideChange = () => {
      console.log('slide change')
    }

    const prev = () => {
      if (swiperRef.value) {
        swiperRef.value.slidePrev()
      }
    }

    const next = () => {
      if (swiperRef.value) {
        swiperRef.value.slideNext()
      }
    }

    const swiperOptions = {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }

    return {
      swiperRef,
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
      slides,
      swiperOptions,
      prev,
      next
    }
  }
}
</script>
