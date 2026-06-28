<script setup lang="ts">
import type { UniFabProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniFab",
});

const props = defineProps<UniFabProps>();
</script>

<template>
  <uni-fab v-bind="props">
    <slot></slot>
  </uni-fab>
</template>
