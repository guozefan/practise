<script setup lang="ts">
import { getWebSiteList, deleteWebSiteInfo } from "@/api/webSite";
import { menusStroe } from "@/store/menus";
import { getImg } from "@/utils/index";
import { nextTick, onMounted, ref } from "vue";
import editForm from "./form/index.vue";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { ElMessage } from "element-plus";
import Drag from "./form/Drag.vue";
const menusPinia = menusStroe();

const dialogVisible = ref(false);
let grid = null; // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
const list = ref([]);

const onClick = (row: any) => {
  window.open(row.url, "_blank");
};

// 获取数据
async function getList() {
  const { code, data, message } = await getWebSiteList({
    page: 1,
    limit: 1000,
  });
  if (code == 200) {
    let arr = [];
    data.map((item) => {
      const index = arr.findIndex((i) => i.type == item.type);
      if (index != -1) {
        arr[index].children.push(item);
      } else {
        arr.push({ type: item.type, children: [item] });
      }
    });

    list.value = arr.map((item, index) => {
      const children = item.children.map((subItem, i) => {
        return {
          ...subItem,
          content: item.title,
          x: (i % 4) * 3,
          y: Math.floor(i / 4),
          w: 3,
          h: 2,
        };
      });
      return {
        ...item,
        children,
        content: item.type,
        x: (index % 4) * 3,
        y: Math.floor(index / 4),
        w: 3,
        h: 2,
      };
    });
    const menus = arr.map((item) => {
      return { meta: { title: item.type } };
    });
    menusPinia.setMenus(menus);
    grid = GridStack.init({
      float: true,
      cellHeight: 80,
      acceptWidgets: true,
      disableResize: true,
    });
    grid.load(list.value);
  } else {
    ElMessage.error(message);
  }
}

onMounted(() => {
  getList();

  // grid.on("dragstop", function (event, element) {
  //   console.log("dragstop", event, element);
  // });

  // grid.on("change", onChange);
});
</script>
<template>
  <div class="min-container" style="width: 100%">
    <el-button @click="dialogVisible = true">新增</el-button>
    <editForm v-model="dialogVisible" />
    <div class="card-item" v-for="(item, index) in list" :key="index">
      <h3>{{ item.type }}</h3>
      <ul>
        <li v-for="row in item.children" :key="row.id" @click="onClick(row)">
          <div class="img">
            <img
              :src="getImg(row.img ? 'img/' + row.img : 'img/emoji.png')"
              alt=""
            />
          </div>
          <div class="text">
            <p class="title">{{ row.title }}</p>
            <el-tooltip
              class="sub-title"
              effect="dark"
              style="width: 100px"
              placement="top"
            >
              <p class="sub-title">{{ row.desc }}</p>
              <template #content>
                <p class="sub-text">{{ row.desc }}</p>
              </template>
            </el-tooltip>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="grid-stack"></div>
  <Drag
    v-model="list"
    gridStackClass="card-list"
    gridStackItemClass="card-list-item"
    gridStackItemContentClass="card-list-content-item"
  >
    <template #item="item">
      <p class="title">{{ item.type }}</p>
      <Drag
        v-model="item.children"
        gridStackClass="card-list-min"
        gridStackItemClass="card-list-item-min"
        gridStackItemContentClass="card-list-content-item-min"
      >
        <template #item="subItem">
          <div class="img">
            <img
              :src="
                getImg(subItem.img ? 'img/' + subItem.img : 'img/emoji.png')
              "
              alt=""
            />
          </div>
          <el-tooltip
            class="sub-title"
            effect="dark"
            style="width: 100px"
            placement="top"
          >
            <p class="sub-title">{{ subItem?.title }}</p>
            <template #content>
              <p class="sub-text">{{ subItem.desc }}</p>
            </template>
          </el-tooltip>
        </template>
      </Drag>
    </template>
  </Drag>
</template>

<style scoped lang="scss">
main {
  padding: 1rem 0.6rem 0;
  background-color: #fafafa;

  .card-item {
    h3 {
      font-size: 0.24rem;
      margin-bottom: 0.3rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 15%;
        box-sizing: border-box;
        display: flex;
        margin-right: 2%;
        padding: 0.2rem;
        background-color: #fff;
        margin-bottom: 0.3rem;
        box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        border-radius: 5px;
        &:nth-child(6n) {
          margin-right: 0;
        }
        &:hover {
          box-shadow: 0 10px 15px #646cff;
          transition: box-shadow 0.2s cubic-bezier(0, 0, 1, 1);
          img {
            transition: all 0.7s;

            transform: rotate(360deg) scale(1.3);
          }
        }

        .img {
          width: 0.6rem;
          height: 0.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 90%;
            height: 90%;
            border-radius: 50%;
            vertical-align: top;
          }
        }
        .text {
          margin-left: 0.1rem;
          flex: 1;
          .title {
            font-size: 0.18rem;
            color: #2b57e2;
            margin-bottom: 0.05rem;
          }
          .sub-title {
            font-size: 0.14rem;
            word-break: break-all;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }
}

.sub-text {
  max-width: 1.8rem;
  line-height: 1.8;
}

.card-list {
  :deep(.card-list-item) {
    box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem;
    .title {
      font-size: 0.18rem;
      height: 0.56rem;
      line-height: 0.56rem;
      text-align: center;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    }
  }
  :deep(.card-list-min) {
    height: calc(100% - 0.56rem);
    .card-list-item-min {
      width: 200px;
      height: 200px;
      .img {
        width: 0.6rem;
        height: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 90%;
          height: 90%;
          border-radius: 50%;
          vertical-align: top;
        }
      }

      .sub-title {
        font-size: 0.18rem;
        text-align: center;
      }
    }
  }
}
</style>
