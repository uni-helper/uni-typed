<script setup lang="ts">
import type { UniNoticeBarProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniNoticeBar",
});

const props = defineProps<UniNoticeBarProps>();
</script>

<template>
  <uni-notice-bar v-bind="props">
    <slot></slot>
  </uni-notice-bar>
</template>
