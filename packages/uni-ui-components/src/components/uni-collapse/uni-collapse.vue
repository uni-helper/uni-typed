<script setup lang="ts">
import type { UniCollapseProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniCollapse",
});

const props = defineProps<UniCollapseProps>();
</script>

<template>
  <uni-collapse v-bind="props">
    <slot></slot>
    <slot name="title"></slot>
  </uni-collapse>
</template>
