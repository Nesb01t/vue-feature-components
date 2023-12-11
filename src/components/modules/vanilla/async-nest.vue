<script setup lang="ts">
import Island from "@/stories/Island.vue";
import { ref } from "vue";

const status = ref();
const num = ref(0);

const fetch = async (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  });
};

const syncFetch = (cb: (n: number) => void): void => {
  fetch().then((res) => {
    cb(res);
  });
};
const add = () => {
  status.value = "Loading";
  syncFetch((n) => {
    num.value += n;
    status.value = "Done";
  });
};
</script>

<template>
  <Island>
    <el-text>Promising Status: {{ status }}</el-text>
    <br />
    <el-text>Result Number: {{ num }}</el-text>
    <br />
    <el-button @click="add">Add Number</el-button>
  </Island>
</template>

<style scoped></style>
