<script lang="ts" setup>
import {Ref, ref} from "vue";
import {useIntersectionObserver} from "@vueuse/core";

const SHOW_END_BLOCK_TEXT = false;

const total = ref(1000)
const loadedList = ref<{
  name: string,
  value: number
}[]>([
  {
    name: '123',
    value: 123
  }
])

const footer = ref(null)
/**
 * 当元素可见时，不断执行 promise
 * element - 监听的元素
 * fn - 执行的操作
 */
const useLazyLoad = (element: Ref<any>, fn: () => Promise<any>) => {
  const atEnd = ref(false)

  const {stop} = useIntersectionObserver(element, async ([{isIntersecting}]) => {
    atEnd.value = isIntersecting

    while (atEnd.value) {
      await fn()
    }
  })

  return {
    atEnd,
    stop
  }
}

const fetchMoreData = (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      for (let i of [1, 2, 3, 4, 5, 7, 8, 1, 1])
        loadedList.value.push({
          name: `index: ${i}`,
          value: Math.random()
        } as never)
      setTimeout(resolve, 100)
    }, 500)
  })
}

const {atEnd, stop} = useLazyLoad(footer, fetchMoreData)
</script>

<template>

  <el-affix>
    <el-header style="border: 1px solid; margin: 2px; height: 80px; background-color: darkgray">
      <el-row>total list length: {{ total }}</el-row>
      <el-row>loaded data length: {{ loadedList.length }}</el-row>
      <el-row>reach end status:
        <el-text :style="atEnd ? { color: 'green'} : { color: 'red'}">
          {{ atEnd }}
        </el-text>
      </el-row>
    </el-header>
  </el-affix>

  <el-container>
    <el-aside style="border: 1px solid saddlebrown">
      <el-row>total list length: {{ total }}</el-row>
      <el-row>loaded data length: {{ loadedList.length }}</el-row>
      <el-row>reach end status:
        <el-text :style="atEnd ? { color: 'green'} : { color: 'red'}">
          {{ atEnd }}
        </el-text>
      </el-row>
      <el-row>
        <el-button @click="stop">stop lazyload</el-button>
      </el-row>
    </el-aside>
    <el-main style="border: 1px solid rebeccapurple">
      <el-table :data="loadedList">
        <el-table-column label="Date" prop="value" width="180"/>
        <el-table-column label="Name" prop="name" width="180"/>
      </el-table>
      <el-row ref="footer">{{ SHOW_END_BLOCK_TEXT ? 'at the end' : '' }}</el-row>
    </el-main>
  </el-container>
</template>

<style scoped>

</style>