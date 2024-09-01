<script setup lang="ts">
import type { AdDrawProps } from "@uni-helper/uni-app-types";

defineOptions({
  name: "AdDraw",
});

const props = defineProps<AdDrawProps>();
</script>

<template>
  <ad-draw :props></ad-draw>
</template>
