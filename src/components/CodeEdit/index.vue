<template>
  <div id="code-Edit"></div>
</template>
<script setup lang="ts">
import '@/assets/ace/ace'
import '@/assets/ace/javascript' // 自动提示
import '@/assets/ace/mode-javascript' // 语言
import '@/assets/ace/theme-ambiance' // 主题
import { defineProps, onMounted } from 'vue'

let editor: any
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  //   只读和可编辑
  readonly: {
    type: Boolean,
    default: true
  },
  //   换行
  wrap: {
    type: Boolean,
    default: true
  },
  fontSize: {
    type: Number,
    default: 14
  },
  showLine: {
    type: Boolean,
    default: true
  }
})

onMounted(() => {
  initAceDom()
})

// 初始化编辑器
function initAceDom() {
  editor = ace.edit('code-Edit', {
    mode: 'ace/mode/javascript',
    theme: 'ace/theme/ambiance',
    value: props.value,
    readOnly: props.readonly,
    wrap: props.wrap,
    fontSize: props.fontSize,
    displayIndentGuides: props.showLine,
    enableBasicAutocompletion: true,
    showPrintMargin: true,
    enableSnippets: true
  })
}

function formatCode() {
  editor.commands.addCommand({
    name: 'formatJson',
    bindKey: { win: 'Ctrl-S', mac: 'Cmd-S' },
    exec: function (editor: any) {
      console.log('sdcsdc')
      try {
        // 一些操作;
      } catch (error) {
        console.error(error)
      }
    },
    readOnly: true // 只读模式，避免意外修改 JSON
  })
}
</script>
<style lang="scss" scoped>
#code-Edit {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
