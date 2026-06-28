<script setup lang="ts">
import type { CheckboxProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Checkbox",
});

const props = defineProps<CheckboxProps>();
</script>

<template>
  <checkbox v-bind="props">
    <slot></slot>
  </checkbox>
</template>
