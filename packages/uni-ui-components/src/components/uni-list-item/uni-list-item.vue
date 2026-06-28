<script setup lang="ts">
import type { UniListItemProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniListItem",
});

const props = defineProps<UniListItemProps>();
</script>

<template>
  <uni-list-item v-bind="props">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </uni-list-item>
</template>
