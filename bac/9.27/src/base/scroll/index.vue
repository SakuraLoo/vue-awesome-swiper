<template>
    <swiper class="swiper" :options="swiperOption">
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
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true,
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          },
          mousewheel: true
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
</style>