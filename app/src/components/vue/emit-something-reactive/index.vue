<script lang="ts" setup>
import FilterForm from "./filter-form.vue";
import Island from "../../common/island.vue";
import {reactive} from "vue";
import {IFilterForm} from "./filter";

const form = reactive<IFilterForm>({});
</script>

<template>
  <island title="Emit something reactive">
    <filter-form @update="val => {form=val; console.log(`upper component receive: `, val)}"></filter-form>
    <el-text>form @upper-component from sub component: {{ form }} (check details at console)</el-text>
  </island>
</template>

<style scoped>

</style>