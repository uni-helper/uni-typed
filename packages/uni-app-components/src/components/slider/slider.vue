<script setup lang="ts">
import type { SliderProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Slider",
});

const props = defineProps<SliderProps>();
</script>

<template>
  <slider v-bind="props">
    <slot></slot>
  </slider>
</template>
