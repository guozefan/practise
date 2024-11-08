<template>
  <main class="main">
    <router-view />
    <div class="btm-text">
      © 2024-2025 sykhero.com 版权所有
      <a href="https://beian.miit.gov.cn">京ICP备2024093416号-1</a>
    </div>
  </main>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.main {
  padding-left: 3.4rem;
  padding-top: var(--header-height);

  .btm-text {
    text-align: center;
    font-size: 0.18rem;
    color: #999;
    padding: 0.2rem;
  }
}
</style>
