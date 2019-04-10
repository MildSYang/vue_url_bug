<template>
    <sf-container>
        <img src="@/assets/logo.png" alt="">
        <div class="bg"></div>
        <button @click="addNumber">点击1312312</button>
        <div class="text-center">{{ myNum }}</div>
    </sf-container>
</template>

<script>
import sfContainer from '@/components/container'
import sfApi from '@/mixin/sf_api'
import state from '@/libs/sf_state'

export default {
  components: {
    sfContainer
  },
  data () {
    return {
      myNum: 0
    }
  },
  mixins: [sfApi],
  methods: {
    watchStore () {
      return {
        'default/number': (val) => {
          this.myNum = val
        }
      }
    },
    addNumber () {
      this.myNum++
      state.set('default/number', this.myNum)
    },
    onShow () {
      this.runWatchStore()
    }
  },
  mounted () {
    this.api.setRefreshHeaderInfo({
      bgColor: '#fff'
    }, () => {
      this.api.refreshHeaderLoadDone()
    })
  }
}
</script>

<style lang="scss">
  .bg {
    width: 50vw;
    height: 50vw;
    background-image: url(~@/assets/logo.png);
  }
</style>
<style lang="scss" scoped>
</style>
