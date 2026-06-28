<script setup lang="ts">
import type { UniTrProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniTr",
});

const props = defineProps<UniTrProps>();
</script>

<template>
  <uni-tr v-bind="props">
    <slot></slot>
  </uni-tr>
</template>
