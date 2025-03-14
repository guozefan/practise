<template>
    <div class="container">
        <div class="prize-list" ref="prizeWrap" :style="bgColor">
            <div class="prize-item" v-for="(item, index) in state.prizeList" :style="prizeStyle(index)">
                <img :src="item.pic" alt="">
                <p>{{ item.name }}</p>
            </div>
        </div>
        <div class="btn" @click="start"></div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, reactive, toRefs, computed, nextTick } from 'vue'

const state = reactive({
    prizeList: [
        { name: '手机', pic: 'https://bkimg.cdn.bcebos.com/pic/3801213fb80e7bec54e7d237ad7eae389b504ec23d9e' },
        { name: '手表', pic: 'https://img1.baidu.com/it/u=2631716577,1296460670&fm=253&fmt=auto&app=120&f=JPEG' },
        { name: '苹果', pic: 'https://img2.baidu.com/it/u=2611478896,137965957&fm=253&fmt=auto&app=138&f=JPEG' },
        { name: '棒棒糖', pic: 'https://img2.baidu.com/it/u=576980037,1655121105&fm=253&fmt=auto&app=138&f=PNG' },
        { name: '娃娃', pic: 'https://img2.baidu.com/it/u=4075390137,3967712457&fm=253&fmt=auto&app=138&f=PNG' },
        { name: '木马', pic: 'https://img1.baidu.com/it/u=2434318933,2727681086&fm=253&fmt=auto&app=120&f=JPEG' },
        { name: '德芙', pic: 'https://img0.baidu.com/it/u=1378564582,2397555841&fm=253&fmt=auto&app=120&f=JPEG' },
        { name: '玫瑰', pic: 'https://img1.baidu.com/it/u=1125656938,422247900&fm=253&fmt=auto&app=120&f=JPEG' }
    ], // 后台配置的奖品数据
    isRunning: false, // 是否正在抽奖
    baseRunAngle: 360 * 5, // 总共转动角度 至少5圈
    prizeId: 0, // 中奖id
})
const prizeWrap = ref(null)


// 平均每个奖品角度
const rotateAngle = computed(() => {
    const _degree = 360 / state.prizeList.length
    return _degree
})

// 要执行总角度数
const totalRunAngle = computed(() => {
    return state.baseRunAngle + 360 - state.prizeId * rotateAngle.value - rotateAngle.value / 2
})

// 计算绘制转盘背景
const bgColor = computed(() => {
    const _len = state.prizeList.length
    const colorList = ['#5352b3', '#363589']
    let colorVal = ''
    for (let i = 0; i < _len; i++) {
        colorVal += `${colorList[i % 2]} ${rotateAngle.value * i}deg ${rotateAngle.value * (i + 1)}deg,`
    }
    return `
            background: conic-gradient(${colorVal.slice(0, -1)});
          `
})
// 每个奖品布局
const prizeStyle = computed(() => {
    const _degree = rotateAngle.value
    return (i) => {
        return `
              width: ${2 * 270 * Math.sin(_degree / 2 * Math.PI / 180)}px;
              height: 270px;
              transform: rotate(${_degree * i + _degree / 2}deg);
              transform-origin: 50% 100%;
            `
    }
})

onMounted(() => {
    prizeWrap.value.style = `${bgColor.value} transform: rotate(-${rotateAngle.value / 2}deg)`
})

onUnmounted(() => {
    prizeWrap.value.removeEventListener('transitionend', stopRun)
})

// 获取随机数
const getRandomNum = () => {
    const num = Math.floor(Math.random() * state.prizeList.length)
    return num
}

const start = () => {
    if (!state.isRunning) {
        state.isRunning = true

        console.log('开始抽奖，后台请求中奖奖品')
        // 请求返回的奖品编号 这里使用随机数
        const prizeId = getRandomNum()
        console.log('中奖ID>>>', prizeId, state.prizeList[prizeId])
        state.prizeId = prizeId
        startRun()
    }
}

const startRun = () => {
    console.log(state.isRunning, totalRunAngle.value)
    // 设置动效
    prizeWrap.value.style = `
            ${bgColor.value}
            transform: rotate(${totalRunAngle.value}deg);
            transition: all 4s ease;
          `
    // 监听transition动效停止事件
    prizeWrap.value.addEventListener('transitionend', stopRun)
}

const stopRun = (e) => {
    console.log(e)
    state.isRunning = false
    prizeWrap.value.style = `
            ${bgColor.value}
            transform: rotate(${totalRunAngle.value - state.baseRunAngle}deg);
          `
}
</script>
<style lang="scss">
.container {
    width: 540px;
    height: 540px;
    /*background: #98d3fc url('https://www.jq22.com/demo/vue-luck-draw-pdmm202010260015/img/bg.a4b976d5.png') no-repeat center / 100% 100%;*/
    /*background: conic-gradient( 
       red 6deg, orange 6deg 18deg, yellow 18deg 45deg, 
       green 45deg 110deg, blue 110deg 200deg, purple 200deg);*/
    margin: 100px auto;
    position: relative;
}

.prize-list {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 10px solid #98d3fc;
    overflow: hidden;
}

.prize-item {
    /*border: 2px solid red;*/
    position: absolute;
    left: 0;
    right: 0;
    top: -10px;
    margin: auto;
}

.prize-item img {
    width: 30%;
    height: 20%;
    margin: 40px auto 10px;
    display: block;
}

.prize-item p {
    color: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
}

.btn {
    width: 160px;
    height: 160px;
    background: url('https://www.jq22.com/demo/jquerylocal201912122316/img/btn_lottery.png') no-repeat center / 100% 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
}

.btn::before {
    content: "";
    width: 41px;
    height: 39px;
    background: url('https://www.jq22.com/demo/jquerylocal201912122316/img/icon_point.png') no-repeat center / 100% 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: -33px;
    margin: auto;
}
</style>