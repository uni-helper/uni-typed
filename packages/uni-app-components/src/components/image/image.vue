<script setup lang="ts">
import type { ImageProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Image",
});

const props = defineProps<ImageProps>();
</script>

<template>
  <image v-bind="props">
    <slot></slot>
  </image>
</template>
