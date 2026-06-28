<script setup lang="ts">
import type { UniBreadcrumbItemProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniBreadcrumbItem",
});

const props = defineProps<UniBreadcrumbItemProps>();
</script>

<template>
  <uni-breadcrumb-item v-bind="props">
    <slot></slot>
  </uni-breadcrumb-item>
</template>
