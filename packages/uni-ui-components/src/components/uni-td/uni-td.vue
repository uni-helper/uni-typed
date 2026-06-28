<script setup lang="ts">
import type { UniTdProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniTd",
});

const props = defineProps<UniTdProps>();
</script>

<template>
  <uni-td v-bind="props">
    <slot></slot>
  </uni-td>
</template>
