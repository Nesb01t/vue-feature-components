<script lang="ts" setup>

import Island from "../common/island.vue";
</script>

<template>
  <island title="Router director">
    <router-link to="/scroll">
      <el-button>link contain btn</el-button>
    </router-link>

    <el-button>
      <router-link to="/scroll">btn contain link (not good)</router-link>
    </el-button>
  </island>
</template>

<style scoped>

</style>