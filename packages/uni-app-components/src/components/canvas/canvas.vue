<script setup lang="ts">
import type { CanvasProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Canvas",
});

const props = defineProps<CanvasProps>();
</script>

<template>
  <canvas v-bind="props">
    <slot></slot>
  </canvas>
</template>
