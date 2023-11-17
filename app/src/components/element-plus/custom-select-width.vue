<script lang="ts" setup>
import Island from "../common/island.vue";
import {ref} from "vue";

const selectValue = ref('')
const SELECT_STYLES = {
  width: '200px'
}
</script>

<template>
  <island title="Custom select width">
    <el-select v-model="selectValue" :style="SELECT_STYLES">
      <el-option v-for="item in [1, 2, 3]" :value="item">Option: {{ item }}</el-option>
    </el-select>

    <p>Select Value is: {{ selectValue }}</p>
  </island>
</template>