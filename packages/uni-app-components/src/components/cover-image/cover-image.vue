<script setup lang="ts">
import type { CoverImageProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "CoverImage",
});

const props = defineProps<CoverImageProps>();
</script>

<template>
  <cover-image v-bind="props">
    <slot></slot>
  </cover-image>
</template>
