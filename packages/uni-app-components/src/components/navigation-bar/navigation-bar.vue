<script setup lang="ts">
import type { NavigationBarProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "NavigationBar",
});

const props = defineProps<NavigationBarProps>();
</script>

<template>
  <navigation-bar v-bind="props">
    <slot></slot>
  </navigation-bar>
</template>
