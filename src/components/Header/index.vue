<template>
  <header class="header">
    <div class="logo">
      <img @click="onToUser" src="@/assets/img/avatar.jpg" alt="" />
      <p @click="onRefresh">线上笔记</p>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item, index) in list" :key="index" :class="navId === index ? 'active' : ''" @click="onSetActiveId(index)">
          <span>{{ item.text }}</span>
        </li>
      </ul>
      <div class="el-switch__core">
        <Sunny style="font-size: 2em; width: 0.2rem; height: 0.2rem" />
        <Moon style="font-size: 2em; width: 0.2rem; height: 0.2rem" />
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { toPageQuery } from '@/utils/index'
import { onMounted, ref } from 'vue'

import Moon from '~icons/ep/moon'
import Sunny from '~icons/ep/sunny'

const list = ref([
  { id: '', text: 'react' },
  { id: '', text: 'vue' },
  { id: '', text: '知识点' },
  { id: '', text: '手写题' },
  { id: '', text: 'Js函数' },
  { id: '', text: 'Github' },
  { id: '', text: '掘金' }
])
const navId = ref(-1)

onMounted(() => {
  getActiveId()
})

// 跳到个人页
const onToUser = () => {
  toPageQuery('/myUser')
}

//  跳到首页
const onRefresh = () => {
  toPageQuery('/home')
}

// 导航跳转
const getActiveId = () => {
  const index = JSON.parse(sessionStorage.getItem('navId') as string | any)
  if (index) {
    navId.value = index
  }
}
const onSetActiveId = (index: number) => {
  navId.value = index
  sessionStorage.setItem('navId', JSON.stringify(index))
}
</script>
<style scoped lang="scss">
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.14rem 0.2rem;
  background-color: #fff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  color: #5b5858;
  box-sizing: border-box;
  z-index: 999;

  .logo {
    display: flex;
    align-items: center;
    img {
      width: 0.48rem;
      height: 0.48rem;
      border-radius: 50%;
      margin-right: 0.2rem;
      border: solid 1px sandybrown;
      animation: turn 10s linear infinite;
    }
    p {
      font-weight: 600;
      font-size: 0.24rem;
    }
  }

  .nav {
    display: flex;
    ul {
      display: flex;
      font-weight: 600;
      font-size: 0.17rem;
      li {
        margin: 0 0.1rem;
        span {
          display: inline-block;
          position: relative;
          transition: all 0.2s linear;
          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 100%;
            height: 4px;
            background: #b00ac8ed;
            border-radius: 4px;
            width: 0;
            transition: width 0.36s;
          }
        }
        &:hover span::after {
          width: 100%;
        }
      }
      .active {
        span:after {
          width: 100%;
          background-color: #b00ac8ed;
        }
      }
    }
  }

  .el-switch__core {
    border: 2px solid #dcdfe6;
    border-radius: 50%;
    display: flex;
    padding: 4px;
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
