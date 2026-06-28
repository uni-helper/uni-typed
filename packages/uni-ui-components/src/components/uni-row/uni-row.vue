<script setup lang="ts">
import type { UniRowProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniRow",
});

const props = defineProps<UniRowProps>();
</script>

<template>
  <uni-row v-bind="props">
    <slot></slot>
  </uni-row>
</template>
