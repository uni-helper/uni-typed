<script setup lang="ts">
import type { UniDataPickerProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniDataPicker",
});

const props = defineProps<UniDataPickerProps>();
</script>

<template>
  <uni-data-picker v-bind="props">
    <slot></slot>
  </uni-data-picker>
</template>
