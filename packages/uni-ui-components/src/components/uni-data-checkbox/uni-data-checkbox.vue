<script setup lang="ts">
import type { UniDataCheckboxProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniDataCheckbox",
});

const props = defineProps<UniDataCheckboxProps>();
</script>

<template>
  <uni-data-checkbox v-bind="props">
    <slot></slot>
  </uni-data-checkbox>
</template>
