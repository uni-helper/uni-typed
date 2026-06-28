<script setup lang="ts">
import type { EditorProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Editor",
});

const props = defineProps<EditorProps>();
</script>

<template>
  <editor v-bind="props">
    <slot></slot>
  </editor>
</template>
