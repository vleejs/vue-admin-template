<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
const scrollTo = (toLeftOrToRight: 'left' | 'right') => {}
</script>
<template>
  <div class="scroll-container">
    <el-icon class="arrow left" @click="scrollTo('left')">
      <ArrowLeft />
    </el-icon>
    <el-icon class="arrow right" @click="scrollTo('right')">
      <ArrowRight />
    </el-icon>
  </div>
</template>
