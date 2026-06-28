<script setup lang="ts">
import type { UniLoadMoreProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniLoadMore",
});

const props = defineProps<UniLoadMoreProps>();
</script>

<template>
  <uni-load-more v-bind="props">
    <slot></slot>
  </uni-load-more>
</template>
