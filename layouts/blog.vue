<template>
  <div id="appIndex">
    <div class="content-wrap">
      <mHeader />
      <nuxt class="content-view" />
      <mFooter />
    </div>
  </div>
</template>
<script>
import mHeader from '~/components/Header.vue'
import mFooter from '~/components/Footer.vue'

export default {
  head: {
    titleTemplate: '%s - 记录成长,分享过程',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  components: {
    mHeader,
    mFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
<style lang="stylus">
#appIndex
  width 100%
  min-height 100%
  min-width 320px
  display flex
  flex-direction: row
  position absolute
  ::selection{background:#262a30;color:#FFF;}
  ::-moz-selection{background:#262a30;color:#FFF;}
.content-wrap
  width 100%
  display flex
  flex-direction column
  justify-content flex-start
  align-items center

.content-view
  width 1000px
  padding 0 10px
  margin 0 auto
  min-height calc(100% - 90px - 120px)
</style>
