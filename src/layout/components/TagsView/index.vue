<script setup lang="ts">
import ScrollPane from './ScrollPane.vue'
</script>
<template>
  <div class="tags-view-container">
    <ScrollPane class="tags-view-pane">
      <!-- <router-link :to="{ path: to.path,query:to.query }"></router-link> -->
    </ScrollPane>
  </div>
</template>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 3px 0 #00000010, 0 0 3px 0 #00000010;
}
</style>
