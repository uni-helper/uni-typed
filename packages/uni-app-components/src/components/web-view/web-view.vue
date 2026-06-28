<script setup lang="ts">
import type { WebViewProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "WebView",
});

const props = defineProps<WebViewProps>();
</script>

<template>
  <web-view v-bind="props">
    <slot></slot>
  </web-view>
</template>
