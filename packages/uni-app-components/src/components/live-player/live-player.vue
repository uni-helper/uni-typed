<script setup lang="ts">
import type { LivePlayerProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "LivePlayer",
});

const props = defineProps<LivePlayerProps>();
</script>

<template>
  <live-player v-bind="props">
    <slot></slot>
  </live-player>
</template>
