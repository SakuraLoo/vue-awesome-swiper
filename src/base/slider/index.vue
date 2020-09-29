<template>
  <swiper class="swiper" :options="swiperOption" :key="keyId">
    <slot></slot>
    <div class="swiper-pagination" id="pagination" slot="pagination"></div>
    <!-- v-if="pagination"  -->
    <div class="swiper-button-prev swiper-button-white" slot="button-prev" @click="prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next" @click="next"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return [
          'horizontal',
          'vertical'
        ].indexOf(value) > -1; //>-1是指找的是这两个的其中之一
      }
    },
    interval: {
      type: Number,
      default: 3000,
      validator(value) {
        return value >= 0;
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      keyId: Math.random()
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    prev() {
      this.$el.swiper.slidePrev();
    },
    next() {
      this.$el.swiper.slideNext();
    },
    init() {
      this.swiperOption = {
        spaceBetween: 30,
        centeredSlides: true,
        loop: this.data.length <= 1 ? false : this.loop,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        }
      }
    }
  },
  watch: {
    data(newData) {
      if(newData.length === 0) {
        return;
      }
      this.swiperOption.loop = newData.length === 1 ?false : this.loop;
      this.keyId = Math.random();
    }
  },
  created() {
    this.init();
  }
}
</script>

<style lang="scss" scope>
// @import '~assets/scss/mixins';
.slider-wrapper {
  height: 183px;
}
 * { touch-action: pan-y; } // 防止点击过快报错
</style>