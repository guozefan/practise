export const getImg = (val:string) => {
    return new URL(`../assets/figure/${val}.jpg`, import.meta.url).href;
  };
  