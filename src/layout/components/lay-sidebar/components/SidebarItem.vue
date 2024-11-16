<script setup lang="ts">
import { menuType } from '@/layout/types.ts'
import { type PropType } from 'vue'

const props = defineProps({
  item: {
    type: Object as PropType<menuType>
  }
})
</script>

<template>
  <el-menu-item v-if="!item.children?.length" :index="item.path">
    <span>{{ item.meta.title }}</span>
  </el-menu-item>
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <span>{{ item.meta.title }}</span>
    </template>
    <sidebar-item v-for="child in item.children" :key="child.path" :item="child" class="nest-men" />
  </el-sub-menu>
</template>

<style lang="scss" scoped></style>
