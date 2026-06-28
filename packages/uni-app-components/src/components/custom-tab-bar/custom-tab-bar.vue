<script setup lang="ts">
import type { CustomTabBarProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "CustomTabBar",
});

const props = defineProps<CustomTabBarProps>();
</script>

<template>
  <custom-tab-bar v-bind="props">
    <slot></slot>
  </custom-tab-bar>
</template>
