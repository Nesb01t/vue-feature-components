<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Island from "@/components/common/island.vue";

const videoRef = ref<HTMLVideoElement>(null);
const rotate = ref(0);

onMounted(() => {
  console.log(videoRef);
});
</script>

<template>
  <island title="Phone model simulator">
    <el-text>video height: {{ videoRef?.clientHeight }}</el-text>
    <br />
    <el-text>video height: {{ videoRef?.videoWidth }}</el-text>
    <br />

    <div v-if="videoRef" class="device" style="margin: 20px 30%">
      <div
        :style="{ height: `${videoRef?.clientHeight + 30}px` }"
        class="frame"
      >
        <div :style="{ height: `${videoRef?.clientHeight}px` }" class="content">
          <video
            ref="videoRef"
            controls
            src="https://st4.depositphotos.com/1258806/41499/v/600/depositphotos_414995806-stock-video-new-york-city-manhattan-bridge.mp4"
          ></video>
        </div>
      </div>

      <div class="stripe"></div>

      <div class="btn-sound-1"></div>
      <div class="btn-sound-2"></div>
      <div class="btn-lock"></div>
    </div>
  </island>
</template>

<style scoped>
.device {
  box-sizing: border-box;
  display: block;

  height: 648px;
  width: 340px;
}

/**
 * 边框
 */
.device .frame {
  background-color: #222;
  border-radius: 52px;
  box-shadow:
    inset 0 0 0 3px #606467,
    inset 0 0 0 7px #e2e3e4;

  padding: 10px;
  width: 340px;
  z-index: 1;
}

.device .content {
  background-color: #777;
  border-radius: 40px;

  width: 308px;
  margin: 5px;
  overflow: hidden;
}

/**
 * stripe
 */
.device .stripe::after,
.device .stripe::before {
  border: solid rgba(51, 51, 51, 0.35);
  border-width: 0 5px;

  content: "";

  height: 5px;
  position: relative;
  width: 100%;
  z-index: 9;
}

.device .stripe::after {
  bottom: 168px;
  left: 320px;
}

.device .stripe::before {
  bottom: 168px;
}

/**
 * 按钮
 */
.device .btn-sound-1 {
  background-color: rgba(96, 100, 103, 0.7);
  height: 54px;
  left: -3px;

  position: relative;
  bottom: 540px;
  width: 3px;
}

.device .btn-sound-2 {
  background-color: rgba(96, 100, 103, 0.7);
  height: 54px;
  left: -3px;

  position: relative;
  bottom: 520px;
  width: 3px;
}

.device .btn-lock {
  background-color: rgba(96, 100, 103, 0.7);
  height: 78px;
  left: 340px;

  position: relative;
  bottom: 620px;
  width: 3px;
}
</style>