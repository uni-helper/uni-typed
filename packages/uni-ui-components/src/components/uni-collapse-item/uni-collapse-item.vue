<script setup lang="ts">
import type { UniCollapseItemProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniCollapseItem",
});

const props = defineProps<UniCollapseItemProps>();
</script>

<template>
  <uni-collapse-item v-bind="props">
    <slot></slot>
  </uni-collapse-item>
</template>
