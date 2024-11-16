<template>
  <main class="app-main">
    <router-view :key="route.path" />
    <LayFooter />
  </main>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
import LayFooter from '../lay-footer/index.vue'
const route = useRoute()
</script>
<style scoped lang="scss">
.app-main {
  padding-left: 3.4rem;
  padding-top: var(--header-height);
}
</style>
