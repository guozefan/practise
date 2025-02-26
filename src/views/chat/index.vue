<script setup lang="ts">
import MsgInput from "./components/MsgInput.vue";
defineOptions({
  name: "chat-ai",
});
</script>

<template>
  <div class="chat-ai">
    <MsgInput> </MsgInput>
  </div>
</template>

<style lang="scss" scoped>
.chat-ai {
  height: calc(100vh - var(--header-height) * 2);
  position: relative;
}
</style>
