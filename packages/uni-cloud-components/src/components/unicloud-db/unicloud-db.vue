<script setup lang="ts">
import type { UnicloudDbProps } from "@uni-helper/uni-cloud-types";

defineOptions({
  name: "UnicloudDb",
});

const props = defineProps<UnicloudDbProps>();
</script>

<template>
  <unicloud-db v-bind="props">
    <slot></slot>
  </unicloud-db>
</template>
