<template>
  <div class="js-fun">
    <div class="min-container">
      <template v-for="(item, index) in list" :key="index">
        <CardItem :value="item" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { list } from "@/assets/data/arrary";
</script>
<style scoped lang="scss">
.js-fun {
  padding: 0.9rem 0.9rem 0.3rem;
  color: #000;

  .min-container {
    min-width: 500px;
    max-width: 740px;
    margin: 0 auto;
  }
}
</style>