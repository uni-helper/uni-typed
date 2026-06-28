<script setup lang="ts">
import type { SwiperProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Swiper",
});

const props = defineProps<SwiperProps>();
</script>

<template>
  <swiper v-bind="props">
    <slot></slot>
  </swiper>
</template>
