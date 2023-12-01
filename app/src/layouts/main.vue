<script lang="ts" setup>
import { routes } from "@/router/index.ts";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div>
    <el-affix :offset="0">
      <el-menu class="navi shadow-xl bg-blue-500" mode="horizontal" router>
        <el-menu-item
          v-for="item of routes"
          :class="
            router.currentRoute.value.path === item.path ? 'is-active' : ''
          "
          :index="item.path"
          :route="item"
          >{{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-affix>
    <div class="main-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.navi {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
}
</style>