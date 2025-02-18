import { http } from "@/utils/http";

type Result = {
  code: number;
  data?: Array<any> | any;
  msg: string;
  time: number;
};

// 导出一个函数getAliOss，用于上传文件到阿里云OSS
export const addWebSiteInfo = (data?: object) => {
  // 发送post请求，请求地址为/upload/aliOss，请求参数为data
  return http.request<Result>("post", "/practise/website/add", data);
};