<template>
  <div class="min-container" style="width: 60%">
    <template v-for="(item, index) in list" :key="index">
      <CardItem :value="item" />
    </template>
  </div>
</template>
<script setup lang="ts">
import { list } from '@/assets/data/arrary'
</script>
