<script setup lang="ts">
import type { UniDateformatProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniDateformat",
});

const props = defineProps<UniDateformatProps>();
</script>

<template>
  <uni-dateformat v-bind="props">
    <slot></slot>
  </uni-dateformat>
</template>
