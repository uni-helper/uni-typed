<script setup lang="ts">
import type { UniSwiperDotProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniSwiperDot",
});

const props = defineProps<UniSwiperDotProps>();
</script>

<template>
  <uni-swiper-dot v-bind="props">
    <slot></slot>
  </uni-swiper-dot>
</template>
