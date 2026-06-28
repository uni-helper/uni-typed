<script setup lang="ts">
import type { ProgressProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Progress",
});

const props = defineProps<ProgressProps>();
</script>

<template>
  <progress v-bind="props">
    <slot></slot>
  </progress>
</template>
