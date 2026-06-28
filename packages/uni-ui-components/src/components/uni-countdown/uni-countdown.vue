<script setup lang="ts">
import type { UniCountdownProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniCountdown",
});

const props = defineProps<UniCountdownProps>();
</script>

<template>
  <uni-countdown v-bind="props">
    <slot></slot>
  </uni-countdown>
</template>
