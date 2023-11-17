<script lang="ts" setup>
import Island from "../../common/island.vue";
import {reactiveState} from "./state.ts";
import SubText from "./sub-text.vue";
</script>

<template>
  <island title="Reactive state like pinia">
    <p>this component: {{ JSON.stringify(reactiveState) }}</p>

    <p>another component:
      <sub-text></sub-text>
    </p>
  </island>
</template>