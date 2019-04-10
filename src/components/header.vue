<template>
    <div id="l_header" flex class="cu-bar bg-header" :style="{ paddingTop: api.safeArea.top + 'px' }">
        <div class='action'>
            <slot name="left">
                <span :class="left ? left : 'icon-back'"></span>
            </slot>
        </div>
        <div class='content text-bold' :style="{ paddingTop: api.safeArea.top + 'px' }">
            <slot name="title">{{ title }}</slot>
        </div>
        <div class='action' v-tap="{ methods: openMessage }">
            <slot name="right">
                <span :class="right ? right : 'icon-my'"></span>
            </slot>
        </div>
    </div>
</template>

<script>
    import sfApi from '@/mixin/sf_api'

    export default {
        data() {
            return {}
        },
        mixins: [ sfApi ],
        props: [
            'title',
            'left',
            'right'
        ],
        methods: {
            openMessage() {
                this.openWin({name: 'message/win'})
            }
        }
    }
</script>
