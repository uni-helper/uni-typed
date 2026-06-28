<script setup lang="ts">
import type { UniPopupDialogProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniPopupDialog",
});

const props = defineProps<UniPopupDialogProps>();
</script>

<template>
  <uni-popup-dialog v-bind="props">
    <slot></slot>
  </uni-popup-dialog>
</template>
