import sha1 from "sha1";
import g from "@/libs/sf_global";

export default {
  appInfo: {
    ids: '22',
    keys: '3c297a9b-e585-00b8-d5fb-6c6ede80f7fc',
    ip: 'http://bjzggs.com/api.php/',
  },
  getUid() {
    return g.get('uid')
  },
  getUserInfo() {
    return JSON.parse(g.get('userInfo'));
  },
  getUToken() {
    var userInfo = this.getUserInfo();
    if (!userInfo) {
      return '';
    }
    return userInfo.uToken;
  },
  getHeader() {
    return {
      'APPID': this.appInfo.ids,
      'APPKEY': this.getAppkey(),
      'UID': this.getUid(),
      'UTOKEN': this.getUToken(),
    }
  },
  getAppkey() {
    var now = Date.now();
    var key = this.appInfo.keys;
    var id = this.appInfo.ids;
    var appKey = sha1(id + 'APP' + key + 'APP' + now) + '.' + now;
    return appKey;
  },
}