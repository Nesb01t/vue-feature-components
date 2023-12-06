<script lang="ts" setup>
import Island from "@/components/common/island.vue";
import { ref } from "vue"; // promise core

// promise core
type Status = "PENDING" | "FULFILLED" | "REJECTED";

class easyPromise<T> {
  private status: Status = "PENDING"; // 初始状态为 pending
  private value: T | undefined = undefined; // 值
  constructor(fn: (resolve: () => void) => void) {
    fn();
  }
}

// promise usage
const item = ref("nothing is here");
const handleClick = () => {
  new easyPromise((resolve) => {
    item.value = "hello world";
    resolve();
  });
};
</script>

<template>
  <island title="Easy promise">
    <el-button @click="handleClick">Click to trigger promise</el-button>
    <el-text>{{ item }}</el-text>
  </island>
</template>

<style scoped></style>
