<script setup lang="ts">
import type { RadioProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Radio",
});

const props = defineProps<RadioProps>();
</script>

<template>
  <radio v-bind="props">
    <slot></slot>
  </radio>
</template>
