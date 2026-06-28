<script setup lang="ts">
import type { MovableAreaProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "MovableArea",
});

const props = defineProps<MovableAreaProps>();
</script>

<template>
  <movable-area v-bind="props">
    <slot></slot>
  </movable-area>
</template>
