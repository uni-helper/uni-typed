<script setup lang="ts">
import type { UniDataPickerviewProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniDataPickerview",
});

const props = defineProps<UniDataPickerviewProps>();
</script>

<template>
  <uni-data-pickerview v-bind="props">
    <slot></slot>
  </uni-data-pickerview>
</template>
