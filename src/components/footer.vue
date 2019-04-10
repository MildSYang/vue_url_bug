<template>
    <div id="l_footer" flex class="cu-bar cu-tabbar-height tabbar bg-footer"
         :style="{ paddingBottom: api.safeArea.bottom + 'px' }">
        <div class="action" :class="{ 'bg-footer-active': index === 0 }" v-tap="{ methods : tap, index: 0 }">
            <div class='icon-homefill'></div>
            推荐
        </div>
        <div class="action" :class="{ 'bg-footer-active': index === 1 }" v-tap="{ methods : tap, index: 1 }">
            <div class='icon-similar'></div>
            资讯
        </div>
        <div class="action" :class="{ 'bg-footer-active': index === 'add' }" v-tap="{ methods : tap, index: 'add' }">
            <div class='icon-add'></div>
        </div>
        <div class="action" :class="{ 'bg-footer-active': index === 2 }" v-tap="{ methods : tap, index: 2 }">
            <div class='icon-cart'></div>
            助手{{ number }}
        </div>
        <div class="action" :class="{ 'bg-footer-active': index === 3 }" v-tap="{ methods : tap, index: 3 }">
            <div class='icon-cart'></div>
            电商
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        a: 0,
        index: 0
      }
    },
    props: [
      'title',
      'left',
      'right',
      'number',
    ],
    methods: {
      tap(params) {
        this.index = params.index
        this.$emit('tap', params.index)
      },
    },
    mounted() {
    }
  }
</script>
<style>
</style>
