<script setup lang="ts">
import type { SwiperItemProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "SwiperItem",
});

const props = defineProps<SwiperItemProps>();
</script>

<template>
  <swiper-item v-bind="props">
    <slot></slot>
  </swiper-item>
</template>
