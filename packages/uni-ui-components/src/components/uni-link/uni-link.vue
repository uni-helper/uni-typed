<script setup lang="ts">
import type { UniLinkProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniLink",
});

const props = defineProps<UniLinkProps>();
</script>

<template>
  <uni-link v-bind="props">
    <slot></slot>
  </uni-link>
</template>
