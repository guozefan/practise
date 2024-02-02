<template>
  <Header />
  <main>
    <div class="card-item" v-for="item in website" :key="item.id">
      <h3>{{ item.title }}</h3>
      <ul>
        <li v-for="row in item.list" :key="row.id" @click="onClick(row)">
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
              <p class="sub-title">{{ row.text }}</p>
              <template #content>
                <p class="sub-text">{{ row.text }}</p>
              </template>
            </el-tooltip>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { website } from "@/assets/data/website";
import { getImg } from "@/utils/index";

const onClick = (row: any) => {
  window.open(row.url, "_blank");
};
</script>
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
</style>
