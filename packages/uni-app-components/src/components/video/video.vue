<script setup lang="ts">
import type { VideoProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Video",
});

const props = defineProps<VideoProps>();
</script>

<template>
  <video v-bind="props">
    <slot></slot>
  </video>
</template>
