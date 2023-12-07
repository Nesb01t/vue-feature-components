<script lang="ts" setup>
import Island from "@/stories/Island.vue";
import { CircleCheck, Edit } from "@element-plus/icons-vue";
import { ref } from "vue";

const editing = ref(false);
const value = ref("default text");
</script>

<template>
  <island>
    <template v-if="editing">
      <el-input v-model="value" style="" @blur="editing = false" />
      <el-icon>
        <CircleCheck />
      </el-icon>
    </template>
    <span v-else class="editable-display" @click="editing = true">
      <span class="editable-display-text">{{ value }}</span>
      <el-icon class="editable-display-icon"><Edit /></el-icon>
    </span>
  </island>
</template>

<style scoped>
.editable-display {
  display: flex;
  justify-items: center;
}

.editable-display-icon {
  margin: auto 0 auto 5px;
}
</style>
