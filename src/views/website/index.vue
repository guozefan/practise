<script setup lang="ts">
import { getWebSiteList, deleteWebSiteInfo } from "@/api/webSite";
import { menusStroe } from "@/store/menus";
import { getImg } from "@/utils/index";
import { onMounted, ref } from "vue";
import editForm from "./form/index.vue";
import { Message } from "@/utils/message";
// import { Close } from "@element-plus/icons-vue";
const menusPinia = menusStroe();

const dialogVisible = ref(false);
const list = ref([]);
const type_dict = ref([]);
const clickTimes = ref(0);
const formData = ref({
  id: "",
  title: "",
  type: "",
  urls: "",
  desc: "",
  logo: "",
});

// 获取数据
async function getList() {
  const { code, data, message } = await getWebSiteList({
    page: 1,
    limit: 1000,
  });
  if (code == 200) {
    let arr: any = [];
    data.map((item: any) => {
      const index = arr.findIndex((i) => i.type == item.type);
      if (index != -1) {
        arr[index].children.push(item);
      } else {
        type_dict.value.push({ label: item.type, value: item.type });
        arr.push({ type: item.type, children: [item] });
      }
    });

    list.value = arr;
    const menus = arr.map((item: any) => {
      return { meta: { title: item.type } };
    });
    menusPinia.setMenus(menus);
  } else {
    Message(message, {
      type: "error",
    });
  }
}

// 点击跳转
const onClick = (row: any) => {
  clickTimes.value += 1;
  if (clickTimes.value === 2) {
    clickTimes.value = 0;
    onEdit(row);
  }
  setTimeout(function () {
    if (clickTimes.value === 1) {
      clickTimes.value = 0;
      window.open(row.url, "_blank");
    }
  }, 250);
};

// 删除
async function onReomveve(id: any) {
  const { code, message } = await deleteWebSiteInfo({ id });
  console.log(code, message);
  if (code == 200) {
    Message(message, {
      type: "success",
    });
    getList();
  } else {
    Message(message, {
      type: "error",
    });
  }
}

// 新增
function onAdd() {
  dialogVisible.value = true;
  formData.value = {
    id: "",
    title: "",
    type: "",
    urls: "",
    desc: "",
    logo: "",
  };
}

// 编辑事件
function onEdit(row: any) {
  dialogVisible.value = true;
  formData.value = row;
  console.log(row, "row", formData.value);
}

onMounted(() => {
  getList();
});
</script>
<template>
  <div class="min-container" style="width: 100%">
    <div class="card-list">
      <div class="card-item" v-for="(item, index) in list" :key="index">
        <h3 class="card-title" @click="onAdd">
          {{ item.type }}
        </h3>
        <div class="card-content">
          <ul>
            <li
              v-for="row in item.children"
              :key="row.id"
              @click="onClick(row)"
            >
              <div class="img">
                <img
                  :src="getImg(row.img ? 'img/' + row.img : 'img/emoji.png')"
                  alt=""
                />
              </div>
              <el-tooltip
                class="sub-title"
                effect="dark"
                style="width: 100px"
                placement="top"
              >
                <div class="card-text">
                  <span v-for="item in row.title" :key="item">{{ item }}</span>
                </div>
                <template #content>
                  <p class="sub-text">{{ row.desc }}</p>
                </template>
              </el-tooltip>
              <!-- <div class="close" @click.stop="onReomveve(row.id)">
                <el-icon><Close /></el-icon>
              </div> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <editForm
    v-model="dialogVisible"
    :type_dict="type_dict"
    :formInline="formData"
    :getList="getList"
  />
</template>

<style scoped lang="scss">
main {
  padding: 1rem 0.6rem 0;

  .card-item {
    width: 100%;
    box-shadow: 0 0 0.1rem var(--bg-shadow-color);
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 0.4rem;
    position: relative;

    .card-title {
      height: 0.56rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.24rem;
      color: var(--text-color);
    }

    .card-content {
      overflow-y: auto;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      li {
        width: calc(80px - 15px);
        box-sizing: border-box;
        padding: 0.1rem;
        margin: 0.2rem 0.1rem 0.2rem 0.2rem;
        box-shadow: 0 0 0.1rem var(--bg-shadow-color);
        box-sizing: border-box;
        border-radius: 5px;
        position: relative;

        &:hover {
          box-shadow: 0 10px 15px var(--tip-color);
          transition: box-shadow 0.2s cubic-bezier(0, 0, 1, 1);
          img {
            transition: all 0.7s;
            transform: scale(1.3);
          }
          .card-text {
            color: var(--tip-color);
          }

          .close {
            opacity: 1;
          }
        }

        .img {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 0.1rem;
          img {
            width: 90%;
            height: 90%;
            border-radius: 50%;
            vertical-align: top;
          }
        }
        .card-text {
          font-size: 0.18rem;
          color: var(--text-color);
          span {
            display: block;
            text-align: center;
            text-transform: uppercase;
          }
        }

        .close {
          position: absolute;
          right: 0;
          top: 0;
          width: 26px;
          height: 26px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 0.2rem;
          color: #fff;
          transform: translate(50%, -50%);
          background-color: var(--tip-color);
          opacity: 0;
          transition: opacity 0.2s;
        }
      }
    }
  }
}

.sub-text {
  max-width: 1.8rem;
  line-height: 1.8;
}
</style>
