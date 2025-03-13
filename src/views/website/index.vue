<script setup lang="ts">
import { getWebSiteList, deleteWebSiteInfo } from "@/api/webSite";
import { menusStroe } from "@/store/menus";
import { getImg } from "@/utils/index";
import { nextTick, onMounted, ref } from "vue";
import editForm from "./form/index.vue";
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { ElMessage } from "element-plus";
const menusPinia = menusStroe();

const dialogVisible = ref(false);
let count = ref(0);
let grid = null; // DO NOT use ref(null) as proxies GS will break all logic when comparing structures... see https://github.com/gridstack/gridstack.js/issues/2115
let items = ref([]);
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
    list.value = arr;
    const menus = arr.map((item) => {
      return { meta: { title: item.type } };
    });
    menusPinia.setMenus(menus);
  } else {
    ElMessage.error(message);
  }
}

function onChange(event, changeItems) {
  // update item position
  console.log("onChange", event, changeItems);
  changeItems.forEach((item) => {
    var widget = items.value.find((w) => w.id == item.id);
    if (!widget) {
      alert("Widget not found: " + item.id);
      return;
    }
    widget.x = item.x;
    widget.y = item.y;
    widget.w = item.w;
    widget.h = item.h;
  });
}

function addNewWidget2() {
  const node = items[count.value] || { x: 0, y: 0, w: 5, h: 2 };
  node.id = "w_" + count.value++;
  items.value.push(node);
  nextTick(() => {
    grid.makeWidget(node.id);
  });
}

function removeLastWidget() {
  if (count.value == 0) return;
  var id = `w_${count.value - 1}`;
  var index = items.value.findIndex((w) => w.id == id);
  if (index < 0) return;
  var removed = items.value[index];
  remove(removed);
}

function remove(widget) {
  var index = items.value.findIndex((w) => w.id == widget.id);
  items.value.splice(index, 1);
  const selector = `#${widget.id}`;
  grid.removeWidget(selector, false);
}

onMounted(() => {
  getList();
  grid = GridStack.init({
    float: true,
    cellHeight: "70px",
    minRow: 1,
  });

  grid.on("dragstop", function (event, element) {
    console.log("dragstop", event, element);
  });

  grid.on("change", onChange);
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
  <el-button type="button" @click="addNewWidget2()"
    >Add Widget pos [0,0]</el-button
  >
  <el-button type="button" @click="removeLastWidget()"
    >Remove Last Widget</el-button
  >

  <div class="grid-stack">
    <div
      v-for="(w, indexs) in list"
      class="grid-stack-item"
      :gs-x="w.x"
      :gs-y="w.y"
      :gs-w="w.w"
      :gs-h="w.h"
      :gs-id="w.id"
      :id="w.id"
      :key="w.id"
    >
      <div class="grid-stack-item-content">
        <el-button @click="remove(w)">remove</el-button>
        <div class="grid-stack">
          <div
            v-for="(w, indexs) in w.children"
            class="grid-stack-item"
            :gs-x="w.x"
            :gs-y="w.y"
            :gs-w="w.w"
            :gs-h="w.h"
            :gs-id="w.id"
            :id="w.id"
            :key="w.id"
          >
            <div class="grid-stack-item-content">
              <el-button @click="remove(w)">remove</el-button>
              <div
                v-for="i in 10"
                :key="i"
                style="width: 50px; height: 10px; background-color: blueviolet"
              >
                {{ w }}{{ i }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

.grid-stack {
  background-color: #d5d0ed;
}

.grid-stack-item-content {
  font-size: 0.18rem;
}

.grid-stack-item {
  background-color: aquamarine;
}
</style>
