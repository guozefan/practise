<template>
  <main class="app-main">
    <router-view />
    <LayFooter />
  </main>
</template>
<script lang="ts" setup>
import LayFooter from '../lay-footer/index.vue'
</script>
<style scoped lang="scss">
.app-main {
  padding-left: 3.4rem;
  padding-top: var(--header-height);
}
</style>
