<script setup lang="ts">
import type { UniGroupProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniGroup",
});

const props = defineProps<UniGroupProps>();
</script>

<template>
  <uni-group v-bind="props">
    <slot></slot>
  </uni-group>
</template>
