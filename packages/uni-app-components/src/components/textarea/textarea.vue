<script setup lang="ts">
import type { TextareaProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Textarea",
});

const props = defineProps<TextareaProps>();
</script>

<template>
  <textarea v-bind="props">
    <slot></slot>
  </textarea>
</template>
