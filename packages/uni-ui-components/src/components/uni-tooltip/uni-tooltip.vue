<script setup lang="ts">
import type { UniTooltipProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniTooltip",
});

const props = defineProps<UniTooltipProps>();
</script>

<template>
  <uni-tooltip v-bind="props">
    <slot></slot>
    <slot name="content"></slot>
  </uni-tooltip>
</template>
