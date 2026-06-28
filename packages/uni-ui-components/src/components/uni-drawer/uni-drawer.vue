<script setup lang="ts">
import type { UniDrawerProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniDrawer",
});

const props = defineProps<UniDrawerProps>();
</script>

<template>
  <uni-drawer v-bind="props">
    <slot></slot>
  </uni-drawer>
</template>
