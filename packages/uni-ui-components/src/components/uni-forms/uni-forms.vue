<script setup lang="ts">
import type { UniFormsProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniForms",
});

const props = defineProps<UniFormsProps>();
</script>

<template>
  <uni-forms v-bind="props">
    <slot></slot>
  </uni-forms>
</template>
