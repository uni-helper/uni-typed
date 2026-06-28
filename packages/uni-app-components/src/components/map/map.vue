<script setup lang="ts">
import type { MapProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Map",
});

const props = defineProps<MapProps>();
</script>

<template>
  <map v-bind="props">
    <slot></slot>
  </map>
</template>
