<template>
  <Header />
  <main>
    <div class="card-item">
      <h3>闲余资源</h3>
      <ul>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
        <li>
          <div class="img"><img src="@/assets/img/avatar.jpg" alt="" /></div>
          <div class="text">
            <p class="title">前端程序员</p>
            <p class="sub-title">会vue，react，小程序，等等</p>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { website } from "@/assets/data/website";
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
        align-items: center;
        justify-content: center;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        background-color: #fff;
        margin-bottom: 0.3rem;
        box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
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
          .title {
            font-size: 0.18rem;
            color: #2b57e2;
            margin-bottom: 0.05rem;
          }
          .sub-title {
            font-size: 0.14rem;
          }
        }
      }
    }
  }
}
</style>