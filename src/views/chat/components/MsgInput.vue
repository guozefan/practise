<script setup lang="ts">
import { reactive } from "vue";
defineOptions({
  name: "MsgInput",
});

defineProps({
  isFrist: {
    type: Boolean,
    default: false,
  },
});

const form = reactive({
  msg: "",
});
</script>

<template>
  <div class="msg-container">
    <el-input
      v-model="form.msg"
      style="width: 100%"
      type="textarea"
      placeholder="给DeepSeek 发送消息"
      :autosize="{ minRows: 2, maxRows: 8 }"
    />
    <div class="actions">
      <div class="lf">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="调用新模型 DeepSeek-R1，解决推理问题"
          placement="left-start"
        >
          <el-button round>
            <div
              class="ds-icon"
              style="
                font-size: 19px;
                width: 19px;
                height: 19px;
                color: rgb(76, 76, 76);
                margin-right: 10px;
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.656 17.344c-1.016-1.015-1.15-2.75-.313-4.925.325-.825.73-1.617 1.205-2.365L3.582 10l-.033-.054c-.5-.799-.91-1.596-1.206-2.365-.836-2.175-.703-3.91.313-4.926.56-.56 1.364-.86 2.335-.86 1.425 0 3.168.636 4.957 1.756l.053.034.053-.034c1.79-1.12 3.532-1.757 4.957-1.757.972 0 1.776.3 2.335.86 1.014 1.015 1.148 2.752.312 4.926a13.892 13.892 0 0 1-1.206 2.365l-.034.054.034.053c.5.8.91 1.596 1.205 2.365.837 2.175.704 3.911-.311 4.926-.56.56-1.364.861-2.335.861-1.425 0-3.168-.637-4.957-1.757L10 16.415l-.053.033c-1.79 1.12-3.532 1.757-4.957 1.757-.972 0-1.776-.3-2.335-.86zm13.631-4.399c-.187-.488-.429-.988-.71-1.492l-.075-.132-.092.12a22.075 22.075 0 0 1-3.968 3.968l-.12.093.132.074c1.308.734 2.559 1.162 3.556 1.162.563 0 1.006-.138 1.298-.43.3-.3.436-.774.428-1.346-.008-.575-.159-1.264-.449-2.017zm-6.345 1.65l.058.042.058-.042a19.881 19.881 0 0 0 4.551-4.537l.043-.058-.043-.058a20.123 20.123 0 0 0-2.093-2.458 19.732 19.732 0 0 0-2.458-2.08L10 5.364l-.058.042A19.883 19.883 0 0 0 5.39 9.942L5.348 10l.042.059c.631.874 1.332 1.695 2.094 2.457a19.74 19.74 0 0 0 2.458 2.08zm6.366-10.902c-.293-.293-.736-.431-1.298-.431-.998 0-2.248.429-3.556 1.163l-.132.074.12.092a21.938 21.938 0 0 1 3.968 3.968l.092.12.074-.132c.282-.504.524-1.004.711-1.492.29-.753.442-1.442.45-2.017.007-.572-.129-1.045-.429-1.345zM3.712 7.055c.202.514.44 1.013.712 1.493l.074.13.092-.119a21.94 21.94 0 0 1 3.968-3.968l.12-.092-.132-.074C7.238 3.69 5.987 3.262 4.99 3.262c-.563 0-1.006.138-1.298.43-.3.301-.436.774-.428 1.346.007.575.159 1.264.448 2.017zm0 5.89c-.29.753-.44 1.442-.448 2.017-.008.572.127 1.045.428 1.345.293.293.736.431 1.298.431.997 0 2.247-.428 3.556-1.162l.131-.074-.12-.093a21.94 21.94 0 0 1-3.967-3.968l-.093-.12-.074.132a11.712 11.712 0 0 0-.71 1.492z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width=".1"
                ></path>
                <path
                  d="M10.706 11.704A1.843 1.843 0 0 1 8.155 10a1.845 1.845 0 1 1 2.551 1.704z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width=".2"
                ></path>
              </svg>
            </div>
            深度思考（R1）</el-button
          >
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="按需搜索网页"
          placement="right-start"
        >
          <el-button round>
            <div
              class="ds-icon"
              style="
                font-size: 17px;
                width: 17px;
                height: 17px;
                color: rgb(76, 76, 76);
                margin-right: 10px;
              "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  stroke="currentColor"
                  stroke-width="1.8"
                ></circle>
                <path
                  d="M10 1c1.657 0 3 4.03 3 9s-1.343 9-3 9M10 19c-1.657 0-3-4.03-3-9s1.343-9 3-9M1 10h18"
                  stroke="currentColor"
                  stroke-width="1.8"
                ></path>
              </svg>
            </div>
            联网搜索</el-button
          >
        </el-tooltip>
      </div>
      <div class="rf">
        <el-button color="#b00ac8ed" circle v-if="form.msg">
          <div
            class="ds-icon"
            style="font-size: 16px; width: 16px; height: 16px"
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 16c-.595 0-1.077-.462-1.077-1.032V1.032C5.923.462 6.405 0 7 0s1.077.462 1.077 1.032v13.936C8.077 15.538 7.595 16 7 16z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M.315 7.44a1.002 1.002 0 0 1 0-1.46L6.238.302a1.11 1.11 0 0 1 1.523 0c.421.403.421 1.057 0 1.46L1.838 7.44a1.11 1.11 0 0 1-1.523 0z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.685 7.44a1.11 1.11 0 0 1-1.523 0L6.238 1.762a1.002 1.002 0 0 1 0-1.46 1.11 1.11 0 0 1 1.523 0l5.924 5.678c.42.403.42 1.056 0 1.46z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </el-button>
        <el-tooltip
          v-else
          class="box-item"
          effect="dark"
          content="请输入你的问题"
          placement="top"
        >
          <el-button circle :disabled="true" bg type="info">
            <div
              class="ds-icon"
              style="font-size: 16px; width: 16px; height: 16px"
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 16c-.595 0-1.077-.462-1.077-1.032V1.032C5.923.462 6.405 0 7 0s1.077.462 1.077 1.032v13.936C8.077 15.538 7.595 16 7 16z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M.315 7.44a1.002 1.002 0 0 1 0-1.46L6.238.302a1.11 1.11 0 0 1 1.523 0c.421.403.421 1.057 0 1.46L1.838 7.44a1.11 1.11 0 0 1-1.523 0z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.685 7.44a1.11 1.11 0 0 1-1.523 0L6.238 1.762a1.002 1.002 0 0 1 0-1.46 1.11 1.11 0 0 1 1.523 0l5.924 5.678c.42.403.42 1.056 0 1.46z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </el-button>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.msg-container {
  background-color: rgb(243, 244, 246);
  box-shadow: 0px 0px 0.5px #dce0e9;
  border-radius: 0.24rem;
  padding: 0.2rem 0.2rem;
  width: 8rem;

  :deep(.el-textarea) {
    vertical-align: top;
  }

  :deep(.el-textarea__inner) {
    box-shadow: none;
    background: none;
    resize: none;
    font-size: 0.16rem;
    &::placeholder {
      font-size: 0.18rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .el-button {
      float: left;
    }
  }
}
</style>
