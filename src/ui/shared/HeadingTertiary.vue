<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  textContent: {
    type: String,
    required: true
  }
});
</script>

<template>
  <h3 class="mb-[27px] text-headline2Mobile md:text-headline2">{{ textContent }}</h3>
</template>