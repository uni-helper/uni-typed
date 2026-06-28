<script setup lang="ts">
import type { UniBadgeProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniBadge",
});

const props = defineProps<UniBadgeProps>();
</script>

<template>
  <uni-badge v-bind="props">
    <slot></slot>
  </uni-badge>
</template>
