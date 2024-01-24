<template>
  <aside class="aside-nav">
    <div class="scroll">
      <div class="scroll-item">
        <h5>本站必读</h5>
        <p v-for="item in list" :key="item.id">
          <router-link :to="item.url"> {{ item.text }}</router-link>
        </p>
      </div>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";

const list: any[] = ref([{ id: 1, text: "js-数组方法", url: "/home/js-fun" }]);
</script>
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