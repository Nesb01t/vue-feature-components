<script setup lang="ts">
import Island from "./common/island.vue";
import {computed, ref} from "vue";

/**
 * 0. BASIC
 * 引入 @Vue use
 * 初始化数据
 * 随后通过 ref 挂载在某个元素
 */
import {useSortable} from '@vueuse/integrations/useSortable'

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
const somethingToBeRef = ref<HTMLElement | null>(null)
const eventInfo = ref()
const {option} = useSortable(somethingToBeRef, list, {
  /**
   * 通过 useSortable 的 fn 参数直接设置 animation 属性
   */
  animation: 500,

  /**
   * 2. UPDATE
   * 通过 options.onUpdate: callback 实现自定义操作
   */
  onUpdate: (e) => {
    console.log(e)
  }
})

/**
 * 1. OPTION
 * 通过选项添加动画等
 */
const animateDuration = ref(100)
const setAnimateDuration = (): void => {
  option('animation', animateDuration.value)
}
</script>

<template>
  <island title="Sortable div">
    <div ref="somethingToBeRef" class="sortable-div">
      <div v-for="(item) in list" :key="item.name" style="margin: 5px">
        <el-card>{{ item.name }}</el-card>
      </div>
    </div>

    <div style="display: flex; width: 400px">
      <el-input v-model="animateDuration"></el-input>
      <el-button style="margin-left: 5px" @click="setAnimateDuration()">set animation(milliseconds)</el-button>
    </div>
    <p>legacy value is: {{ JSON.stringify(legacyList) }}</p>
    <p>list value (computed) is: {{ JSON.stringify(list) }}</p>
    <p v-if="eventInfo">update event info is: {{ JSON.stringify(eventInfo) }}</p>
  </island>
</template>