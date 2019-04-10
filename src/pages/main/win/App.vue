<template>
    <sf-container>
        <sf-header></sf-header>
        <sf-body></sf-body>
        <sf-footer :frmName="framesName" :number="number" @tap="changeIndex" ref="footer"></sf-footer>
    </sf-container>
</template>
<script>
import sfContainer from '@/components/container'
import sfFooter from '@/components/footer'
import sfHeader from '@/components/header'
import sfBody from '@/components/body'
import sfApi from '@/mixin/sf_api'
import state from '@/libs/sf_state'
import initPush from '@/libs/push'
import lang from 'lodash/lang'

import ajax from '@/api/index'

export default {
  mixins: [sfApi],
  components: {
    sfContainer,
    sfFooter,
    sfHeader,
    sfBody
  },
  data () {
    return {
      index: 0,
      framesName: 'index/footer_tab',
      frames: [
        {
          name: 'main/recommend',
          url: this.getUrl('main/recommend')
        },
        {
          name: 'main/info',
          url: this.getUrl('main/info')
        },
        {
          name: 'main/helper',
          url: this.getUrl('main/helper')
        },
        {
          name: 'main/shop',
          url: this.getUrl('main/shop')
        }
      ],
      number: 0
    }
  },
  watch: {

  },
  methods: {
    changeIndex (val) {
      this.index = val
      if (lang.isNumber(val)) {
        this.setFrameGroupIndex({
          name: 'index/footer_tab',
          index: val
        })
      }
    },
    watchStore () {
      return {
        'default/number': (val) => {
          this.number = val
        }
      }
    },
    onShow () {
      console.log('win')
      this.runWatchStore()
    }
  },
  mounted () {
    ajax.getNumber().then(res => {
      this.number = res
      state.set('default/number', res)
    })

    initPush(this)
    this.openFrameGroup(
      {
        name: this.framesName,
        scrollEnabled: true,
        overScrollMode: 'always',
        bounces: true,
        useWKWebView: true,
        rect: {
          x: 0,
          y: document.getElementById('l_header').offsetHeight,
          w: 'auto',
          h: document.getElementById('l_body').offsetHeight
        },
        index: 0,
        preload: 0,
        frames: this.frames
      }, (ret) => {
        console.log(JSON.stringify(ret))
        // if (this.$refs.footer.index !== ret.index) {
        //   this.$refs.footer.index = ret.index
        // }
      }
    )
  }
}
</script>

<style lang="scss">
    #body {
      height: 0;
    }
</style>
