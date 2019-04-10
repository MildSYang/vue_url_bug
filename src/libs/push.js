import e from '@/libs/sf_event'
var _initPush;

(function() {
    let _vue;
    var pushMsg = function pushMsg() {
        // 用户信息绑定至APICloud推送服务器
        var ajpush = _vue.api.require('ajpush');
        var _this = this;
        this.init = function() {
            if (_vue.api.systemType == 'android') {
                ajpush.init(function(ret) {
                    if (ret && ret.status) {
                        console.log('success------------------------')
                    }
                });
            }
        };
        // 绑定用户推送信息
        this.bind = function(id, callback) {
            console.log(_vue.appInfo.ids + '_' + id + '----------------------')
            ajpush.bindAliasAndTags({
                alias: _vue.appInfo.ids + '_' + id + '',
                tags: [ 'bhspt' ]
            }, function(ret) {
                console.log(JSON.stringify(ret))
                callback && callback();
            });
        };
        // 停止推送
        this.stopPush = function() {
            ajpush.stopPush(function(ret) {
                if (ret && ret.status) {
                    ////console.log('停止推送成功');
                }
            });
        };
        // 恢复推送
        this.resumePush = function() {
            ajpush.resumePush(function(ret) {
                if (ret && ret.status) {
                    ////console.log('恢复推送成功');
                }
            });
        };
        // 注册监听推送消息
        this.setListener = function(callback) {
            console.log('-----------推送初始化');
            ajpush.setListener(function(ret) {
                if (ret) {
                    console.log('---------------推送' + JSON.stringify(ret));
                    var extra = ret.extra;
                    var name = extra.name;
                    //saveRecord(name, id);
                    this.sendEvent('getUnhandle');
                    //alert(name)
                    //this.sendEvent('set_red_point', {name: name});
                    callback && callback(name);
                }
            });
        };
        //移除监听
        this.removeListener = function() {
            ajpush.removeListener();
        };
        //获取推送状态
        this.isStop = function(callback) {
            ajpush.isPushStopped(function(ret) {
                if (ret && ret.isStopped == 0) {
                    callback;
                } else {
                    _this.resumePush(function() {
                    });
                    _this.setListener();
                }
            });
        };
        // 退出登录
        this.logout = function() {
            _this.bind('');
            _this.removeListener();
        };
        // 登录绑定
        this.login = function(id) {
            _this.init();
            _this.bind(id);
            _this.setListener();
        };
        this.removeBadge = function() {
            ajpush.setBadge({
                badge: 10
            });
        }
    };

    function jumpDone(item) {
        var param = {
            name: item.winName,
            url: 'widget://html/' + item.winPath + '.html',
            pageParam: item.winParam
        };
        _vue.api.openWin(param);
    }

    function initPush(vue) {
        _vue = vue
        var push = new pushMsg();
        push.removeBadge();
        e.listen('shopPush', function() {
            push.logout();
        })
        // ios点击通知栏后的操作
        e.listen('noticeclicked', (ret) => {
            var aj = ret.extra;
            jumpDone(aj);
        })
        // 安卓点击通知栏后的操作
        e.listen('appintent', (ret) => {
            var aj = ret.appParam.ajpush.extra
            jumpDone(aj);
        })
        e.listen('close_now_win', (ret) => {
            var aj = ret.appParam.ajpush.extra
            jumpDone(aj);
        })
        e.listen('pause', () => {
            push.logout();
            push.login(vue.getUid());
        });
    }

    _initPush = initPush
})()

export default _initPush
