<template>
  <p class="font-title1">.{{ value.title }}</p>
  <p class="font-title2" v-for="(item, index) in value.text" :key="index">
    {{ item }}
  </p>
  <div class="code-edit">
    <Codemirrors
      :codeTitle="value.code_title"
      :value="value.code"
      :readOnly="false"
    />
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  value: {
    type: Object,
    default: {},
  },
});
</script>
<style lang="scss" scoped>
.code-edit {
  margin-top: 0.3rem;
  margin-bottom: 0.36rem;
}
</style>