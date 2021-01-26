<template>
  <div id="app">
    <!-- 路由坑 -->
    <router-view></router-view>
    <!-- 放主要tarbar组件 -->
  <main-tab-bar />  
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import "../src/assets/css/base.css";
</style>
