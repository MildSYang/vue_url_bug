!function(c){function e(e){for(var t,n,r=e[0],a=e[1],i=e[2],o=0,u=[];o<r.length;o++)n=r[o],s[n]&&u.push(s[n][0]),s[n]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(c[t]=a[t]);for(d&&d(e);u.length;)u.shift()();return l.push.apply(l,i||[]),f()}function f(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==s[i]&&(r=!1)}r&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var n={},s={"main/info":0},l=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=c,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="../../";var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var a=0;a<t.length;a++)e(t[a]);var d=r;l.push([1,"chunk-vendors"]),f()}({"03b8":function(e,t,n){"use strict";n("7f7f");var r=n("f499"),a=n.n(r),i=n("a52d");t.a={send:function(e,t){window.api.sendEvent({name:e,extra:a()({name:e,form:i.a.getName(),data:t})})},listen:function(n,r){window.api.addEventListener({name:n},function(e,t){if(e.value){if(e.value.form===i.a.getName()&&n===e.value.name)return;r(e.value.data,t)}else r(e,t)})}}},1:function(e,t,n){e.exports=n("7cc0")},"439b":function(e,t,n){"use strict";var r=n("f499"),a=(n.n(r),n("5176")),i=n.n(a),o=(n("7f7f"),n("d110")),u=n("03b8"),c=n("7b4d"),f=n("a52d");t.a={data:function(){return{}},methods:{getUrl:function(e){return"widget://html/"+e+".html"},setFrameGroupIndex:function(e){var t=e.name,n=e.index;this.api.setFrameGroupIndex({name:t,index:n})},openFrameGroup:function(e,t){var n=this;o.a.set(e.name,e.frames),this.api.openFrameGroup(e,function(e){n.onShow(),t&&t(e)})},openWin:function(e){var t={url:this.getUrl(e.name)};i()(t,e),this.api.openWin(t)},openFrame:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.name;t||(t=f.a.getName().slice(0,-"/win".length)+"/frm");var n={name:t,url:this.getUrl(t),rect:{x:0,y:document.getElementById("l_header").offsetHeight,w:"auto",h:document.getElementById("l_body").offsetHeight}};i()(n,e),this.api.openFrame(n)},runWatchStore:function(){if(this.watchStore){var e=this.watchStore();for(var t in e)e.hasOwnProperty(t)&&c.a.get(t,e[t])}}},mounted:function(){var e=this;this.onShow&&u.a.listen("viewappear",function(){e.onShow()})},created:function(){this.runWatchStore()}}},"456f":function(e,t,n){},"7b4d":function(e,t,n){"use strict";var r=n("d110"),a=n("03b8"),i={get:function(e,t){var n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];if(!t)return r.a.get(e);n&&a.a.listen(e,t),t(r.a.get(e))},set:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=!(2<arguments.length&&void 0!==arguments[2])||arguments[2];r.a.set(e,t),n&&a.a.send(e,t)}};t.a=i},"7cc0":function(e,t,n){"use strict";n.r(t),n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),a=n("838d"),i=n("439b"),o=n("7b4d"),u={components:{sfContainer:a.a},data:function(){return{myNum:0}},mixins:[i.a],methods:{watchStore:function(){var t=this;return{"default/number":function(e){t.myNum=e}}},addNumber:function(){this.myNum++,o.a.set("default/number",this.myNum)},onShow:function(){this.runWatchStore()}},mounted:function(){}},c=(n("b7a0"),n("2877")),f=Object(c.a)(u,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("sf-container",{staticClass:"container"},[n("button",{on:{click:e.addNumber}},[e._v("点击")]),n("div",{staticClass:"text-center"},[e._v(e._s(e.myNum))])])},[],!1,null,"4eae0111",null).exports,s=(n("5cfb"),n("32dd"),n("bc7f")),l=n("1806"),d=n.n(l);r.a.use(d.a),window.apiready=function(){r.a.prototype.api=Object(s.a)(),new r.a({render:function(e){return e(f)}}).$mount("#app")}},"838d":function(e,t,n){"use strict";var r={},a=n("2877"),i=Object(a.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"full",attrs:{id:"l-container",flex:"dir:top"}},[this._t("default")],2)},[],!1,null,null,null);t.a=i.exports},a52d:function(e,t,n){"use strict";(function(n){t.a={getName:function(){var e=n.location.pathname,t=0<=e.indexOf(".html")?-5:0;return this.slice(e,e.indexOf("/html/")+"/html/".length,t)},slice:function(e,t,n){return n?e.slice(t,n):e.slice(t)}}}).call(this,n("c8ba"))},b7a0:function(e,t,n){"use strict";var r=n("456f");n.n(r).a},bc7f:function(e,t,n){"use strict";n("ac6a"),n("7f7f");var r=n("5176"),a=n.n(r);t.a=function(){return window.api||(window.api={isBrowser:!0,safeArea:{top:30,bottom:20},openFrameGroup:function(e,t){var n=document.createElement("iframe");a()(n.style,{position:"absolute",top:e.rect.y+"px",left:e.rect.x,width:"auto"===e.rect.w?"100%":e.rect.w,height:e.rect.h+"px",border:"none"}),n.name=e.name,n.index=e.index,n.setAttribute("index",e.index),n.src=e.frames[e.index].url,this._frameGroup[n.name]=e,document.body.appendChild(n),t&&t()},setFrameGroupIndex:function(t){document.body.querySelector('iframe[name="'.concat(t.name,'"][index="').concat(t.index,'"]'))?document.body.querySelectorAll('iframe[name="'.concat(t.name,'"]')).forEach(function(e){+e.getAttribute("index")!=+t.index?e.style.display="none":e.style.display="block"}):(this._frameGroup[t.name].index=t.index,this.openFrameGroup(this._frameGroup[t.name]))}}),window.api}},d110:function(e,t,n){"use strict";var r=n("f499"),a=n.n(r);t.a={set:function(e,t){var n=a()({value:t});window.api.setGlobalData({key:e,value:n})},get:function(e){var t=window.api.getGlobalData({key:e});if(t)return JSON.parse(t).value}}}});