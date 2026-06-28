<script setup lang="ts">
import type { RichTextProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "RichText",
});

const props = defineProps<RichTextProps>();
</script>

<template>
  <rich-text v-bind="props">
    <slot></slot>
  </rich-text>
</template>
