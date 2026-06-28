<script setup lang="ts">
import type { UniBreadcrumbProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniBreadcrumb",
});

const props = defineProps<UniBreadcrumbProps>();
</script>

<template>
  <uni-breadcrumb v-bind="props">
    <slot></slot>
  </uni-breadcrumb>
</template>
