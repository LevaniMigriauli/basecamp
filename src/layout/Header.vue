<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  computed,
  reactive,
  watch,
  nextTick
} from 'vue'
import logo from '../assets/svgs/Icons/Vector.svg'
import searchIcon from '../assets/svgs/Icons/Search.svg'
import menuIcon from '../assets/svgs/Icons/menu_24px.svg'
import instagramIcon from '../assets/svgs/Icons/Instagram.svg'
import facebookIcon from '../assets/svgs/Icons/Facebook.svg'
import arrowIcon from '../assets/svgs/Icons/arrowIcon.svg'

const menuOpen = ref(false)
const isInputFocused = ref(false)
const windowWidth = ref(window.innerWidth)

const displayConfig = computed(() => {
  return {
    showInput: windowWidth.value > 640,
    showMediaIcons: windowWidth.value > 1024,
    hideMediaIcons: windowWidth.value < 1024,
    desktopViewActive: windowWidth.value > 1240,
    showVisibleItem: windowWidth.value > 1920
  }
})

function toggleMenu () {
  menuOpen.value = !menuOpen.value
}

function updateWidth () {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const menuItems = reactive([
  { id: 1, label: 'პოლიტიკა ' },
  { id: 2, label: 'საზოგადოება' },
  { id: 3, label: 'სამართალი' },
  { id: 4, label: 'ბიზნესი ' },
  { id: 5, label: 'კრიმინალი' },
  { id: 6, label: 'ეკონომიკა' },
  { id: 7, label: 'ბიზნესი და ეკონომიკა' },
  { id: 8, label: 'რელიგია' },
  { id: 9, label: 'სპორტი' }
  // { id: 10, label: "სპორტი" },
  // { id: 11, label: "სპორტი" },
  // { id: 12, label: "სპორტი" },
])

const visibleItems = ref([])
const overflowItems = ref([])
const containerRef = ref(null)
const MAX_ITEM_WIDTH = 200
const MAX_VISIBLE_ITEMS = 3
const LARGE_SCREEN_MAX_VISIBLE_ITEMS = 4

function checkAndAdjustItems () {
  const itemsToRemove = []
  visibleItems.value.forEach((item) => {
    if (item.label.length > 15) {
      itemsToRemove.push(item)
    }
  })

  visibleItems.value = visibleItems.value.filter(
      (item) => !itemsToRemove.includes(item)
  )

  overflowItems.value.push(...itemsToRemove)
}

function adjustMenuItems () {
  const maxVisibleItems = displayConfig.value.showVisibleItem
      ? LARGE_SCREEN_MAX_VISIBLE_ITEMS
      : MAX_VISIBLE_ITEMS

  const itemsToShow = menuItems.slice(0, maxVisibleItems)
  const itemsToHide = menuItems.slice(maxVisibleItems)
  visibleItems.value = itemsToShow
  overflowItems.value = itemsToHide
  checkAndAdjustItems()
}

watch(windowWidth, visibleItems, adjustMenuItems)
onMounted(() => {
  adjustMenuItems()
  window.addEventListener('resize', adjustMenuItems)
})

onUnmounted(() => {
  window.removeEventListener('resize', adjustMenuItems)
})

function toggleOverflowMenu () {
  menuOpen.value = !menuOpen.value
}

const menuItem = computed(() => {
  return menuItems.map((item) => ({
    ...item,
    label: item.label
  }))
})
</script>

<template>
  <header class="w-full bg-white mb-4 md:mb-10">
    <div
        class="flex justify-between p-4 items-center lg:pt-8 lg:pb-8 lg:pr-12 lg:pl-[57px] xl:pr-[304px] xl:pl-[304px]"
    >
      <div class="md:flex gap-[25px] items-center">
        <img :src="logo" alt="Logo" class="lg:w-[137.5px] lg:h-10"/>
        <div
            class="hidden md:block w-[2px] h-8 bg-interface-200 rounded-[64px]"
        ></div>
      </div>
      <div
          ref="containerRef"
          v-if="displayConfig.desktopViewActive"
          class="flex gap-8 items-center"
      >
        <ul class="flex gap-8 items-center">
          <li v-for="item in visibleItems" :key="item.id">
            <a
                href="#"
                class="block text-interface-600 text-bodyTextUpperCase tracking-tightest text-base font-medium hover:text-primary-primary"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
        <div class="relative">
          <button
              @click="toggleOverflowMenu"
              class="flex items-center text-interface-600 text-bodyTextUpperCase tracking-tightest text-base font-medium cursor-pointer hover:text-primary-primary"
          >
            სხვა
              <img :src="arrowIcon" class="hover-fill p-2"/>
          </button>
          <transition name="fade">
            <div
                v-show="menuOpen"
                class="bg-white z-20 w-[180px] rounded-[16px] shadow-soft absolute top-8 flex max-h-[400px] overflow-y-auto custom-scrollbar"
            >
              <ul>
                <li
                    v-for="item in overflowItems"
                    :key="item.id"
                    class="pt-4 pb-4 pl-5"
                >
                  <a
                      href="#"
                      class="block text-interface-600 text-bodyTextUpperCase tracking-tightest text-base font-medium hover:text-primary-primary"
                  >
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>

      <div class="flex gap-2">
        <div
            class="flex gap-2 items-center lg:mr-2"
            v-if="displayConfig.showMediaIcons"
        >
          <img
              :src="instagramIcon"
              alt="instagram icon"
              class="h-8 p-[6px] bg-interface-300 rounded-[64px] cursor-pointer"
          />
          <img
              :src="facebookIcon"
              alt="facebook icon"
              class="h-8 p-[6px] bg-interface-300 rounded-[64px] cursor-pointer"
          />
        </div>
        <div :class="{
             'sm:border-primary-primary': isInputFocused,
             'sm:border-transparent': !isInputFocused,
             'sm:border-2': true,
             'sm:h-12': true,
             'sm:w-56': true,
             'sm:bg-interface-300': true,
             'sm:flex': true,
             'sm:rounded-[64px]': true,
             }"
        >
          <input
              @focus="isInputFocused = true"
              @blur="isInputFocused = false"
              v-if="displayConfig.showInput"
              type="text"
              placeholder="ძიება"
              class="rounded-full py-3 pl-4 text-sm focus:outline-none bg-interface-300 caret-interface-900"
          />
          <button
              class="bg-interface-300 p-3 rounded-[64px] h-12 cursor-pointer sm:bg-transparent"
          >
            <img :src="searchIcon" alt="Search Icon"/>
          </button>
        </div>
        <div
            v-if="!displayConfig.desktopViewActive"
            class="bg-interface-300 p-3 rounded-[64px] h-12 cursor-pointer"
        >
          <button @click="toggleMenu">
            <img :src="menuIcon" alt="menu icon"/>
          </button>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
          v-if="menuOpen && !displayConfig.desktopViewActive"
          class="bg-white w-full absolute z-20 pl-4 pt-4 pb-6 lg:pt-[34px] lg:pl-12 lg:pb-[97px]"
      >
        <ul>
          <li v-for="item in menuItem" :key="item.id">
            <a
                href="#"
                class="block text-interface-600 text-bodyTextUpperCase tracking-tightest text-base font-medium mb-8 lg:mb-10"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <div
            v-if="displayConfig.hideMediaIcons"
            class="w-full flex items-center justify-center"
        >
          <div class="flex gap-2">
            <img
                :src="instagramIcon"
                alt="instagram icon"
                class="p-[6px] bg-interface-300 rounded-[64px] cursor-pointer"
            />
            <img
                :src="facebookIcon"
                alt="facebook icon"
                class="p-[6px] bg-interface-300 rounded-[64px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

input::placeholder {
  color: #1d2d35;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.24px;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 16px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #b7c2ef6a;
  border-radius: 5px;
  border: 1px solid #d0d7f5;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #989df5;
}
</style>