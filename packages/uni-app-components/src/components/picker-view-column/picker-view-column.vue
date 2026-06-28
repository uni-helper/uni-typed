<script setup lang="ts">
import type { PickerViewColumnProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "PickerViewColumn",
});

const props = defineProps<PickerViewColumnProps>();
</script>

<template>
  <picker-view-column v-bind="props">
    <slot></slot>
  </picker-view-column>
</template>
