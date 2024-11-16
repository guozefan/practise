<script setup lang="ts">
// import test from '@/docs/vue/001.md?raw'
import { MdCatalog, MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import 'md-editor-v3/lib/style.css'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const value = ref('')
const editorRef = ref()

const scrollElement = document.documentElement
onMounted(() => {
  console.log(route.query)
  if (route.query.url) {
    urlToMd(route.query.url as string)
  }
})

// 动态导入md
function urlToMd(url: string) {
  import(/* @vite-ignore */ '../../docs/' + url + '.md?raw')
    .then(e => {
      value.value = e.default
      console.log('e', e, value.value)
    })
    .catch(error => {
      console.log('error', error)
    })
}
</script>

<template>
  <div class="min-container md-preview-container">
    <div class="scroll-container">
      <MdPreview editorId="preview-onl" :modelValue="value" />
    </div>
    <div class="aside">
      <MdCatalog ref="editorRef" editorId="preview-onl" :scrollElementOffsetTop="80" :scrollElement="scrollElement" />
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
    width: 860px;
  }
  .aside {
    width: 460px;
    position: relative;
    top: 0.4rem;
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
