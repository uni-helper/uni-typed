<script setup lang="ts">
import type { RadioGroupProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "RadioGroup",
});

const props = defineProps<RadioGroupProps>();
</script>

<template>
  <radio-group v-bind="props">
    <slot></slot>
  </radio-group>
</template>
