<script setup lang="ts">
import type { TextProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Text",
});

const props = defineProps<TextProps>();
</script>

<template>
  <text v-bind="props">
    <slot></slot>
  </text>
</template>
