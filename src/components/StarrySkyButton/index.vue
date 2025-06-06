<template>
  <button
    type="button"
    class="starry-sky-button"
    :style="{
      '--color1': borColor[0],
      '--color2': borColor[1],
      '--color3': borColor[2],
      '--color4': borColor[3],
      '--bgColor1': bgColor[0],
      '--bgColor2': bgColor[1],
    }"
  >
    <strong>{{ text }}</strong>
    <div id="container-stars">
      <div id="stars"></div>
    </div>

    <div id="glow">
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "默认",
  },
  // 边框颜色
  borColor: {
    type: Array<string>,
    default: ["#ffdb3b", "#ff9b17d7", "#f9ff41", "#feb200d7"],
  },
  // 背景颜色
  bgColor: {
    type: Array<string>,
    default: ["#212121", "#212121"],
  },
});
</script>

<style lang="scss" scoped>
.starry-sky-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.65rem;
  height: 0.65rem;
  overflow: hidden;
  writing-mode: vertical-rl;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 50%;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(var(--bgColor1), var(--bgColor2)),
    linear-gradient(
      137.48deg,
      var(--color1) 10%,
      var(--color2) 45%,
      var(--color3) 67%,
      var(--color4) 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  #container-stars {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 50%;
  }

  strong {
    z-index: 2;
    font-family: "Poppins" sans-serif;
    font-size: 14px;
    letter-spacing: 6px;
    color: #ffffff;
    text-shadow: 0 0 4px rgb(0, 0, 0);
  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;
  }

  .circle {
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;
  }

  .circle:nth-of-type(1) {
    background: rgba(0, 0, 1860, 0.936);
  }

  .circle:nth-of-type(2) {
    background: rgba(0, 0, 1860, 0.936);
  }

  &:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  &:active .circle {
    background: #fe53bb;
  }

  #stars {
    position: relative;
    background: transparent;
    width: 65px;
    height: 65px;
    overflow: hidden; /* 添加溢出隐藏 */
  }

  #stars::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    animation: animStarRotate 1s linear infinite;
  }

  #stars::after {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 20px 20px;
  }

  #stars::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 500%;
    animation: animStar 2s linear infinite;
    /* 添加动画延迟，使两组粒子错开 */
    // animation-delay: -3s;
  }

  #stars::before {
    background-image: radial-gradient(#ffffff 0.5px, transparent 1%);
    background-size: 16px 16px;
    opacity: 0.5;
  }
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-65px);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(0);
  }
}

// /* 修改上升动画，增加一些横向移动 */
// @keyframes animStarFly {
//   0% {
//     transform: translateY(100%) translateX(-5px);
//     opacity: 0.3;
//   }
//   10% {
//     opacity: 1;
//   }
//   90% {
//     opacity: 1;
//   }
//   100% {
//     transform: translateY(-100%) translateX(5px);
//     opacity: 0.3;
//   }
// }

// /* 保留原有的animStar动画，但不再使用 */
// @keyframes animStar {
//   from {
//     transform: translateY(0);
//   }

//   to {
//     transform: translateY(-65px);
//   }
// }
@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
