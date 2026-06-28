<script setup lang="ts">
import type { UniTableProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniTable",
});

const props = defineProps<UniTableProps>();
</script>

<template>
  <uni-table v-bind="props">
    <slot></slot>
  </uni-table>
</template>
