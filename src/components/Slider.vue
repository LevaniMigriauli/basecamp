<template>
  <ComponentWrapper>
    <section class="px-[16px] pt-[12px] pb-[24px]">
      <div class="relative mb-[16px] ">
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
            <img class="relative max-h-[280px] rounded-[20px] object-cover w-full lg:max-h-[406px]"
                 :src="slide.image"
                 alt="Slide {{ index + 1 }}"/>
          </swiper-slide>
        </swiper>
        <button class="absolute left-0 top-1/2 translate-y-[-50%] z-10" @click="prev">
          <ArrowLeft/>
        </button>
        <button class="absolute right-0 top-1/2 translate-y-[-50%] z-10" @click="next">
          <ArrowRight/>
        </button>
      </div>
      <div class="text-smallText mb-[8px]">
        <span class="py-[6px] px-[8px] bg-primary-light rounded-2xl mr-[4px]">12.08.2023</span>
        <span class="py-[6px] px-[8px] bg-primary-light rounded-2xl">პოლიტიკა</span>
      </div>
      <div class="text-headline2 lg:headline1 lg:mb-2">
        ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება
      </div>
      <p class="hidden text-bodyTextRegular text-interface-600  md:block ">განთავსების (ლისტინგის) ორგანიზატორი
        სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი - 1000 USD</p>
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
