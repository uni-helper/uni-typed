<script setup lang="ts">
import type { LabelProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Label",
});

const props = defineProps<LabelProps>();
</script>

<template>
  <label v-bind="props">
    <slot></slot>
  </label>
</template>
