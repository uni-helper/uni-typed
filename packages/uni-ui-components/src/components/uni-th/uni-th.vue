<script setup lang="ts">
import type { UniThProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniTh",
});

const props = defineProps<UniThProps>();
</script>

<template>
  <uni-th v-bind="props">
    <slot></slot>
  </uni-th>
</template>
