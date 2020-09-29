<template>
  <mine-navbar class="header" title="titletitletitletitletitletitletitletitletitle">
    <i class="iconfont icon-saoyisao" slot="left"></i>
    <div slot="center">搜索框</div>
    <i class="iconfont icon-xiaoxi" slot="right"></i>
  </mine-navbar> 
</template>

<script>
import mineNavbar from 'base/navbar/index.vue'

export default {
  components: {
    mineNavbar
  }
}
</script>

<style lang="scss" scope>
@import '~assets/scss/mixins';
.header {
  &.mine-navbar {
    // background-color: $header-bgc-translucent;
    background-color: #0000;
  }

  .iconfont {
    color: $icon-color-default;
    font-size: $icon-font-size;
  }
}
</style>