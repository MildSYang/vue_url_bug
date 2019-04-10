<template>
    <sf-container>
        <sf-header></sf-header>
        <sf-body></sf-body>
        <sf-footer></sf-footer>
    </sf-container>
</template>
<script>
    import sfContainer from '@/components/container'
    import sfHeader from '@/components/header'
    import sfBody from '@/components/body'
    import sfFooter from '@/components/emptyFooter'
    import sfApi from '@/mixin/sf_api'
    export default {
        data() {
            return {
            }
        },
        mixins: [ sfApi ],
        components: {
            sfContainer,
            sfHeader,
            sfBody,
            sfFooter
        },
        methods: {
            onShow () {
            }
        },
        mounted() {
            this.openFrame()
        }
    }
</script>
<style lang="scss">
    @import "~@/assets/colorUi/app.scss";
    @import "~@/assets/css/config.scss";
</style>
<style lang="scss" scoped>
</style>
