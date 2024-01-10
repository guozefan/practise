<template>
  <aside class="aside-nav">
    <div class="scroll">
      <div class="scroll-item">
        <h5>本站必读</h5>
        <p>练习题</p>
        <p>手写题</p>
        <p>算法题</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  </aside>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.aside-nav {
  position: fixed;
  left: 0;
  top: 0.8rem;
  width: 3.4rem;
  height: calc(100% - 0.76rem);
  overflow: hidden;

  .scroll {
    height: 100%;
    overflow-y: scroll;
  }

  .scroll-item {
    padding-left: 0.2rem;
    &:first-child {
      margin-top: 0.2rem;
    }
    h5 {
      color: #1b1515;
      font-size: 0.22rem;
      margin-bottom: 0.1rem;
    }
    p {
      font-size: 0.16rem;
      padding: 0.05rem 0.2rem;
      line-height: 1.4;
    }
  }
}
</style>