<script setup lang="ts">
import type { SwitchProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Switch",
});

const props = defineProps<SwitchProps>();
</script>

<template>
  <switch v-bind="props">
    <slot></slot>
  </switch>
</template>
