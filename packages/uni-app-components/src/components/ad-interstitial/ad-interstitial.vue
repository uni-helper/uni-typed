<script setup lang="ts">
import type { AdInterstitialProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "AdInterstitial",
});

const props = defineProps<AdInterstitialProps>();
</script>

<template>
  <ad-interstitial :props>
    <slot></slot>
  </ad-interstitial>
</template>
