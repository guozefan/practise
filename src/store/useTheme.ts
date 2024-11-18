import { defineStore } from 'pinia'

export const themeStroe = defineStore('theme', {
  state: () => {
    return {
      theme: 'light' as string
    }
  },
  actions: {
    setTheme(theme: string) {
      this.theme = theme
    }
  }
})
