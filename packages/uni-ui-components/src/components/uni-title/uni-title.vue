<script setup lang="ts">
import type { UniTitleProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniTitle",
});

const props = defineProps<UniTitleProps>();
</script>

<template>
  <uni-title v-bind="props">
    <slot></slot>
  </uni-title>
</template>
