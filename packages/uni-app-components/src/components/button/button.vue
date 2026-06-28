<script setup lang="ts">
import type { ButtonProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Button",
});

const props = defineProps<ButtonProps>();
</script>

<template>
  <button v-bind="props">
    <slot></slot>
  </button>
</template>
