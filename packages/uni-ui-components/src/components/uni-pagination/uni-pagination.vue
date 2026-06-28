<script setup lang="ts">
import type { UniPaginationProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniPagination",
});

const props = defineProps<UniPaginationProps>();
</script>

<template>
  <uni-pagination v-bind="props">
    <slot></slot>
  </uni-pagination>
</template>
