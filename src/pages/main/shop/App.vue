<template>
    <sf-container class="container">
        <button @click="addNumber">点击222222</button>
        <div class="text-center" v-for="item in 100" :key="item">{{ myNum }}</div>
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
    data() {
      return {
        myNum: 0
      }
    },
    mixins: [sfApi],
    methods: {
      watchStore() {
        return {
          'default/number': (val) => {
            this.myNum = val
          }
        }
      },
      addNumber() {
        this.myNum++
        state.set('default/number', this.myNum)
      },
      onShow() {
        this.runWatchStore()
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
    @import "~@/assets/colorUi/app.scss";
    @import "~@/assets/css/config.scss";
</style>
<style lang="scss" scoped>
</style>
