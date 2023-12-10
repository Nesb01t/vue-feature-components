<script setup lang="ts">
import Island from "@/stories/Island.vue";
</script>

<template>
  <Island>
    <div class="main">
      <div class="header"></div>
      <div class="body"></div>
    </div>
  </Island>
</template>

<style scoped>
.main {
  height: 500px;
  border: 2px solid black;
  position: relative;
}

.header {
  height: 100px;
  background-color: forestgreen;
}

.body {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: steelblue;
}
</style>
