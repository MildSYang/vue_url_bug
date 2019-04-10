export default {
    /**
     * 设置全局数据
     * @param name
     * @param value
     */
    set(name, value) {
        let _v = JSON.stringify({
            value: value
        })
        window.api.setGlobalData({
            key: name,
            value: _v
        })
    },
    /**
     * 获取全局数据
     * @param name
     * @returns {*}
     */
    get(name) {
        let _v = window.api.getGlobalData({
            key: name
        })
        if (_v) {
            return JSON.parse(_v).value
        }
    },
}
