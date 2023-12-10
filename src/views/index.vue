<script lang="ts" setup>
import VueUseMousePosition from "@/components/modules/vue-use/vue-use-mouse-position.vue";
import SortableDiv from "@/components/modules/vue-use/sortable-div.vue";
import CustomSelectWidth from "@/components/modules/element-plus/custom-select-width.vue";
import ReactiveStateLikePinia from "@/components/modules/pinia/reactive-state-like-pinia/index.vue";
import ExampleHealthbarPinia from "@/components/modules/pinia/example-healthbar-pinia/index.vue";
import EmitSomethingReactive from "@/components/modules/vue/emit-something-reactive/index.vue";
import RouterDirector from "@/deprecated/components/router-director.vue";
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

<style scoped></style>