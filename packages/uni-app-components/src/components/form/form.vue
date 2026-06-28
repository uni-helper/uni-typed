<script setup lang="ts">
import type { FormProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "Form",
});

const props = defineProps<FormProps>();
</script>

<template>
  <form v-bind="props">
    <slot></slot>
  </form>
</template>
