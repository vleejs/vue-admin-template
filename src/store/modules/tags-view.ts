import { ref } from 'vue'
import { defineStore } from 'pinia'
import { type RouteLocationNormalized } from 'vue-router' // 标准化的路由地址
export type ITagView = Partial<RouteLocationNormalized>

export const useTagsViewStore = defineStore('tags-view', () => {
  const visitedViews = ref<ITagView[]>([]) // tags-view 组件展示的 tag
  const addVisitedView = (view: ITagView) => {
    // 点击相同的一个路由不往数组中push
    const isNotPush = visitedViews.value.some((v, index) => {
      if (v.path === view.path) {
        // todo
        return true
      }
    })
    if (isNotPush) return
    visitedViews.value.push(Object.assign({}, view))
  }
  return { visitedViews, addVisitedView }
})
