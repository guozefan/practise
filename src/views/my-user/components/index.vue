<template>
  <div class="container">
    <button
      class="main-button"
      :class="{ hovered: isHovering }"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      主按钮
    </button>
    <transition-group name="fade-rotate" tag="div" class="sub-buttons">
      <button
        v-for="(btn, index) in subButtons"
        :key="index"
        class="sub-button"
        :style="getButtonStyle(index)"
      >
        子按钮{{ index + 1 }}
      </button>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovering: false,
      subButtons: [1, 2, 3, 4],
    };
  },
  methods: {
    onMouseEnter() {
      this.isHovering = true;
    },
    onMouseLeave() {
      this.isHovering = false;
    },
    getButtonStyle(index) {
      if (this.isHovering) {
        const angle = ((90 * index - 45) * Math.PI) / 180; // 计算角度
        const x = 30 * Math.cos(angle);
        const y = 30 * Math.sin(angle);
        return { transform: `translate(${x}px, ${y}px)` };
      }
      return { opacity: 0, transform: "scale(0)" };
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: auto;
}

.main-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.sub-button {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%) scale(0);
  padding: 10px 20px;
  background-color: #ffc107;
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.fade-rotate-enter-active,
.fade-rotate-leave-active {
  animation: rotateAndFade 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes rotateAndFade {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(720deg);
  }
}

.hovered ~ .sub-buttons .sub-button {
  opacity: 1;
}
</style>
