<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { message } from "@/utils/message";

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

const imageUrl = ref("");

const ossData = ref({
  OSSAccessKeyId: "LTAI5tMhbSq1LhCFF752ncvi",
  expire: "1737615543",
  policy:
    "eyJleHBpcmF0aW9uIjoiMjAyNS0wMS0yM1QwNjo1OTowMi45NDNaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF1dfQ==",
  signature: "GH0DdWyskFJNddjZasziDpUqHxo=",
  accessid: "LTAI5tMhbSq1LhCFF752ncvi",
  host: "http://webskys.oss-cn-beijing.aliyuncs.com",
  callback:
    "eyJjYWxsYmFja1VybCI6Imh0dHA6Ly93d3cuc3lraGVyby5jb20vdXBsb2FkL3Jlc3VsdCIsImNhbGxiYWNrQm9keSI6ImZpbGVuYW1lPSR7b2JqZWN0fSZzaXplPSR7c2l6ZX0mbWltZVR5cGU9JHttaW1lVHlwZX0maGVpZ2h0PSR7aW1hZ2VJbmZvLmhlaWdodH0md2lkdGg9JHtpbWFnZUluZm8ud2lkdGh9IiwiY2FsbGJhY2tCb2R5VHlwZSI6ImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCJ9",
  dir: "webskys-files/",
  key: "webskys-files/${filename}",
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (value: string) => {
  emit("update:modelValue", value);
};

const handleAvatarSuccess: UploadProps["onSuccess"] = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

// 文件上传前校验
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  let types = ["image/jpeg", "image/jpg", "image/png"];
  const isImage = types.includes(rawFile.type);
  const size = rawFile.size / 1024 / 1024;
  if (!isImage) {
    message("请上传jpeg、jpg、png类型的图片", {
      type: "error",
    });
    return false;
  } else if (size > props.sizeMax) {
    message(`请上传小于${props.sizeMax}M的图片`, {
      type: "error",
    });
    return false;
  }
  return true;
};
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
}
</style>
