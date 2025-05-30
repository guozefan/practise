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

    <div
      class="navs"
      @mouseleave="handleMouseLeave"
      @mouseenter="handleMouseEnter"
    >
      <div class="outer-button"></div>
      <div class="codepen-button" @click="handleClick">
        <div class="inside-button"><span></span><span></span><span></span></div>
      </div>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="[isAnimation ? 'entering' : 'leaving']"
          :style="{
            '--start-angle': `${index * 90 - 135}deg`,
            '--end-angle': `${index * 90 - 135 + 720}deg`, // 2圈旋转
            '--radius': `80px`,
            '--anim-duration': `1600ms`,
            '--easing': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }"
        >
          <div :class="item.class">{{ item.text }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { createRandom } from "@/utils/index";
import { onMounted, ref } from "vue";

const introduce = ref();
const isAnimation = ref(false);
let leaveTimer: null | number = null;

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
const list = ref([
  {
    text: "简历",
    url: "",
    class: "btn-resume",
    id: 1,
  },
  {
    text: "资料",
    url: "",
    class: "btn-profile",
    id: 2,
  },
  {
    text: "案例",
    url: "",
    class: "btn-case",
    id: 3,
  },
  {
    text: "笔记",
    url: "",
    class: "btn-note",
    id: 4,
  },
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

// 菜单点击
function handleClick() {
  isAnimation.value = !isAnimation.value;
}

// 鼠标离开动画
const handleMouseLeave = () => {
  leaveTimer = setTimeout(() => {
    isAnimation.value = false;
  }, 1000);
};

// 鼠标进入动画
const handleMouseEnter = () => {
  if (leaveTimer) {
    clearTimeout(leaveTimer);
  }
};
</script>
<style lang="scss" scoped>
@use "sass:color"; // 添加颜色模块导入
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

    .outer-button {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      &::after {
        content: "";
        position: absolute;
        inset: -4px;
        background: linear-gradient(
          45deg,
          #ff6b6b,
          /* 红色 */ #4ecdc4,
          /* 青色 */ #45b7d1,
          /* 蓝色 */ #96c93d,
          /* 绿色 */ #ffd700 /* 黄色 */
        );
        border-radius: 16px;
        z-index: -1;
        animation: flow 4s linear infinite;
        filter: blur(24px);
        opacity: 0.9;
        background-size: 400% 400%;
      }
    }
    .codepen-button {
      cursor: pointer;
      color: white;
      margin: 0 auto;
      position: relative;
      text-decoration: none;
      font-weight: 600;
      border-radius: 50%;
      overflow: hidden;
      padding: 6px;
      isolation: isolate;
      z-index: 9;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 400%;
        height: 100%;
        background: linear-gradient(
          115deg,
          #4fcf70,
          #fad648,
          #a767e5,
          #12bcfe,
          #44ce7b
        );
        background-size: 25% 100%;
        animation: an-at-keyframe-css-at-rule-that-translates-via-the-transform-property-the-background-by-negative-25-percent-of-its-width-so-that-it-gives-a-nice-border-animation_-We-use-the-translate-property-to-have-a-nice-transition-so-it_s-not-a-jerk-of-a-start-or-stop
          0.75s linear infinite;
        animation-play-state: paused;
        translate: -5% 0%;
        transition: translate 0.25s ease-out;
      }

      &:hover::before {
        animation-play-state: running;
        transition-duration: 0.75s;
        translate: 0% 0%;
      }
      .inside-button {
        position: relative;
        width: 0.5rem;
        height: 0.5rem;
        background: #000;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          width: 0.05rem;
          height: 0.05rem;
          border-radius: 50%;
          background-color: #fff;
          display: inline-block;
          margin: 0 2px;
        }
      }
    }

    ul {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;

      li {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        text-align: center;
        line-height: 1.5;
        font-size: 0.2rem;
        transform: scale(0);
        color: #101013;
        background-color: rgba(255, 255, 255, 1);
        transform: rotate(var(--start-angle)) translate(0)
          rotate(calc(-1 * var(--start-angle))) scale(0);
      }
    }

    // 配色方案
    $colors: (
      resume: #2a5c83,
      profile: #3d3d3d,
      case: #2b593f,
      note: #4a365c,
    );
    @each $name, $color in $colors {
      .btn-#{$name} {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        writing-mode: vertical-rl;
        font-size: 0.14rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: linear-gradient(
          145deg,
          color.scale($color, $lightness: 5%),
          $color
        );
        color: rgba(255, 255, 255, 0.9);
        font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
        font-size: 0.16rem;
        font-weight: 500; // 中等字重
        letter-spacing: 0.5px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          background: linear-gradient(
            145deg,
            color.scale($color, $lightness: 8%),
            color.scale($color, $lightness: 2%)
          );
          border-color: rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        &:active {
          transform: scale(0.98);
        }
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
/* 阴影流动动画 */
@keyframes flow {
  0% {
    background-position: 0% 50%;
    transform: scale(1);
  }
  50% {
    background-position: 100% 50%;
    transform: scale(1.05);
  }
  100% {
    background-position: 0% 50%;
    transform: scale(1);
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

@keyframes an-at-keyframe-css-at-rule-that-translates-via-the-transform-property-the-background-by-negative-25-percent-of-its-width-so-that-it-gives-a-nice-border-animation_-We-use-the-translate-property-to-have-a-nice-transition-so-it_s-not-a-jerk-of-a-start-or-stop {
  to {
    transform: translateX(-25%);
  }
}
</style>
