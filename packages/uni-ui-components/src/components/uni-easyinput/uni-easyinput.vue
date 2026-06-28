<script setup lang="ts">
import type { UniEasyinputProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniEasyinput",
});

const props = defineProps<UniEasyinputProps>();
</script>

<template>
  <uni-easyinput v-bind="props">
    <slot></slot>
  </uni-easyinput>
</template>
