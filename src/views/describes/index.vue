<template>
  <div class="describes">
    <h4>前言</h4>
    <!-- <p>
      哈喽
      大家好呀，我是一个爱看海贼王的男孩，赶在互联网红利结束的时候加入了IT大部队，成为了一名前端北漂者，从此开启了漫漫长路。记得19年那会出来找工作，简历一挂上去，就会有好多人联系，电话响个不停，薪资福利待遇都挺不错的，根本不愁找工作。工作不开心的时候，常常和朋友开玩笑说，这家不行，就换了他，不能惯着他，谁知几年疫情下来，各行各业都不景气，打开手机都是公司大批裁人优化、缩减业务的新闻，朋友圈某某家公司倒闭，那时刚入行，有稳定的工作，公司情况也挺好的，不在意这些，听听就好了，疫情嘛，整个行情不好，这也正常，疫情以后不就好了，根本没想过有一天互联网会成为现在这个样子，一个岗位刚开启招聘，就收到几百份简历，看的HR密密麻麻，他们为了提高效率，优先筛选学历高985,211的先留下，其他的先都放后，再其次就看以往的工作经验，一次筛选下来，就能淘汰大量的面试者，因此很多人的简历如泥牛入海，一去不回，半天下来很少收到回复的，在残酷的大环境下，要想有份工作就要不得不卷起来，一个人干俩三的活，提升学历，卷技术，卷加班，卷能卷的一切，只为有个工作，那些背着房贷，车贷，上有老下有小的可想而知，压力有多大，而我作为北漂大军中的一员，为了有更好的生活，也想找个好工作，大专出身，非全本科，大部分HR上来一句，是统招本学信网嘛，就没了下文，哎,学历这方面是卷不动了，只能卷技术，现在前端能干的事越来越多了，桌面端、小程序、Web网页、语音通信、视频、3D、小游戏、GIS地图与node领域的后端，所有的技术还在快速的迭代创新，不学习不行，还要拼命的学习，要想把前端领域都掌握是不可能的，只能朝着一个方向前进。说实话，我挺喜欢前端这份工作的，看着自己完成的功能效果，心里还是蛮开心的，可惜我有点懒，还有点迷茫，不知道从哪学，要么自己基础不够学的吃力，要么学一会就困了，总之不学习的理由有很多，所以要开发这个网页，留下学习的痕迹，监督自己，见证自己，让懒惰的自己行动起来，接下来会重新打打基础，巩固框架，写写好玩的效果，做做笔记，努力吧，前端男孩！
    </p> -->
    <div class="luffy-banner">
      <div class="prev" @click="onPrev">《</div>
      <div class="carousel">
        <img
          v-for="(item, index) in list"
          :key="index"
          :src="getImg(item.url)"
          :style="{
            transform: `translateX(${item.translateX}px) rotateY(${item.rotateY}deg) scale(${item.scale})`,
            opacity: item.opacity,
            zIndex: item.zIndex,
          }"
          @click="onClick(item.id)"
          alt=""
        />
      </div>
      <div class="next" @click="onNext">》</div>
    </div>
    <div class="coders-video">
      <video id="player" playsinline controls>
        <source src="@/assets/video/coders.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { getImg } from "@/utils/index";

const index = ref(3);
const BASH_KEY = reactive({
  OFFSET: 200,
  SCALE: 0.8,
  ROTATE: 45,
  OPACITY: 0.6,
});
const list = ref([
  {
    url: "/figure/jpgluffy3.jpg",
    id: "3",
  },
  {
    url: "/figure/jpgluffy2.jpg",
    id: "2",
  },
  {
    url: "/figure/jpgluffy1.jpg",
    id: "1",
  },
  {
    url: "/figure/jpgluffy7.jpg",
    id: "7",
  },
  {
    url: "/figure/jpgluffy4.jpg",
    id: "4",
  },
  {
    url: "/figure/jpgluffy5.jpg",
    id: "5",
  },
  {
    url: "/figure/jpgluffy6.jpg",
    id: "6",
  },
]);

onMounted(() => {
  setStyle(index.value);
});
function setStyle(imgIndex: number) {
  let arr = list.value;
  list.value = arr.map((item: any, index: number) => {
    const img_index = index - imgIndex;
    const abs = Math.abs(img_index);
    const sign = -1 * Math.sign(img_index);
    item.translateX = img_index * BASH_KEY.OFFSET;
    if (abs === 1) {
      item.translateX += sign * 30;
    }
    item.rotateY = abs === 0 ? 0 : sign * BASH_KEY.ROTATE; // -1
    item.scale = Math.pow(BASH_KEY.SCALE, abs);
    item.opacity = Math.pow(BASH_KEY.OPACITY, abs);
    item.zIndex = arr.length - abs;
    return item;
  });
}

function onClick(id: string) {
  const img_index = list.value.findIndex((item: any) => item.id === id);
  setStyle(img_index);
}

function onPrev() {
  index.value--;
  if (index.value < 0) {
    index.value = 0;
  }
  setStyle(index.value);
}
function onNext() {
  index.value++;
  if (index.value >= list.value.length - 1) {
    index.value = list.value.length - 1;
  }
  setStyle(index.value);
}
</script>
<style scoped lang="scss">
.describes {
  padding: 90px 90px 30px;

  h4 {
    text-align: center;
    font-size: 26px;
    margin-bottom: 14px;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    text-indent: 32px;
  }

  //  视频
  .coders-video {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    #player {
      width: 600px;
      height: 340px;
      border-radius: 20px;
    }
  }

  //  轮播图
  .luffy-banner {
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 50px;
    .prev,
    .next {
      position: absolute;
      top: 50%;
      margin-top: -50px;
      font-size: 100px;
      cursor: pointer;
      z-index: 99;
    }
    .prev {
      left: -50px;
    }
    .next {
      right: -50px;
    }

    .carousel {
      width: 100%;
      overflow: hidden;
      position: relative;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform-style: preserve-3d;
      perspective: 1000px;
      img {
        width: 280px;
        height: 400px;
        transition: 0.2s linear;
        position: absolute;
      }
    }
  }
}
</style>