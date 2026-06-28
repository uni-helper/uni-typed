<script setup lang="ts">
import type { PickerProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Picker",
});

const props = defineProps<PickerProps>();
</script>

<template>
  <picker v-bind="props">
    <slot></slot>
  </picker>
</template>
