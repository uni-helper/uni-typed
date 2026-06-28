<script setup lang="ts">
import type { MatchMediaProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "MatchMedia",
});

const props = defineProps<MatchMediaProps>();
</script>

<template>
  <match-media v-bind="props">
    <slot></slot>
  </match-media>
</template>
