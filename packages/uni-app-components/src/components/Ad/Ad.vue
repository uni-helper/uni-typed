<script setup lang="ts">
import type { AdProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Ad",
});

const props = defineProps<AdProps>();
</script>

<template>
  <ad :props>
    <slot></slot>
  </ad>
</template>
