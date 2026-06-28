<script setup lang="ts">
import type { UniFavProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniFav",
});

const props = defineProps<UniFavProps>();
</script>

<template>
  <uni-fav v-bind="props">
    <slot></slot>
  </uni-fav>
</template>
