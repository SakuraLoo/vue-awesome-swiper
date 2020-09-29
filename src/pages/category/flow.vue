<template>
  <!--  <div class="category">-->
  <!--    <header class="g-header-container">-->
  <!--      <category-header/>-->
  <!--    </header>-->
  <div class="category">
    <div class="sidebar">
      <category-tab @switch-tab="getCurrentId"/>
    </div>
    <div class="main">
      <category-content :curId="curId"/>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
  import CategoryHeader from './header';
  import CategoryTab from './tab';
  import CategoryContent from './content';

  export default {
    name: 'flow',
    components: {
      CategoryHeader,
      CategoryTab,
      CategoryContent
    },
    data() {
      return {
        curId: ''
      };
    },
    methods: {
      getCurrentId(id) {
        this.curId = id;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .category {
    display: flex;
    overflow:hidden;
    width:100%;
    height:100%;
    background-color: $bgc-theme;
  }
  .g-content-container {
    display: flex;
    padding: 50px 0 0 0 ;
  }
  .sidebar {
    width: 80px;
    height: 100%;
  }
  .main {
    flex: 1;
    height: 100%;
  }
</style>
