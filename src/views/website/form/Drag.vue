<script setup lang="ts">
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.min.css";
import { onMounted, ref, nextTick, watchEffect } from "vue";

defineOptions({
  name: "Drag",
});

let grid: any;

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: Array,
    default: [],
  },
  gridStackClass: {
    type: String,
    default: "grid-stack",
  },
  gridStackItemClass: {
    type: String,
    default: "grid-stack-item",
  },
  gridStackItemContentClass: {
    type: String,
    default: "grid-stack-item-content",
  },
});
const list = ref<any>(props.modelValue);

function initGrid() {
  if (!list.value.length) return;
  grid = GridStack.init({
    float: true,
    animate: true,
    acceptWidgets: true,
    disableResize: true,
    class: props.gridStackClass,
    draggable: {
      handle: props.gridStackItemContentClass,
    },
    handle: props.gridStackItemContentClass,
    handleClass: props.gridStackItemContentClass,
    itemClass: props.gridStackItemClass,
  });
  grid.on("dragstop", function (event: any, element: any) {
    console.log("dragstop", event, element);
  });
  grid.on("change", onChange);
}

watchEffect(() => {
  list.value = props.modelValue;
  nextTick(() => {
    initGrid();
  });
  console.log(list.value);
});

function onChange(event: any, changeItems: any) {
  console.log(event, changeItems);
}

onMounted(() => {
  // grid = GridStack.init({
  //   float: true,
  //   animate: true,
  //   cellHeight: props.cellHeight,
  // });
  // grid.on("dragstop", function (event: any, element: any) {
  //   console.log("dragstop", event, element);
  // });
  // grid.on("change", onChange);
});
</script>

<template>
  <div :class="['grid-stack', gridStackClass]">
    <div
      v-for="item in list"
      :class="['grid-stack-item', gridStackItemClass]"
      :gs-x="item.x"
      :gs-y="item.y"
      :gs-w="item.w"
      :gs-h="item.h"
      :gs-id="item.id"
      :id="item.id"
      :key="item.id"
    >
      <div :class="['grid-stack-item-content', gridStackItemContentClass]">
        <slot name="item" v-bind="item"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
