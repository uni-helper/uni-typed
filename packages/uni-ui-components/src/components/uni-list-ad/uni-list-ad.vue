<script setup lang="ts">
import type { UniListAdProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniListAd",
});

const props = defineProps<UniListAdProps>();
</script>

<template>
  <uni-list-ad v-bind="props">
    <slot></slot>
  </uni-list-ad>
</template>
