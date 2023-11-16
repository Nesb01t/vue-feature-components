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
const {option} = useSortable(somethingToBeRef, list, {
  /**
   * 通过 useSortable 的 fn 参数直接设置 animation 属性
   */
  // animation: 500
})

/**
 * 1. OPTION
 * 通过选项添加动画等
 */
const ANIMATION_DURATION_MILLISECOND = 2000
option('animation', ANIMATION_DURATION_MILLISECOND)
</script>

<template>
  <island>
    <h1>Sortable div</h1>
    <div ref="somethingToBeRef" class="sortable-div">
      <div v-for="(item) in list" :key="item.name" style="margin: 5px">
        <el-card>{{ item.name }}</el-card>
      </div>
    </div>

    <p>legacy value is: {{ JSON.stringify(legacyList) }}</p>
    <p>list value (computed) is: {{ JSON.stringify(list) }}</p>
  </island>
</template>