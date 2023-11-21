<script lang="ts" setup>
import {ref} from 'vue'
import {useInfiniteScroll} from '@vueuse/core'

const SHOW_END_BLOCK_TEXT = false;

const total = ref(1000)
const loadedList = ref([])

const ls = ref(null)
const data = ref([1, 2, 3, 4, 5, 6])

useInfiniteScroll(
    ls,
    () => {
      // load more
      data.value.push(1)
    },
    {distance: 100}
)
</script>

<template>
  <el-header style="border: 1px solid">
  </el-header>
  <el-container>
    <el-aside style="border: 1px solid saddlebrown">
      <el-row>total list length: {{ total }}</el-row>
      <el-row>loaded data length: {{ loadedList.length }}</el-row>
    </el-aside>
    <el-main style="border: 1px solid rebeccapurple">
      <el-card v-for="i in data" ref="ls" style="margin: 5px">{{ i }}</el-card>
      <el-row ref="footer">{{ SHOW_END_BLOCK_TEXT ? 'at the end' : '' }}</el-row>
    </el-main>
  </el-container>
</template>