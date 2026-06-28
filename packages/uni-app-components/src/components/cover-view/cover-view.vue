<script setup lang="ts">
import type { CoverViewProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "CoverView",
});

const props = defineProps<CoverViewProps>();
</script>

<template>
  <cover-view v-bind="props">
    <slot></slot>
  </cover-view>
</template>
