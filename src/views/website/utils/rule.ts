import type { FormRules } from "element-plus";
import { reactive } from "vue";

/** 自定义表单规则校验 */
export const formRules = reactive(<FormRules>{
  name: [{ required: true, message: "请输入", trigger: "blur" }],
  type: [{ required: true, message: "请选择", trigger: "change" }],
  desc: [{ required: true, message: "请输入", trigger: "blur" }],
});
