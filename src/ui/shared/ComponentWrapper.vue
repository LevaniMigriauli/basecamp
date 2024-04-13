<template>
  <div class="bg-interface-white rounded-[20px] ${paddingClass} mb-6">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Accept padding as a prop
const props = defineProps({
  padding: {
    type: String,
    default: 'p-4'
  }
});

const paddingClass = computed(() => {
  return props.padding;
});
</script>