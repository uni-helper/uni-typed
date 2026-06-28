<script setup lang="ts">
import type { UniRateProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniRate",
});

const props = defineProps<UniRateProps>();
</script>

<template>
  <uni-rate v-bind="props">
    <slot></slot>
  </uni-rate>
</template>
