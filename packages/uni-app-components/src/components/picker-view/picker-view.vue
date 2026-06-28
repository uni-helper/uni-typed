<script setup lang="ts">
import type { PickerViewProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "PickerView",
});

const props = defineProps<PickerViewProps>();
</script>

<template>
  <picker-view v-bind="props">
    <slot></slot>
  </picker-view>
</template>
