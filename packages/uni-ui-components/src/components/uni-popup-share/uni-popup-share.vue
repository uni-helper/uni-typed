<script setup lang="ts">
import type { UniPopupShareProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniPopupShare",
});

const props = defineProps<UniPopupShareProps>();
</script>

<template>
  <uni-popup-share v-bind="props">
    <slot></slot>
  </uni-popup-share>
</template>
