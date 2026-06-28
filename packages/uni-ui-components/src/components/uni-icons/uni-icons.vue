<script setup lang="ts">
import type { UniIconsProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniIcons",
});

const props = defineProps<UniIconsProps>();
</script>

<template>
  <uni-icons v-bind="props">
    <slot></slot>
  </uni-icons>
</template>
