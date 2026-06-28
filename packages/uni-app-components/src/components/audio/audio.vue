<script setup lang="ts">
import type { AudioProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Audio",
});

const props = defineProps<AudioProps>();
</script>

<template>
  <audio v-bind="props">
    <slot></slot>
  </audio>
</template>
