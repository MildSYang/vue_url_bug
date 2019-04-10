export default {
    getName() {
        let name = global.location.pathname
        let last = name.indexOf('.html')
        let lastLen = last >= 0 ? -5 : 0
        if (process.env.NODE_ENV === 'production') {
            let root = '/html/'
            return this.slice(name, name.indexOf(root) + root.length, lastLen)
        } else {
            return this.slice(name, 1, lastLen)
        }
    },
    /**
     * @param str
     * @param start
     * @param len
     * @returns {*}
     */
    slice (str, start, len) {
        if (len) {
            return str.slice(start, len)
        } else {
            return str.slice(start)
        }
    }
}
