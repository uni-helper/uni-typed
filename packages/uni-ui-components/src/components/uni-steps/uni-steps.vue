<script setup lang="ts">
import type { UniStepsProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniSteps",
});

const props = defineProps<UniStepsProps>();
</script>

<template>
  <uni-steps v-bind="props">
    <slot></slot>
  </uni-steps>
</template>
