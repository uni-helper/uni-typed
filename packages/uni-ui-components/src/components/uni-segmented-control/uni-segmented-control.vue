<script setup lang="ts">
import type { UniSegmentedControlProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniSegmentedControl",
});

const props = defineProps<UniSegmentedControlProps>();
</script>

<template>
  <uni-segmented-control v-bind="props">
    <slot></slot>
  </uni-segmented-control>
</template>
