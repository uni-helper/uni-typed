<script setup lang="ts">
import type { AdRewardedVideoProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "AdRewardedVideo",
});

const props = defineProps<AdRewardedVideoProps>();
</script>

<template>
  <ad-rewarded-video :props>
    <slot></slot>
  </ad-rewarded-video>
</template>
