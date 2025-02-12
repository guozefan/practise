<template>
  <aside class="aside-nav">
    <h5 class="nav-title">本站必读</h5>
    <div class="scroll">
      <el-menu class="el-menu-vertical-demo" router active-text-color="var(--tip-color)" v-if="menus[0]?.path">
        <LaySidebarItem v-for="route in menus" :key="route.path" :item="route" />
      </el-menu>
      <ul v-else class="nav-list">
        <li v-for="(item, index) in menus" :key="index" :class="{ 'nav-item': true, active: index === activeId }" @click="menuClick(item, index)">{{ item.meta.title }}</li>
      </ul>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { menusStroe } from '@/store/menus'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import LaySidebarItem from '../lay-sidebar/components/SidebarItem.vue'
const menusPinia = menusStroe()
const { menus, activeId } = storeToRefs(menusPinia)

// const list: any[] = ref([{ id: 1, text: 'js-数组方法', url: '/home/js-fun' }])

onMounted(() => {})

function menuClick(row, index) {
  console.log(row, index)
  menusPinia.setActiveId(index)
}
</script>
<style lang="scss" scoped>
.aside-nav {
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 0.8rem;
  width: 3.4rem;
  height: calc(100% - 0.76rem);
  overflow: hidden;
  padding-left: 0.2rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  background-color: var(--el-menu-bg-color);

  .scroll {
    flex: 1;
    overflow-y: scroll;
  }

  .el-menu {
    border-right: none;
  }

  .nav-title {
    color: var(--text-color);
    font-size: 0.22rem;
    margin-bottom: 0.1rem;
  }

  .nav-list {
    .nav-item {
      display: flex;
      align-items: center;
      height: var(--el-menu-item-height);
      line-height: var(--el-menu-item-height);
      font-size: var(--el-menu-item-font-size);
      color: var(--el-menu-text-color);
      padding: 0 var(--el-menu-base-level-padding);
      list-style: none;
      cursor: pointer;
      position: relative;
      transition: border-color var(--el-transition-duration), background-color var(--el-transition-duration), color var(--el-transition-duration);
      box-sizing: border-box;
      white-space: nowrap;
      // padding-left: calc(var(--el-menu-base-level-padding) + var(--el-menu-level) * var(--el-menu-level-padding));
      &:hover {
        background-color: var(--el-menu-hover-bg-color);
      }
    }

    .active {
      color: var(--tip-color);
    }
  }
}
</style>
