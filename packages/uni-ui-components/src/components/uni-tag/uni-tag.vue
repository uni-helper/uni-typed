<script setup lang="ts">
import type { UniTagProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniTag",
});

const props = defineProps<UniTagProps>();
</script>

<template>
  <uni-tag v-bind="props">
    <slot></slot>
  </uni-tag>
</template>
