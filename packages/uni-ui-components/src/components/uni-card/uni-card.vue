<script setup lang="ts">
import type { UniCardProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniCard",
});

const props = defineProps<UniCardProps>();
</script>

<template>
  <uni-card v-bind="props">
    <slot name="cover"></slot>
    <slot name="title"></slot>
    <slot name="actions"></slot>
  </uni-card>
</template>
