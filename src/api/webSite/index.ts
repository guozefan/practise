import { http } from "@/utils/http";

type Result = {
  code: number;
  data?: Array<any> | any;
  msg: string;
  time: number;
};


// 获取博客资料接口
export const getWebSiteList = (data?: object) => {
  return http.request<Result>("post", "/practise/website/getList", data);
};

// 新增博客资料接口
export const addWebSiteInfo = (data?: object) => {
  return http.request<Result>("post", "/practise/website/add", data);
};


// 删除博客资料接口
export const deleteWebSiteInfo = (data?: object) => {
  return http.request<Result>("post", "/practise/website/delete", data);
};