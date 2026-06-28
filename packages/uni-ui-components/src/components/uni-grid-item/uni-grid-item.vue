<script setup lang="ts">
import type { UniGridItemProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniGridItem",
});

const props = defineProps<UniGridItemProps>();
</script>

<template>
  <uni-grid-item v-bind="props">
    <slot></slot>
  </uni-grid-item>
</template>
