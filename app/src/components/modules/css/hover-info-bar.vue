<script lang="ts" setup>
import Island from "@/components/common/island.vue";
</script>

<template>
  <island>
    <el-card
      :body-style="{ padding: '0px' }"
      class="card relative"
      shadow="hover"
    >
      <el-image
        :preview-src-list="[
          'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
        ]"
        :src="'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'"
        fit="cover"
        hide-on-click-modal
        style="width: 150px; height: 150px"
      ></el-image>
      <el-text class="description">HELLO</el-text>
    </el-card>
  </island>
</template>

<style scoped>
.card {
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 5px;
  display: inline-block;
  cursor: pointer;
}

.description {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20%;
  background-color: rgba(79, 79, 79, 0.49);
  color: #e2e3e4;

  visibility: hidden;
  opacity: 0;

  transition:
    opacity 0.2s,
    visibility 0.2s;
}

.card:hover .description {
  visibility: visible;
  opacity: 1;
}
</style>