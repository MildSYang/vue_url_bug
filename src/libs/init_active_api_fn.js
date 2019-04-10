export default () => {
    if (window.api) {
        return window.api
    } else {
        window.api = {
            isBrowser: true,
            safeArea: {
                top: 30,
                bottom: 20
            },
            openFrameGroup(options, fn) {
                let iframe = document.createElement('iframe');
                Object.assign(iframe.style, {
                    position: 'absolute',
                    top: options.rect.y + 'px',
                    left: options.rect.x,
                    width: options.rect.w === 'auto' ? '100%' : options.rect.w,
                    height: options.rect.h + 'px',
                    border: 'none',
                })
                iframe.name = options.name
                iframe.index = options.index
                iframe.setAttribute('index', options.index)
                iframe.src = options.frames[ options.index ].url
                this._frameGroup[ iframe.name ] = options
                document.body.appendChild(iframe)
                fn && fn()
            },
            setFrameGroupIndex(options) {
                let frame = document.body.querySelector(`iframe[name="${options.name}"][index="${options.index}"]`)
                if (frame) {
                    document.body.querySelectorAll(`iframe[name="${options.name}"]`).forEach((el) => {
                        if (+el.getAttribute('index') !== +options.index) {
                            el.style.display = 'none'
                        } else {
                            el.style.display = 'block'
                        }
                    })
                } else {
                    this._frameGroup[ options.name ].index = options.index
                    this.openFrameGroup(this._frameGroup[ options.name ])
                }
            }
        }
    }
    return window.api
}
