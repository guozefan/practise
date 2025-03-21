import { http } from "@/utils/http";

type Result = {
  code: number;
  data?: Array<any> | any;
  message: string;
};


// 获取博客资料接口
export const getWebSiteList = (data?: object) => {
  return http.request<Result>("get", "/practise/website/getList", data);
};

// 新增博客资料接口
export const addWebSiteInfo = (data?: object) => {
  return http.request<Result>("post", "/practise/website/add", data);
};

// 编辑博客资料接口
export const editWebSiteInfo = (data?: object) => {
  return http.request<Result>("post", "/practise/website/edit", data);
};



// 删除博客资料接口
export const deleteWebSiteInfo = (data?: object) => {
  return http.request<Result>("post", "/practise/website/delete", data);
};