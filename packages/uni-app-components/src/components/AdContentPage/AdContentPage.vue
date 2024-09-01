<script setup lang="ts">
import type { AdContentPageProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "AdContentPage",
});

const props = defineProps<AdContentPageProps>();
</script>

<template>
  <ad-content-page :props>
    <slot></slot>
  </ad-content-page>
</template>
