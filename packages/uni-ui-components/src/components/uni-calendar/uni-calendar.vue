<script setup lang="ts">
import type { UniCalendarProps } from "@uni-helper/uni-ui-types";

defineOptions({
  name: "UniCalendar",
});

const props = defineProps<UniCalendarProps>();
</script>

<template>
  <uni-calendar v-bind="props">
    <slot></slot>
  </uni-calendar>
</template>
