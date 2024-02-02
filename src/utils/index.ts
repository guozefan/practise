import router from '@/router/index'

type toPage = (url: string, params?: any) => void
type randomNum = (minNum: number, maxNum?: number) => number

// 获取图片
export const getImg = (url: string) => {
  console.log(url)
  return new URL(`../assets/${url}`, import.meta.url).href;
};

// 生成随机数
export const createRandom: randomNum = (minNum, maxNum) => {
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

// 跳转页面-参数拼接在URL后面，刷新页面不会丢失参数
export const toPageQuery: toPage = (url, params) => {
  router.push({
    path: url,
    query: params
  })
};

// 跳转页面-参数不可见，刷新页面丢失参数，可使用动态传参解决丢失问题
export const toPageParams: toPage = (url, params) => {
  router.push({
    name: url,
    params,
  })
};