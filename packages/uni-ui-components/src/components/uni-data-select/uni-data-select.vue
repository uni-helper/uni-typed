<script setup lang="ts">
import type { UniDataSelectProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniDataSelect",
});

const props = defineProps<UniDataSelectProps>();
</script>

<template>
  <uni-data-select v-bind="props">
    <slot name="empty"></slot>
    <slot name="option"></slot>
    <slot name="selected"></slot>
  </uni-data-select>
</template>
