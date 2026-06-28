<script setup lang="ts">
import type { UniFilePickerProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniFilePicker",
});

const props = defineProps<UniFilePickerProps>();
</script>

<template>
  <uni-file-picker v-bind="props">
    <slot></slot>
  </uni-file-picker>
</template>
