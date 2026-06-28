<script setup lang="ts">
import type { UniSearchBarProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniSearchBar",
});

const props = defineProps<UniSearchBarProps>();
</script>

<template>
  <uni-search-bar v-bind="props">
    <slot></slot>
    <slot name="searchIcon"></slot>
    <slot name="clearIcon"></slot>
  </uni-search-bar>
</template>
