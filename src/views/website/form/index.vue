<script setup lang="ts">
import ReCol from '@/components/ReCol'
import { onMounted, ref, watchEffect } from 'vue'
import { formRules } from '../utils/rule'
import { FormProps } from '../utils/types'
import ImgUploadOss from '@/components/ImgUpload/upload-oss.vue'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    name: '',
    type: '',
    desc: '',
    logo: ''
  }),
  modelValue: false
})

const ruleFormRef = ref()
const newFormInline = ref(props.formInline)

const options = [
  {
    value: 'HTML',
    label: 'HTML'
  },
  {
    value: 'CSS',
    label: 'CSS'
  },
  {
    value: 'JavaScript',
    label: 'JavaScript'
  }
]

function handleClose() {
  emit('update:modelValue', false)
}

// 提交信息
function handleSubmit() {
  ruleFormRef.value.validate((valid: boolean) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <el-drawer v-model="modelValue" title="新增网站" :before-close="handleClose">
    <el-form ref="ruleFormRef" :model="newFormInline" :rules="formRules" label-width="100px">
      <el-form-item label="网站标题：" prop="name">
        <el-input v-model="newFormInline.name" />
      </el-form-item>
      <el-form-item label="网站类型：" prop="type">
        <el-select v-model="newFormInline.type" filterable allow-create default-first-option placeholder="请选择类型">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="网站描述：" prop="desc">
        <el-input v-model="newFormInline.desc" type="textarea" :rows="4" maxlength="60" show-word-limit />
      </el-form-item>
      <el-form-item label="网站图片：" prop="logo">
        <ImgUploadOss v-model="newFormInline.logo" />
      </el-form-item>
      <el-form-item label="" class="btn-flex">
        <el-button @click="handleClose" style="margin-right: 20px">取消</el-button>
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
