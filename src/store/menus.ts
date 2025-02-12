import { menuType } from '@/layout/types'
import { defineStore } from 'pinia'

export const menusStroe = defineStore('menus', {
  state: () => {
    return {
      // 用于初始化空列表
      menus: [] as menuType[],
      activeId: '' as string,
    }
  },
  actions: {
    setMenus(menus: menuType[]) {
      this.menus = menus
    },
    setActiveId(id: string) {
      this.activeId = id
    }
  }
})

