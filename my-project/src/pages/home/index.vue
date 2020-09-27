<template>
  <div class="home">
    <header class="g-header-container">
      <home-header/>
    </header>
    <me-scroll :data="recommends"
      pullDown
    >
      <home-slider/>
      <home-nav/>
      <home-recommend @loaded="getRecommends"/>
    </me-scroll>
    <header class="g-backtop-container"></header>
    <router-view></router-view>
  </div>
</template>

<script>
import homeHeader from './header'
import homeSlider from './slider'
import homeNav from './nav'
import homeRecommend from './recommend'
import jsonp from '../../assets/js/jsonp.js'
import MeScroll from '../../base/scroll'

export default {
  components: {
    homeHeader,homeSlider,MeScroll,homeNav,homeRecommend
  },
  data() {
    return {
      recommends: []
    }
  },
  methods: {
    updateScroll() {

    },
    getRecommends(recommends) {
      this.recommends = recommends;
    }
  }
}
</script>

<style lang="scss" scope>
@import '~assets/scss/mixins';
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
}
</style>