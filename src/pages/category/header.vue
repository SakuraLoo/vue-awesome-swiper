<template>
  <me-navbar class="header">
    <router-link slot="center" to="/search">
      <me-search-box
        placeholder="查找好货"
        @query="getQuery"
      />
    </router-link>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>
<script>
  import MeNavbar from 'base/navbar';
  import MeSearchBox from 'base/search-box';
  export default {
    name: 'CategoryHeader',
    components: {
      MeNavbar,
      MeSearchBox
    },
    methods: {
      // API
      getQuery(query) {
        console.log(query);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .header {
    &.mine-navbar {
      background-color: $header-bgc-translucent;
    }

    .iconfont {
      color: $icon-color-default;
      font-size: $icon-font-size;
    }
  }
</style>
