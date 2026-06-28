<script setup lang="ts">
import type { UniColProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniCol",
});

const props = defineProps<UniColProps>();
</script>

<template>
  <uni-col v-bind="props">
    <slot></slot>
  </uni-col>
</template>
