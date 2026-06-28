<script setup lang="ts">
import type { UniSwipeActionItemProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniSwipeActionItem",
});

const props = defineProps<UniSwipeActionItemProps>();
</script>

<template>
  <uni-swipe-action-item v-bind="props">
    <slot></slot>
    <slot name="left"></slot>
    <slot name="right"></slot>
  </uni-swipe-action-item>
</template>
