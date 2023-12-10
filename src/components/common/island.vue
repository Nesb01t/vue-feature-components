<script setup lang="ts">
defineOptions<{
  name: 'Island'
}>()

interface IProps {
  title?: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <el-card style="margin: 10px">
    <h1>{{ props.title }}</h1>
    <slot></slot>
  </el-card>
</template>

<style scoped>
</style>