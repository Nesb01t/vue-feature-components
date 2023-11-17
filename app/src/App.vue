<script setup lang="ts">
import VueUseMousePosition from "./components/vue-use/vue-use-mouse-position.vue";
import SortableDiv from "./components/vue-use/sortable-div.vue";
import CustomSelectWidth from "./components/element-plus/custom-select-width.vue";
import ReactiveStateLikePinia from "./components/pinia/reactive-state-like-pinia/index.vue";
import ExampleHealthbarPinia from './components/pinia/example-healthbar-pinia/index.vue'
</script>

<template>
  <ExampleHealthbarPinia></ExampleHealthbarPinia>
  <ReactiveStateLikePinia></ReactiveStateLikePinia>
  <custom-select-width></custom-select-width>
  <sortable-div></sortable-div>
  <vue-use-mouse-position></vue-use-mouse-position>
</template>
