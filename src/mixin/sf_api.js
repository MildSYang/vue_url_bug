import g from '@/libs/sf_global'
import e from '@/libs/sf_event'
import state from '@/libs/sf_state'
import common from '@/libs/sf_common'
export default {
  data () {
    return {
    }
  },
  methods: {
    getUrl (url) {
      return process.env.VUE_APP_IP + url + '.html'
    },
    /**
         * 设置frame显示，
         * @param name
         * @param index
         * @param eventLoadName 所有的frame
         */
    setFrameGroupIndex ({ name, index }) {
      this.api.setFrameGroupIndex({
        name: name,
        index: index
      })
    },
    /**
         * 打开frameGroup
         * @param options
         * @param cb
         */
    openFrameGroup (options, cb) {
      g.set(options.name, options.frames)
      this.api.openFrameGroup(options, (ret) => {
        // TODO 次数回调有延迟
        this.onShow()
        if (cb) cb(ret)
      })
    },
    /**
         * 打开win
         * @param name
         * @param options
         */
    openWin (options) {
      let _options = {
        url: this.getUrl(options.name)
      }
      Object.assign(_options, options)
      console.log(`打开win：${options.name}  ${JSON.stringify(_options)}`)
      this.api.openWin(_options)
    },
    /**
         * 打开frame
         * @param name
         * @param options
         */
    openFrame (options = {}) {
      let _name = options.name
      if (!_name) {
        _name = common.getName().slice(0, -'/win'.length) + '/frm'
      }
      let _options = {
        name: _name,
        url: this.getUrl(_name),
        rect: {
          x: 0,
          y: document.getElementById('l_header').offsetHeight,
          w: 'auto',
          h: document.getElementById('l_body').offsetHeight
        }
      }
      Object.assign(_options, options)
      console.log(`打开frm：${_name}  ${JSON.stringify(_options)}`)
      this.api.openFrame(_options)
    },
    runWatchStore () {
      if (this.watchStore) {
        let store = this.watchStore()
        for (let i in store) {
          if (store.hasOwnProperty(i)) {
            state.get(i, store[ i ])
          }
        }
      }
    }
  },
  mounted () {
    if (this.onShow) {
      e.listen('viewappear', () => {
        //
        this.onShow()
      })
    }
  },
  created () {
    this.runWatchStore()
  }
}
