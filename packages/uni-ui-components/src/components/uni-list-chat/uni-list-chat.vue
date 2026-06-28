<script setup lang="ts">
import type { UniListChatProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniListChat",
});

const props = defineProps<UniListChatProps>();
</script>

<template>
  <uni-list-chat v-bind="props">
    <slot></slot>
  </uni-list-chat>
</template>
