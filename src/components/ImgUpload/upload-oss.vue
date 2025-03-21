<script setup lang="ts">
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { Message } from "@/utils/message";
import { getAliOss } from "@/api/upload/oss.ts";

import type { UploadProps } from "element-plus";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  //接受上传的文件类型（thumbnail-mode 模式下此参数无效）
  accept: {
    type: String,
    default: ".jpg,.jpeg,.png",
  },
  sizeMax: {
    type: Number,
    default: 1,
  },
});

const imageUrl = ref(props.modelValue);

const ossData = ref({
  OSSAccessKeyId: "LTAI5tMhbSq1LhCFF752ncvi",
  expire: "",
  policy: "",
  signature: "",
  accessid: "",
  host: "",
  callback: "",
  dir: "",
  key: "",
});

const emit = defineEmits(["update:modelValue"]);

const handleAvatarSuccess: UploadProps["onSuccess"] = (response) => {
  const url = ossData.value.host + "/" + response.data.filename;
  console.log(url);
  imageUrl.value = url;
  emit("update:modelValue", url);
};

// 文件上传前校验
const beforeAvatarUpload: UploadProps["beforeUpload"] = async (rawFile) => {
  let types = ["image/jpeg", "image/jpg", "image/png"];
  const isImage = types.includes(rawFile.type);
  const size = rawFile.size / 1024 / 1024;
  if (!isImage) {
    Message("请上传jpeg、jpg、png类型的图片", {
      type: "error",
    });
    return false;
  } else if (size > props.sizeMax) {
    Message(`请上传小于${props.sizeMax}M的图片`, {
      type: "error",
    });
    return false;
  }
  const originalName = generateFileName(rawFile.name);
  console.log(originalName);
  await getAliOssData({ customKey: originalName });
  return true;
};

// 获取阿里云OSS数据
async function getAliOssData(params: any) {
  try {
    const res = await getAliOss(params);
    ossData.value = { ...ossData.value, ...res };
  } catch (err) {
    console.log(err);
  }
}

// 生成文件名函数
function generateFileName(originalName: string) {
  // 生成随机字符串
  const uuid = Math.random().toString(36).slice(-8);
  // 获取当前时间戳
  const timestamp = new Date().getTime();
  const ext = originalName.split(".").pop(); // 获取文件扩展名
  return `webskys-files/${timestamp}_${uuid}.${ext}`;
}
</script>

<template>
  <el-upload
    class="avatar-uploader"
    :action="ossData.host"
    :show-file-list="false"
    :data="ossData"
    accept=".jpeg,.png,.jpg"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<style lang="scss" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
  border: 1px dashed var(--el-border-color);
}
</style>
