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
  expire: "1737623414",
  policy:
    "eyJleHBpcmF0aW9uIjoiMjAyNS0wMS0yM1QwOToxMDoxNC41MjlaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF1dfQ==",
  signature: "XD4kL7VFXFXtjJ4rrEU09CvosFk=",
  accessid: "LTAI5tMhbSq1LhCFF752ncvi",
  host: "http://webskys.oss-cn-beijing.aliyuncs.com",
  callback:
    "eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vd3d3LnN5a2hlcm8uY29tL2FsaXl1bi9vc3MvY2FsbGJhY2siLCJjYWxsYmFja0JvZHkiOiJmaWxlbmFtZT0ke29iamVjdH0mc2l6ZT0ke3NpemV9Jm1pbWVUeXBlPSR7bWltZVR5cGV9JmhlaWdodD0ke2ltYWdlSW5mby5oZWlnaHR9JndpZHRoPSR7aW1hZ2VJbmZvLndpZHRofSIsImNhbGxiYWNrQm9keVR5cGUiOiJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQifQ==",
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
  border: 1px dashed var(--el-border-color);
}
</style>
