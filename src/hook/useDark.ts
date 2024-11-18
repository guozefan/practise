import { Ref, ref } from 'vue'

// 定义hook方法
type DarkResultProps = {
  isDark: Ref<boolean>
  toggleDark: () => void
}

export default function useDark(): DarkResultProps {
  const isDark = ref(false)
  const toggleDark = (event: MouseEvent) => {
    isDark.value = !isDarkFn()
    const transition = document.startViewTransition(() => {
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    })
    transition.ready.then(() => {
      const { clientX, clientY } = event
      const radius = Math.hypot(Math.max(clientX, innerWidth - clientX), Math.max(clientY, innerHeight - clientY))
      // const isDark = document.documentElement.classList.contains('dark')

      const clipPath = [`circle(0px at ${clientX}px ${clientY}px)`, `circle(${radius}px at ${clientX}px ${clientY}px)`]
      document.documentElement.animate({ clipPath: isDark.value ? clipPath.reverse() : clipPath }, { duration: 500, pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)' })
    })
  }
  /**
   * 当前主题色是否是暗色
   */
  function isDarkFn() {
    return document.documentElement.classList.contains('dark')
  }

  return {
    isDark,
    toggleDark
  }
}
