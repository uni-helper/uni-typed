<script setup lang="ts">
import type { AdInteractiveProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "AdInteractive",
});

const props = defineProps<AdInteractiveProps>();
</script>

<template>
  <ad-interactive :props>
    <slot></slot>
  </ad-interactive>
</template>
