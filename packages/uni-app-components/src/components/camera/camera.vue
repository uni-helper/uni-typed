<script setup lang="ts">
import type { CameraProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Camera",
});

const props = defineProps<CameraProps>();
</script>

<template>
  <camera v-bind="props">
    <slot></slot>
  </camera>
</template>
