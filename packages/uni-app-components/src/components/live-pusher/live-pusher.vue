<script setup lang="ts">
import type { LivePusherProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "LivePusher",
});

const props = defineProps<LivePusherProps>();
</script>

<template>
  <live-pusher v-bind="props">
    <slot></slot>
  </live-pusher>
</template>
