
<template>
  <div class="codemirror-box">
    <div class="copys">
      <p>
        <span>***</span> <span class="code-title">{{ codeTitle }}</span>
      </p>
      <span class="copy" @click="onCopy">js 复制</span>
    </div>
    <codemirror v-model:value="props.value" :options="options" />
  </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted, defineProps } from "vue";

import Codemirror from "codemirror-editor-vue3";
// 编辑器代码格式
import "codemirror/mode/javascript/javascript.js";
// 自动刷新
import "codemirror/addon/display/autorefresh";
// 主题
import "codemirror/theme/dracula.css";
import useClipboard from "vue-clipboard3";
const { toClipboard } = useClipboard();

const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  readOnly: {
    type: Boolean,
    default: true,
  },
  codeTitle: {
    type: String,
    default: "",
  },
});

const options = reactive({
  autorefresh: true, // 是否自动刷新
  smartIndent: true, // 自动缩进
  tabSize: 4, // 缩进单元格为 4 个空格
  mode: "application/javascript", //编辑器的编程语言，比如：'javascript'
  theme: "dracula", // 主题，使用主体需要引入相应的 css 文件
  line: true, // 是否显示行数
  viewportMargin: Infinity, // 高度自适应
  highlightDifferences: true,
  autofocus: false,
  indentUnit: 2,
  readOnly: props.readOnly, // 只读
  showCursorWhenSelecting: true,
  firstLineNumber: 1,
  matchBrackets: true, //括号匹配
});

const onCopy = async () => {
  try {
    await toClipboard(props.value);
    ElNotification({
      message: "复制成功",
      type: "success",
    });
  } catch (e) {
    console.log(e);
  }
};
</script>
<style lang="scss" scoped>
.codemirror-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  .copys {
    background-color: #282a36;
    font-size: 0.14rem;
    display: flex;
    justify-content: space-between;
    color: #ccc;
    padding: 0.1rem;
    border-bottom: solid 1px #ccc;

    .code-title {
      color: #fff;
      font-size: 0.15rem;
      text-indent: 2em;
      font-weight: 600;
      display: inline-block;
      letter-spacing: 1px;
    }
    .copy:hover {
      color: #888a93;
    }
  }
}
</style>
