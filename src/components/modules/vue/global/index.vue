<script lang="ts" setup>
import Island from "../../../common/island.vue";
import { nextTick, ref, version } from "vue";

const log = ref();
const logNextTick = async () => {
  await nextTick();
  log.value += "|";
};
</script>

<template>
  <island title="Vue global">
    <el-text>{{ version }}</el-text>
    <el-text>{{ log }}</el-text>
    <el-button @click="logNextTick"></el-button>
  </island>
</template>

<style scoped></style>