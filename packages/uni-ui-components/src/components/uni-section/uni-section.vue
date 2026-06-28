<script setup lang="ts">
import type { UniSectionProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniSection",
});

const props = defineProps<UniSectionProps>();
</script>

<template>
  <uni-section v-bind="props">
    <slot></slot>
    <slot name="right"></slot>
    <slot name="decoration"></slot>
  </uni-section>
</template>
