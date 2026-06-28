<script setup lang="ts">
import type { UniPopupProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniPopup",
});

const props = defineProps<UniPopupProps>();
</script>

<template>
  <uni-popup v-bind="props">
    <slot></slot>
  </uni-popup>
</template>
