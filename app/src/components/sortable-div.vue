<script setup lang="ts">
import Island from "./common/island.vue";
import {computed} from "vue";

const legacyList = ['1', '3', '12']
const list = computed(() => {
  let index = 0;
  return legacyList.map((item) => {
    index += 1
    return {
      id: index,
      name: item,
    }
  })
})
</script>

<template>
  <island>
    <h1>Sortable div</h1>
    <div class="sortable-div">
      <el-card v-for="(index, val) in list"></el-card>
    </div>

    <p>legacy value is: {{ JSON.stringify(legacyList) }}</p>
    <p>list value (computed) is: {{ JSON.stringify(list) }}</p>
  </island>
</template>