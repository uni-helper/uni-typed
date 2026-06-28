<script setup lang="ts">
import type { CheckboxGroupProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "CheckboxGroup",
});

const props = defineProps<CheckboxGroupProps>();
</script>

<template>
  <checkbox-group v-bind="props">
    <slot></slot>
  </checkbox-group>
</template>
