import g from '@/libs/sf_global'
import e from '@/libs/sf_event'

let fn = {
    get(name, cb, isListen = true) {
      if (cb) {
        if (isListen) {
          e.listen(name, cb)
        }
        cb(g.get(name))
      } else {
        return g.get(name)
      }
    },
    set (name, val = null, isSend = true) {
        g.set(name, val)
        if (isSend) {
            e.send(name, val)
        }
    },
}

export default fn
