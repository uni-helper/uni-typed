<script setup lang="ts">
import type { NavigatorProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Navigator",
});

const props = defineProps<NavigatorProps>();
</script>

<template>
  <navigator v-bind="props">
    <slot></slot>
  </navigator>
</template>
