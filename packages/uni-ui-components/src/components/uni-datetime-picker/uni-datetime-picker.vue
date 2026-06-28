<script setup lang="ts">
import type { UniDatetimePickerProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniDatetimePicker",
});

const props = defineProps<UniDatetimePickerProps>();
</script>

<template>
  <uni-datetime-picker v-bind="props">
    <slot></slot>
  </uni-datetime-picker>
</template>
