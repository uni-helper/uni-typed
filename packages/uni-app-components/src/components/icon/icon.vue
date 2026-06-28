<script setup lang="ts">
import type { IconProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Icon",
});

const props = defineProps<IconProps>();
</script>

<template>
  <icon v-bind="props">
    <slot></slot>
  </icon>
</template>
