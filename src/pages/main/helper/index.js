import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import 'flex.css';
import initActiveApi from '@/libs/init_active_api_fn'
import vueTap from 'v-tap'
Vue.use(vueTap)



window.apiready = function () {
    Vue.prototype.api = initActiveApi()

    new Vue({
        render: h => h(App)
    }).$mount('#app')
}

if (process.env.NODE_ENV !== 'production') {
    setTimeout(() => {
        if (!Vue.prototype.api) {
            window.apiready()
        }
    }, 500)
}
