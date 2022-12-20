<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = zhCn // ep 设置为中文
</script>

<template>
  <ElConfigProvider :locale="locale">
    <router-view />
  </ElConfigProvider>
</template>
