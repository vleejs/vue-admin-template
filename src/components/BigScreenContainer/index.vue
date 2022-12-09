<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from 'vue'
import { useDebounceFn } from '@vueuse/core'
export interface Props {
  width?: number
  height?: number
}

export interface IStyle {
  width: string
  height: string
  transform: string
  transformOrigin: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 1920,
  height: 1080
})

const domStyle = reactive({
  width: `${props.width}px`,
  height: `${props.height}px`,
  transform: 'scale(1) translateX(-50%)',
  transformOrigin: '0 0'
})

const scaleGetter = () => {
  const baseWidth = document.documentElement.clientWidth
  const baseHeight = document.documentElement.clientHeight
  const x = baseWidth / props.width
  const y = baseHeight / props.height
  const ret = x < y ? x : y
  return ret
}

const scaleSetter = () => {
  const baseWidth = document.documentElement.clientWidth
  // set domStyle
  domStyle.transform = `scale(${scaleGetter()}) translateX(-50%)`
  domStyle.width = `${baseWidth / scaleGetter()}px`
}

const debouncedFn = useDebounceFn(() => {
  scaleSetter()
}, 200)

const eventHandler = () => {
  // 防抖
  window.addEventListener('resize', debouncedFn)
}
const removeEventHandler = () => {
  window.removeEventListener('resize', debouncedFn)
}
onMounted(() => {
  scaleSetter()
  eventHandler()
})
onUnmounted(() => {
  removeEventHandler()
})
</script>

<template>
  <div class="big-screen-container" :style="domStyle">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.big-screen-container {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  transition: 0.3s;
}
</style>
