<script setup lang="ts">
import type { UniIndexedListProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniIndexedList",
});

const props = defineProps<UniIndexedListProps>();
</script>

<template>
  <uni-indexed-list v-bind="props">
    <slot></slot>
  </uni-indexed-list>
</template>
