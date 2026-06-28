<script setup lang="ts">
import type { UniGridProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniGrid",
});

const props = defineProps<UniGridProps>();
</script>

<template>
  <uni-grid v-bind="props">
    <slot></slot>
  </uni-grid>
</template>
