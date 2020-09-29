<template>
  <div class="slider-wrapper">
    <me-loading v-if="!sliders.length"></me-loading>
    <me-slider
      :data="sliders"
      :direction="direction"
      :loop="loop"
      :interval="interval"
      v-else
    >
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" alt="" class="slider-img">
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
import meSlider from 'base/slider/index.vue'
import { swiperOptions } from './config.js'
import { getHomeSlider } from '../../api/home.js'
import MeLoading from 'base/loading/index.vue'

export default {
  components: {
    meSlider,MeLoading
  },
  data() {
    return {
      direction: swiperOptions.direction,
      loop: swiperOptions.loop,
      interval: swiperOptions.interval,
      sliders: []
      // sliders: [
      //   {
      //     'linkUrl': 'https://www.imooc.com',
      //     'picUrl': require('../../assets/img/1.jpg')
      //   },
      //   {
      //     'linkUrl': 'https://www.imooc.com',
      //     'picUrl': require('../../assets/img/2.jpg')
      //   },
      //   {
      //     'linkUrl': 'https://www.imooc.com',
      //     'picUrl': require('../../assets/img/3.jpg')
      //   },
      //   {
      //     'linkUrl': 'https://www.imooc.com',
      //     'picUrl': require('../../assets/img/4.jpg')
      //   },
      //   {
      //     'linkUrl': 'https://www.imooc.com',
      //     'picUrl': require('../../assets/img/5.jpg')
      //   }
      // ]
    }
  },
  created() {
    this.getSliders();
  },
  methods: {
    // API
    update() {
      return this.getSliders();
    },
    getSliders() {
      return getHomeSlider().then(data => {
        this.sliders = data;
      })
    }
  }
}
</script>

<style lang="scss" scope>
// @import '~assets/scss/mixins';
.slider-wrapper {
  height: 183px;
}
.slider-link {
  display: block;
}
.slider-link,.slider-img {
  width: 100%;
  height: 100%;
}
</style>