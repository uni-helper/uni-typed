<script setup lang="ts">
import type { PageMetaProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "PageMeta",
});

const props = defineProps<PageMetaProps>();
</script>

<template>
  <page-meta v-bind="props">
    <slot></slot>
  </page-meta>
</template>
