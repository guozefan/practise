<script setup lang="ts">
// import test from '@/docs/vue/001.md?raw'
import { themeStroe } from '@/store/useTheme'
import { MdCatalog, MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import 'md-editor-v3/lib/style.css'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const theme = themeStroe()

const value = ref('')
const editorRef = ref()

const scrollElement = document.documentElement
onMounted(() => {
  if (route.query.url) {
    const url = decodeURIComponent(route.query.url)
    urlToMd(url as string)
  }
})

watch(
  () => route.query.url,
  (newVal, oldVal) => {
    if (newVal) {
      const url = decodeURIComponent(newVal)
      urlToMd(url as string)
    }
  }
)

// 动态导入md
function urlToMd(url: string) {
  import(/* @vite-ignore */ '../../docs/' + url + '.md?raw')
    .then(e => {
      value.value = e.default
    })
    .catch(error => {
      console.log('error', error)
    })
}
</script>

<template>
  <div class="min-container md-preview-container">
    <div class="scroll-container">
      <MdPreview editorId="preview-onl" :modelValue="value" :theme="theme.theme" />
    </div>
    <div class="aside">
      <MdCatalog ref="editorRef" editorId="preview-onl" :scrollElementOffsetTop="80" :scrollElement="scrollElement" :theme="theme.theme" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.md-preview-container {
  padding-top: 0;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .scroll-container {
    width: 60%;
  }
  .aside {
    width: 30%;
    position: relative;
    top: 0.4rem;
    right: 10%;
    .md-editor-catalog {
      position: sticky;
      top: calc(var(--header-height) + 0.2rem);
      height: calc(100vh - var(--header-height));
      padding-bottom: 0.3rem;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
