<template>
    <swiper class="swiper" :options="swiperOption" ref='swiper'>
      <div class="mine-scroll-pull-down" v-if="pullDown">
        <me-loading :text="pullDownText" inline ref="pullDownLoading" />
      </div>
      <swiper-slide>
        <slot></slot>
      </swiper-slide>
      <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
import MeLoading from '../../base/loading'
import {
  PULL_DOWN_HEIGHT,PULL_DOWN_TEXT_INIT,PULL_DOWN_TEXT_START,PULL_DOWN_TEXT_ING,PULL_DOWN_TEXT_END
} from './config.js'

export default {
  components: {
    MeLoading
  },
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    },
    data: {
      type: [Array, Object]
    },
    pullDown: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        setWrapperSize: true,
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        },
        mousewheel: true
      },
      on: {
        sliderMove: this.scroll
      },
      pullDownText: PULL_DOWN_TEXT_ING
    }
  },
  watch: {
    data() {
      this.update();
    }
  },
  methods: {
    update() {
      this.$refs.swiper && this.$refs.swiper.swiper.update();
    },

    scroll() {
      const swiper = this.$refs.swiper.swiper;
      if(swiper.translate > 0) {
        if(!this.pullDown) {
          return;
        }
        if(swiper.translate > PULL_DOWN_HEIGHT) {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
        } else {
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
        }
      }
    }
  }
}
</script>

<style lang="scss" scope>
// @import '~assets/scss/mixins';
.swiper {
  height: 100%;
  .swiper-slide {
    height: auto;
  }
}
.mine-loading-indicator img {
  width: 50px;
}
.mine-scroll-pull-down {
  position: absolute;
  left: 0;
  bottom: 100%;
  width: 100%;
  height: 80px;

}
</style>