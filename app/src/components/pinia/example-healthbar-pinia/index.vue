<script lang="ts" setup>
import {useHealthStore} from "./health.store.ts";
import Island from "../../common/island.vue";

const healthStore = useHealthStore()

/**
 * store 中的 ref 属性解构要通过 storeToRef
 * 而 store 中的 fn 方法可以直接解构
 * TODO 推测 fn 可以直接解构的原因是闭包？
 */
const {health} = healthStore
const {add} = healthStore

</script>

<template>
  <island title="Example healthbar pinia">
    <el-text>healthStore.health: {{ healthStore.health }}</el-text>
    <br>
    <el-text>health in this component (conduct by Deconstruction): {{ health }}, (use storeToRef to be reactive)
    </el-text>
    <br>
    <el-button @click="healthStore.increment()">increment</el-button>
    <el-button style="margin-left: 10px" @click="add(2)">add (conduct by Deconstruction)</el-button>
  </island>
</template>