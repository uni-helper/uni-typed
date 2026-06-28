<script setup lang="ts">
import type { UniNumberBoxProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniNumberBox",
});

const props = defineProps<UniNumberBoxProps>();
</script>

<template>
  <uni-number-box v-bind="props">
    <slot></slot>
  </uni-number-box>
</template>
