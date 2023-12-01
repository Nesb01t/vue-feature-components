<script lang="ts" setup>
import { IFilterForm } from "./filter";
import { computed, reactive, toRaw } from "vue";

const form = reactive<IFilterForm>({});

const formOrigin = computed(() => {
  return form;
});
const logFormOrigin = () => {
  console.log(formOrigin);
};

const emit = defineEmits<{
  (e: "update", val: IFilterForm): void;
}>();
</script>

<template>
  <el-form :inline="true">
    <el-form-item label="起始时间">
      <el-input v-model="form.timeStart"></el-input>
    </el-form-item>
    <el-form-item label="结束时间">
      <el-input v-model="form.timeEnd"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="emit('update', toRaw(form))"
        >emit form to upper component
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-button @click="logFormOrigin()">log form origin</el-button>
    </el-form-item>
    <br />
    <el-form-item>
      <el-text>form/origin @sub-component: {{ formOrigin }}</el-text>
    </el-form-item>
    <br />
    <el-form-item>
      <el-text>form @sub-component: {{ form }}</el-text>
    </el-form-item>
  </el-form>
</template>