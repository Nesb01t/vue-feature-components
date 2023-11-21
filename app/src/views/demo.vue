<script lang="ts" setup>
import VueUseMousePosition from "../components/vue-use/vue-use-mouse-position.vue";
import SortableDiv from "../components/vue-use/sortable-div.vue";
import CustomSelectWidth from "../components/element-plus/custom-select-width.vue";
import ReactiveStateLikePinia from "../components/pinia/reactive-state-like-pinia/index.vue";
import ExampleHealthbarPinia from '../components/pinia/example-healthbar-pinia/index.vue'
import EmitSomethingReactive from '../components/vue/emit-something-reactive/index.vue'
import RouterDirector from "../components/router/router-director.vue";
</script>

<template>
  <RouterDirector></RouterDirector>
  <EmitSomethingReactive></EmitSomethingReactive>
  <ExampleHealthbarPinia></ExampleHealthbarPinia>
  <ReactiveStateLikePinia></ReactiveStateLikePinia>
  <custom-select-width></custom-select-width>
  <sortable-div></sortable-div>
  <vue-use-mouse-position></vue-use-mouse-position>
</template>

<style scoped>

</style>