<template>
  <div class="my-user">
    <div class="my-avatar">
      <div class="my-name">
        <img
          class="animate__animated animate__bounceInDown"
          src="@/assets/img/avatar.jpg"
          alt=""
        />
        <p
          class="name animate__animated animate__jackInTheBox animate__delay_5ms"
        >
          GUO ZE FAN
        </p>
        <p class="introduce" ref="introduce"></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { ComponentPublicInstance } from "vue";
import { createRandom } from "@/utils/index";
const introduce = ref();
const clause = ref<string[]>([
  "不要因为没有掌声就放弃梦想",
  "活得太清醒本就是件不浪漫的事",
  "记得在这杂乱的生活里，每天带点笑意",
  "但愿那些不为人知的你，都有被好好珍藏",
  "除了死亡其他的别离都应该庆幸",
  "一定要足够优秀才能堵住悠悠众口",
  "对于值得与热爱的事情，就要做到极致",
  "我披上铠甲手握长枪，用尽所有捍卫我所追求的光明与温柔",
  "每个人都很孤独，在人的一生中，遇到爱、遇到性都不稀罕，稀罕的是遇到了解",
  "一个人，一本书，一杯茶，一帘梦。有时候，寂寞是这样叫人心动，也只有此刻，世事才会如此波澜不惊",
  "不必太纠结于当下，也不必太忧虑未来，当你经历过一些事情的时候，眼前的风景已经和从前不一样了",
]);

const saying = ref<string[][]>([
  ["生命太短暂,不要去做一些根本没有人想要的东西", "—— Ash Maurya"],
  [
    "如果你交给某人一个程序,你将折磨他一整天；如果你教某人如何编写程序,你将折磨他一辈子",
    "—— David Leinweber",
  ],
  [
    "软件设计有两种方式：一种方式是,使软件过于简单,明显没有缺陷；另一种方式是,使软件过于复杂,没有明显的缺陷",
    "—— C.A.R. Hoare",
  ],
  ["当你试图解决一个你不理解的问题时,复杂化就产成了", "—— Andy Boothe"],
  ["没有什么代码的执行速度比空代码更快", "—— Merb 核心原则"],
]);

onMounted(() => {
  createText();
});

const createText = () => {
  let clauseIndex: number | string =
    window.sessionStorage.getItem("clauseIndex") || 0;

  if (clauseIndex >= clause.value.length - 1) {
    clauseIndex = 0;
  }

  if (clauseIndex) {
    clauseIndex++;
    window.sessionStorage.setItem("clauseIndex", clauseIndex);
  } else {
    window.sessionStorage.setItem("clauseIndex", 0);
  }
  const randomIndex = createRandom(0, saying.value.length - 1);
  init([clause.value[clauseIndex], ...saying.value[randomIndex]]);
};

const init = (res: string[]) => {
  new TypeIt(introduce.value, {
    strings: res,
    cursorChar: "<span class='cursorChar'>|<span>", //用于光标的字符。HTML也可以
    startDelay: 1000, // 初始化插件后的空隙时间
    speed: 200, // 打字速度
    lifeLike: true, // 使打字速度不规则
    cursor: true, //在字符串末尾显示闪烁的光标
    breakLines: false, // 控制是将多个字符串打印在彼此之上，还是删除这些字符串并相互替换
    loop: true, //是否循环
  }).go();
};
</script>
<style lang="scss" scoped>
.my-user {
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
  }

  .my-avatar {
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-name {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      box-shadow: 0 0 0.8rem rgba(255, 255, 255, 0.7);
      margin-bottom: 0.3rem;
    }

    .name {
      color: #fff;
      font-weight: 600;
      font-family: math;
      font-size: 0.6rem;
      letter-spacing: 15px;
      margin-bottom: 0.3rem;
    }

    .introduce {
      letter-spacing: 0.1rem;
      font-size: 0.16rem;
      color: #fff;
      max-width: 6rem;
      line-height: 2.2;

      &::v-deep .cursorChar {
        display: inline-block;
        margin-left: 2px;
        font-size: 0.18rem;
        color: #fff;
      }
    }
  }
}

.animate__delay_5ms {
  animation-delay: 0.5s;
}
</style>
