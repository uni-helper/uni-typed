<script setup lang="ts">
import type { UniPopupMessageProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniPopupMessage",
});

const props = defineProps<UniPopupMessageProps>();
</script>

<template>
  <uni-popup-message v-bind="props">
    <slot></slot>
  </uni-popup-message>
</template>
