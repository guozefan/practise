<script setup lang="ts">
import { menuType } from '@/layout/types'
import { type PropType } from 'vue'

const props = defineProps({
  item: {
    type: Object as PropType<menuType>
  }
})
</script>

<template>
  <el-menu-item v-if="!item.children?.length" :index="item.path">
    <el-text class="mx-1">{{ item.meta.title }}</el-text>
  </el-menu-item>
  <el-sub-menu v-else :index="item.path">
    <template #title>
      <el-text class="mx-1">{{ item.meta.title }}</el-text>
    </template>
    <sidebar-item v-for="child in item.children" :key="child.path" :item="child" class="nest-men" />
  </el-sub-menu>
</template>

<style lang="scss" scoped></style>
