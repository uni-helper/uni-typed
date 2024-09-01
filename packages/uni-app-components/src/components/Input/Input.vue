<script setup lang="ts">
import type { InputProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Input",
});

const props = defineProps<InputProps>();
</script>

<template>
  <input :props>
    <slot></slot>
  </input>
</template>
