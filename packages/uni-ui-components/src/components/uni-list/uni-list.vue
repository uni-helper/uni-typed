<script setup lang="ts">
import type { UniListProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniList",
});

const props = defineProps<UniListProps>();
</script>

<template>
  <uni-list v-bind="props">
    <slot></slot>
  </uni-list>
</template>
