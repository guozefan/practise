<template>
  <header class="layout-header">
    <div class="logo">
      <img @click="onToUser" src="@/assets/img/avatar.jpg" alt="" />
      <p @click="onRefresh">线上笔记</p>
    </div>
    <div class="nav">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="navId === index ? 'active' : ''"
          @click="onSetActiveId(item, index)"
        >
          {{ item.text }}
        </li>
      </ul>
      <div class="topic-btn" @click="handleToggleDark">
        <Moon
          v-if="isDark"
          style="font-size: 2em; width: 0.2rem; height: 0.2rem"
        />
        <Sunny v-else style="font-size: 2em; width: 0.2rem; height: 0.2rem" />
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import useDark from "@/hook/useDark.ts";
import { menusStroe } from "@/store/menus";
import { themeStroe } from "@/store/useTheme";
import { toPageQuery } from "@/utils/index";
import { onMounted, ref } from "vue";
// import router from '@/router/index'

const theme = themeStroe();
const menusPinia = menusStroe();

import Moon from "~icons/ep/moon";
import Sunny from "~icons/ep/sunny";

const { isDark, toggleDark } = useDark();

const list = ref([
  { id: "", text: "react" },
  { id: "", text: "vue" },
  { id: "", text: "知识点" },
  { id: "", text: "手写题" },
  { id: "", text: "Js函数" },
  { id: "", text: "学习笔记" },
  // { id: '', text: '掘金' }
]);

const navId = ref(-1);

onMounted(() => {
  getActiveId();
});

function handleToggleDark(e: any) {
  toggleDark(e);
  theme.setTheme(isDark.value ? "dark" : "light");
}

// 跳到个人页
const onToUser = () => {
  toPageQuery("/myUser");
};

//  跳到首页
const onRefresh = () => {
  toPageQuery("/home");
};

// 导航跳转
const getActiveId = () => {
  const index = JSON.parse(sessionStorage.getItem("navId") as string | any);
  if (index) {
    navId.value = index;
  }
};
const onSetActiveId = (row: any, index: number) => {
  navId.value = index;
  sessionStorage.setItem("navId", JSON.stringify(index));
  if (row.text == "学习笔记") {
    getMdFiles();
  }
};

// 获取md格式的文件
function getMdFiles() {
  try {
    const mdFiles = import.meta.glob("../../../docs/vue/*.md");
    let names = [];
    for (const filePath in mdFiles) {
      const fileName = filePath.split("/").pop().replace(".md", "");
      const url = encodeURIComponent(fileName);
      names.push({
        path: `/mdPreview?url=vue/${url}`,
        meta: { title: fileName },
      });
    }
    menusPinia.setMenus(names);
    const url = names[0].path.split("?")[0];
    const val = names[0].path.split("?")[1];
    let query = {};
    query[val.split("=")[0]] = val.split("=")[1];
    toPageQuery(url, query);
  } catch (e) {
    console.log(e);
  }
}
</script>
<style scoped lang="scss">
.layout-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.32rem;
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
  box-sizing: border-box;
  z-index: 999;

  .logo {
    display: flex;
    align-items: center;
    height: var(--header-height);

    img {
      width: 0.48rem;
      height: 0.48rem;
      border-radius: 50%;
      margin-right: 0.2rem;
      border: solid 1px var(--tip-color);
      animation: turn 10s linear infinite;
    }

    p {
      font-weight: 600;
      font-size: 0.24rem;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    height: var(--header-height);

    ul {
      display: flex;
      font-weight: 600;
      font-size: 0.18rem;
      height: 100%;

      li {
        padding: 0 0.1rem;
        line-height: var(--header-height);
        border-bottom: solid 2px transparent;
      }

      .active {
        border-bottom-color: var(--tip-color);
      }
    }
  }

  .topic-btn {
    border: 1px solid var(--border-color);
    border-radius: 50%;
    display: flex;
    padding: 4px;
    margin-left: 0.2rem;

    &:hover {
      border-color: var(--tip-color);
      box-shadow: 0 0 5px var(--tip-color);
    }
  }
}

@keyframes turn {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(72deg);
  }

  40% {
    transform: rotate(144deg);
  }

  60% {
    transform: rotate(216deg);
  }

  80% {
    transform: rotate(288deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
