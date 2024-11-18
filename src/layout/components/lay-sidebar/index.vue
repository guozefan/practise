<template>
  <aside class="aside-nav">
    <h5 class="nav-title">本站必读</h5>
    <div class="scroll">
      <el-menu class="el-menu-vertical-demo" router active-text-color="var(--tip-color)">
        <LaySidebarItem v-for="route in menus" :key="route.path" :item="route" />
      </el-menu>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { menusStroe } from '@/store/menus';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import LaySidebarItem from '../lay-sidebar/components/SidebarItem.vue';
const menusPinia = menusStroe()
const { menus } = storeToRefs(menusPinia)

// const list: any[] = ref([{ id: 1, text: 'js-数组方法', url: '/home/js-fun' }])

onMounted(() => {
  getMdFiles()
})

// 获取md格式的文件
function getMdFiles() {
  try {
    const mdFiles = import.meta.glob('../../../docs/vue/*.md')
    let names = []
    for (const filePath in mdFiles) {
      const fileName = filePath.split('/').pop().replace('.md', '')
      const url = encodeURIComponent(fileName)
      names.push({ path: `/mdPreview?url=vue/${url}`, meta: { title: fileName } })
    }
    // console.log(names)
    menusPinia.setMenus(names)
  } catch (e) {
    console.log(e)
  }
}
</script>
<style lang="scss" scoped>
.aside-nav {
  position: fixed;
  left: 0;
  top: 0.8rem;
  width: 3.4rem;
  height: calc(100% - 0.76rem);
  overflow: hidden;
  padding-left: 0.2rem;
  display: flex;
  flex-direction: column;

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
}
</style>
