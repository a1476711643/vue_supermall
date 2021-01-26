<template>
  <div>
    <div id="tab-bar">
        <slot></slot>   
        <!-- //通过插槽，让人自己插入内容。。。 -->
    </div>
  </div>
</template>

<script>

export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  /* 让tabbar 到下面去 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>