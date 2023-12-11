<script lang="ts" setup>
import EasyPromise from "@/components/modules/vanilla/easy-promise.vue";
import EditableText from "@/components/modules/vanilla/editable-text.vue";
import AsyncNest from "@/components/modules/vanilla/async-nest.vue";
</script>

<template>
  <AsyncNest></AsyncNest>
  <easy-promise></easy-promise>
  <editable-text></editable-text>
</template>

<style scoped></style>
