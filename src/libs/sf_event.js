import common from '@/libs/sf_common'
export default {
    /**
     * 发送事件
     * @param name
     * @param option
     */
    send(name, option) {
        console.log(`页面：${common.getName()} 发送事件：${name} 值：${option}`)
        window.api.sendEvent({
            name: name,
            extra: JSON.stringify({
                name: name,
                form: common.getName(),
                data: option
            }),
        })
    },
    /**
     * 监听事件
     * @param name
     * @param callback
     */
    listen(name, callback) {
        window.api.addEventListener({
            name: name,
        }, (ret, err) => {
            if (ret.value) {
                // 自己页面发送给自己页面的事件不监听
                if (ret.value.form === common.getName() && name === ret.value.name) {
                    console.log(`页面：${common.getName()} “禁止“监听事件：${name} 相同窗口发送相同事件`)
                    return
                }
                console.log(`页面：${common.getName()} 监听到事件：${name}`)
                callback(ret.value.data, err)
            } else {
                console.log(`页面：${common.getName()} 监听到事件：${name}`)
                callback(ret, err)
            }
        })
    },
}
