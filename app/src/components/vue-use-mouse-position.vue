<script setup lang="ts">
import {useMouse} from "@vueuse/core";
import Island from "./common/island.vue";
const {x, y} = useMouse()

</script>

<template>
  <island>
    <h1>Test mouse position</h1>
    <p>mouse position at: {{ x }} {{ y }}</p>
  </island>
</template>

<style scoped>

</style>