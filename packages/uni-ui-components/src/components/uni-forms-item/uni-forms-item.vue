<script setup lang="ts">
import type { UniFormsItemProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniFormsItem",
});

const props = defineProps<UniFormsItemProps>();
</script>

<template>
  <uni-forms-item v-bind="props">
    <slot></slot>
    <slot name="label"></slot>
  </uni-forms-item>
</template>
