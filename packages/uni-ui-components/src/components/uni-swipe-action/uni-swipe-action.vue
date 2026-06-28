<script setup lang="ts">
import type { UniSwipeActionProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniSwipeAction",
});

const props = defineProps<UniSwipeActionProps>();
</script>

<template>
  <uni-swipe-action v-bind="props">
    <slot></slot>
  </uni-swipe-action>
</template>
