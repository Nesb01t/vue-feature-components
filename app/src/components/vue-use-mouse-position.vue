<script setup lang="ts">
import {useMouse} from "@vueuse/core";
import Island from "./common/island.vue";

const {x, y} = useMouse()

</script>

<template>
  <island title="Test mouse position">
    <p>mouse position at: {{ x }}, {{ y }}</p>
  </island>
</template>

<style scoped>

</style>