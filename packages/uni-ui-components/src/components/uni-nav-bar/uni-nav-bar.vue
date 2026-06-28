<script setup lang="ts">
import type { UniNavBarProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniNavBar",
});

const props = defineProps<UniNavBarProps>();
</script>

<template>
  <uni-nav-bar v-bind="props">
    <slot></slot>
    <slot name="left"></slot>
    <slot name="right"></slot>
  </uni-nav-bar>
</template>
