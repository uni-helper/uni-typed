<script setup lang="ts">
import type { UniTransitionProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniTransition",
});

const props = defineProps<UniTransitionProps>();
</script>

<template>
  <uni-transition v-bind="props">
    <slot></slot>
  </uni-transition>
</template>
