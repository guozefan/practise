<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { formRules } from "../utils/rule";
import { FormProps } from "../utils/types";
import ImgUploadOss from "@/components/ImgUpload/upload-oss.vue";
import { addWebSiteInfo, editWebSiteInfo } from "@/api/webSite";
import { Message } from "@/utils/message";

const emit = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    id: "",
    title: "",
    type: "",
    url: "",
    desc: "",
    logo: "",
  }),
  modelValue: false,
  type_dict: () => [],
  getList: () => () => {},
});

const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

watchEffect(() => {
  newFormInline.value = props.formInline;
});

function handleClose() {
  emit("update:modelValue", false);
  ruleFormRef.value.resetFields();
}

// 提交信息
function handleSubmit() {
  ruleFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      console.log("submit!");
      const { code, message } = props.formInline.id
        ? await editWebSiteInfo(newFormInline.value)
        : await addWebSiteInfo(newFormInline.value);
      if (code === 200) {
        handleClose();
        Message(message, {
          type: "success",
        });
        props.getList();
      } else {
        Message(message, {
          type: "error",
        });
      }
    } else {
      console.log("error submit!");
      return false;
    }
  });
}
</script>

<template>
  <el-drawer
    v-model="modelValue"
    :title="newFormInline.id ? '编辑网站' : '新增网站'"
    :before-close="handleClose"
  >
    <el-form
      ref="ruleFormRef"
      :model="newFormInline"
      :rules="formRules"
      label-width="100px"
    >
      <el-form-item label="网站标题：" prop="title">
        <el-input
          v-model="newFormInline.title"
          maxlength="16"
          show-word-limit
        />
      </el-form-item>
      <el-form-item label="网站类型：" prop="type">
        <el-select
          v-model="newFormInline.type"
          filterable
          allow-create
          default-first-option
          placeholder="请选择类型"
        >
          <el-option
            v-for="item in type_dict"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="网站链接：" prop="url">
        <el-input v-model="newFormInline.url" show-word-limit />
      </el-form-item>
      <el-form-item label="网站描述：" prop="desc">
        <el-input
          v-model="newFormInline.desc"
          type="textarea"
          :rows="4"
          maxlength="60"
          show-word-limit
        />
      </el-form-item>
      <el-form-item label="网站图片：" prop="logo">
        <ImgUploadOss v-model="newFormInline.logo" />
      </el-form-item>
      <el-form-item label="" class="btn-flex">
        <el-button @click="handleClose" style="margin-right: 20px"
          >取消</el-button
        >
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>
<style lang="scss">
.el-drawer__title {
  font-size: 0.32rem;
  color: var(--text-color);
}
.btn-flex {
  margin-top: 50px;
}
</style>
