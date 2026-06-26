<script setup lang="ts">
import type { AdFullscreenVideoProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "AdFullscreenVideo",
});

const props = defineProps<AdFullscreenVideoProps>();
</script>

<template>
  <ad-fullscreen-video :props>
    <slot></slot>
  </ad-fullscreen-video>
</template>
