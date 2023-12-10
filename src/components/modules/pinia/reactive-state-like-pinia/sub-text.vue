<script lang="ts" setup>
import { reactiveState } from "./state.ts";
</script>

<template>
  <span>{{ JSON.stringify(reactiveState) }}</span>
</template>