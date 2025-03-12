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
    <div class="navs">
      <div
        class="btn animate__animated animate__shakeX animate__slower animate__infinite"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <span></span><span></span><span></span>
      </div>
      <ul>
        <li
          v-for="i in 4"
          :key="i"
          :class="{ entering: isEntering, leaving: isLeaving }"
          :style="{
            '--start-angle': `${i * 90 - 135}deg`,
            '--end-angle': `${i * 90 - 135 + 720}deg`, // 2圈旋转
            '--radius': `80px`,
            '--anim-duration': `1600ms`,
            '--easing': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }"
          @animationend="handleAnimationEnd"
        >
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { createRandom } from "@/utils/index";
import { onMounted, ref } from "vue";

const introduce = ref();
const isEntering = ref(false);
const isLeaving = ref(false);
const animationTimer = ref();

const clause = ref<string[][]>([
  ["我生来平庸，也生来骄傲", "记得在这杂乱的生活里，每天带点笑意"],
  ["活得太清醒本就是件不浪漫的事", "但愿那些不为人知的你，都有被好好珍藏"],
  ["吹灭读书灯，一身都是月色", "人生如逆旅，我亦是行人"],
  ["对于值得与热爱的事情，就要做到极致", "人生没有白走的路，走的每一步都算数"],
  ["花店不开了，花继续开", "你总会迎来那束光或早或晚"],
  [
    "每次归途，都是为了更好出发，每次停歇，都是为了积攒力量",
    "哪怕黑夜无光，心中若有灯塔，海上的星光足以照亮归途",
  ],
]);

onMounted(() => {
  createText();
});

// 初始化文案，随机下标
const createText = () => {
  const randomIndex = createRandom(0, clause.value.length - 1);
  init(clause.value[randomIndex]);
};

// 初始化打字机插件
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

// 鼠标移入动画
const handleMouseEnter = () => {
  clearTimeout(animationTimer.value);
  if (isLeaving.value) {
    // 如果正在离开，立即停止离开动画
    isLeaving.value = false;
    void document.body.offsetHeight; // 强制重绘
  }
  isEntering.value = true;
};

// 鼠标离开动画
const handleMouseLeave = () => {
  isEntering.value = false;
  isLeaving.value = true;
};

const handleAnimationEnd = (event) => {
  if (event.animationName === "leaveRotate") {
    isLeaving.value = false;
  }
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
    padding-top: 10%;
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
      font-size: 0.18rem;
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

  .navs {
    position: fixed;
    left: 50%;
    bottom: 20%;
    transform: translateX(-50%);

    .btn {
      position: relative;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      border: #fff 1px solid;
      z-index: 999;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      animation-name: breathe;
      animation-duration: 1500ms;
      animation-iteration-count: infinite;

      span {
        width: 0.05rem;
        height: 0.05rem;
        border-radius: 50%;
        background-color: #fff;
        display: inline-block;
        margin: 0 2px;
      }
    }

    ul {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0.5rem;
      height: 0.5rem;

      li {
        position: absolute;
        left: 0;
        top: 0;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.2rem;
        transform: scale(0);
        color: #101013;
        background-color: rgba(255, 255, 255, 1);
        transform: rotate(var(--start-angle)) translate(0)
          rotate(calc(-1 * var(--start-angle))) scale(0);
      }
    }

    // 进入
    .entering {
      animation: enterRotate var(--anim-duration) var(--easing) forwards;
    }

    // 离开
    .leaving {
      animation: leaveRotate calc(var(--anim-duration) * 0.8) var(--easing)
        forwards;
    }
  }
}

.animate__delay_5ms {
  animation-delay: 0.5s;
}

@keyframes breathe {
  0% {
    opacity: 0.4;
    box-shadow: 0 1px 2px rgba(0, 147, 223, 0.4),
      0 1px 1px rgba(0, 147, 223, 0.1) inset;
  }

  100% {
    opacity: 1;
    border: 1px solid rgba(59, 235, 235, 0.7);
    box-shadow: 0 1px 30px #0093df, 0 1px 20px #0093df inset;
  }
}

@keyframes enterRotate {
  0% {
    opacity: 0;
    transform: rotate(var(--start-angle)) translate(0)
      rotate(calc(-1 * var(--start-angle))) scale(0);
  }
  100% {
    opacity: 1;
    transform: rotate(var(--end-angle)) translate(var(--radius))
      rotate(calc(-1 * var(--end-angle))) scale(1);
  }
}

@keyframes leaveRotate {
  0% {
    opacity: 1;
    transform: rotate(var(--end-angle)) translate(var(--radius))
      rotate(calc(-1 * var(--end-angle))) scale(1);
  }
  100% {
    opacity: 0;
    transform: rotate(calc(var(--end-angle) - 720deg)) translate(0)
      rotate(calc(-1 * var(--end-angle) + 720deg)) scale(0);
  }
}
</style>
