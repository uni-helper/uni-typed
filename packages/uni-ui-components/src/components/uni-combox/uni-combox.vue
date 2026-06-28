<script setup lang="ts">
import type { UniComboxProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniCombox",
});

const props = defineProps<UniComboxProps>();
</script>

<template>
  <uni-combox v-bind="props">
    <slot></slot>
  </uni-combox>
</template>
