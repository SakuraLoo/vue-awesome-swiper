<template>
    <swiper :options="swiperOption">
      <swiper-slide>
        <slot></slot>
      </swiper-slide>
      <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>

export default {
  props: {
    scrollbar: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidersPerView: 'auto', // 一次看到几张照片
        freeMode: true, // 距离随便滚
        setWrapperSize: true, // 自动计算 swiper-wrapper的高度
        scrollbar: {
          el: this.scrollbar ? '.swiper-scrollbar' : null,
          hide: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scope>
// @import '~assets/scss/mixins';
</style>