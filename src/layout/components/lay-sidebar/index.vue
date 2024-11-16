<template>
  <aside class="aside-nav">
    <div class="scroll">
      <div class="scroll-item">
        <h5>本站必读</h5>
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <LaySidebarItem v-for="route in menus" :key="route.path" :item="route" />
        </el-menu>
      </div>
    </div>
  </aside>
</template>
<script setup lang="ts">
import { menusStroe } from '@/store/menus'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import LaySidebarItem from '../lay-sidebar/components/SidebarItem.vue'
const menusPinia = menusStroe()
const { menus } = storeToRefs(menusPinia)

// const list: any[] = ref([{ id: 1, text: 'js-数组方法', url: '/home/js-fun' }])

onMounted(() => {
  getMdFiles()
})

function getMdFiles() {
  try {
    const mdFiles = import.meta.glob('../../../docs/vue/*.md')
    console.log(mdFiles)
    let names = []
    for (const filePath in mdFiles) {
      const fileName = filePath.split('/').pop().replace('.md', '')
      names.push({ path: `/mdPreview?url=vue/${fileName}`, meta: { title: fileName } })
    }
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
