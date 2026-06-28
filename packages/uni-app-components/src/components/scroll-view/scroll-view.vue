<script setup lang="ts">
import type { ScrollViewProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "ScrollView",
});

const props = defineProps<ScrollViewProps>();
</script>

<template>
  <scroll-view v-bind="props">
    <slot></slot>
  </scroll-view>
</template>
