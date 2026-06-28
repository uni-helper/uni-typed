<script setup lang="ts">
import type { MovableViewProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "MovableView",
});

const props = defineProps<MovableViewProps>();
</script>

<template>
  <movable-view v-bind="props">
    <slot></slot>
  </movable-view>
</template>
