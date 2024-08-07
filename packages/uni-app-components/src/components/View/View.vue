<script setup lang="ts">
import type { ViewProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "View",
});

const props = defineProps<ViewProps>();
</script>

<template>
  <view :props></view>
</template>
