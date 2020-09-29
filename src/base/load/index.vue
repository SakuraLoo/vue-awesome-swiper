<template>
  <div class="loading"  :class="{'loading-inline': inline}">
    <span class="loading-indicator" v-if="indicator==='on'">
      <slot><img src="./loading.gif" alt="loading"></slot>
    </span>
    <span class="loading-text" v-if="loadingText">{{loadingText}}</span>
  </div>
</template>

<script>
  export default {
    name: 'index',
    props: {
      indicator: {
        type: String,
        default: 'on',
        validator(value) {
          return ['on', 'off'].indexOf(value) > -1;
        }
      },
      text: {
        type: String,
        defalt: '正在加载中...'
      },
      inline: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        loadingText: this.text
      };
    },
    watch: {
      text(a) {
        this.loadingText = a;
      }
    },
    methods: {
      setText(a) {
        this.loadingText = a;
      }
    }
  };
</script>

<style lang="scss" scoped>
  /*@import "~assert/scss/mixins";*/
  /*.loading {*/
  /*  */
  /*}*/
</style>
