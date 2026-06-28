<script setup lang="ts">
import type { UniGoodsNavProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniGoodsNav",
});

const props = defineProps<UniGoodsNavProps>();
</script>

<template>
  <uni-goods-nav v-bind="props">
    <slot></slot>
  </uni-goods-nav>
</template>
