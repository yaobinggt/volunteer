(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"018a":function(t,e,a){"use strict";var o=a("6416"),r=a.n(o);r.a},"039f":function(t,e,a){var o=a("be43");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("51a9d2ff",o,!0,{sourceMap:!1,shadowMode:!1})},"175c":function(t,e,a){"use strict";var o;a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},n=[]},"4e86":function(t,e,a){"use strict";a.r(e);var o=a("f9b9"),r=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},6416:function(t,e,a){var o=a("71a6");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=a("4f06").default;r("fdac30d2",o,!0,{sourceMap:!1,shadowMode:!1})},"652c":function(t,e,a){"use strict";a.r(e);var o=a("175c"),r=a("4e86");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("9206");var i,l=a("f0c5"),c=Object(l["a"])(r["default"],o["b"],o["c"],!1,null,"5c660135",null,!1,o["a"],i);e["default"]=c.exports},"6df4":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return o}));var o={uForm:a("3483").default,uFormItem:a("dc4f").default,uInput:a("2ca3").default,uButton:a("652c").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"alogin"},[a("v-uni-view",{staticClass:"top p-3"},[a("v-uni-view",{staticClass:"title mb-1"},[t._v("手机快捷登录")]),a("v-uni-text",{staticClass:"atext"},[t._v("未注册的手机号将自动创建账号")])],1),a("v-uni-view",{staticClass:"main p-3"},[a("u-form",{ref:"uForm",attrs:{rules:t.rules,errorType:t.errorType}},[a("u-form-item",{attrs:{"label-position":t.labelPosition,label:"手机号码",prop:"phone","label-width":"150"}},[a("u-input",{attrs:{placeholder:"请输入手机号",type:"text"},model:{value:t.loginFrom.phone,callback:function(e){t.$set(t.loginFrom,"phone",e)},expression:"loginFrom.phone"}})],1),a("u-form-item",{attrs:{"label-position":t.labelPosition,label:"验证码",prop:"code","label-width":"150"}},[a("u-input",{attrs:{placeholder:"请输入验证码",type:"text"},model:{value:t.loginFrom.captache,callback:function(e){t.$set(t.loginFrom,"captache",e)},expression:"loginFrom.captache"}}),a("u-button",{attrs:{slot:"right",disabled:t.disabled,type:"success",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}},slot:"right"},[t._v(t._s(t.time>0?t.time+"秒后重新获取":"发送验证码"))])],1),a("u-button",{staticClass:"mt-5",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goLogin.apply(void 0,arguments)}}},[t._v("立即登录")])],1)],1)],1)},n=[]},"71a6":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.alogin .top .title[data-v-1d2250a8]{font-size:%?46?%}.alogin .top .atext[data-v-1d2250a8]{font-size:%?26?%;color:#666}',""]),t.exports=e},9206:function(t,e,a){"use strict";var o=a("039f"),r=a.n(o);r.a},a270:function(t,e,a){"use strict";var o=a("4ea4");a("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(a("5530")),n=a("2f62"),i={data:function(){var t=this;return{model:{phone:"",code:""},loginFrom:{signature:"327435fda0037d603e3f3db81171f13c",phone:"",captache:""},captachFrom:{signature:"d1d548a6b9e11c22b7128e7ead985c2a",type:"1"},rules:{phone:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{validator:function(e,a,o){return t.$u.test.mobile(a)},message:"手机号码不正确",trigger:["change","blur"]}],code:[{required:!0,message:"请输入验证码",trigger:["change","blur"]},{type:"number",message:"验证码只能为数字",trigger:["change","blur"]}]},labelPosition:"left",codeTips:"",time:"",disabled:!1,errorType:["message"]}},methods:(0,r.default)((0,r.default)({},(0,n.mapMutations)(["login"])),{},{codeChange:function(t){this.codeTips=t},sendCode:function(){var t=this,e=Object.assign(this.captachFrom,{phone:this.loginFrom.phone});this.$api.getCaptach(e).then((function(t){uni.showToast({title:t,icon:"none"})})),this.timer||(this.time=60,this.disabled=!0,this.timer=setInterval((function(){t.time>0&&t.time<=60?t.time--:(t.disabled=!1,clearInterval(t.timer),t.timer=null)}),1e3))},goLogin:function(){var t=this;uni.showLoading({title:"登录中…",mask:!1});var e=Object.assign(this.loginFrom,{});this.$api.doLogin(e).then((function(e){console.log(e),t.login(e),uni.showToast({title:"登录成功",icon:"none"}),e.userinfo.is_bind?uni.switchTab({url:"/pages/tabbar/index/index",success:function(t){var e=getCurrentPages().pop();e&&e.onLoad(location.reload())}}):t.goBind()})).finally((function(){uni.hideLoading()}))},goBind:function(){uni.navigateTo({url:"/pages/login/binding"})}})};e.default=i},be43:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-btn[data-v-5c660135]::after{border:none}.u-btn[data-v-5c660135]{position:relative;border:0;display:inline-flex;overflow:visible;line-height:1;\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-5c660135]{border:1px solid #fff}.u-btn--default[data-v-5c660135]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-5c660135]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-5c660135]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-5c660135]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-5c660135]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-5c660135]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-5c660135]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-5c660135]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-5c660135]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-5c660135]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-5c660135]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-5c660135]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-5c660135]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-5c660135]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-5c660135]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-5c660135]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-5c660135]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-5c660135]{border-radius:%?100?%}.u-round-circle[data-v-5c660135]::after{border-radius:%?100?%}.u-loading[data-v-5c660135]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-5c660135]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-5c660135]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-5c660135]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-5c660135]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-5c660135]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-5c660135]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-5c660135]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-5c660135]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-5c660135]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-5c660135]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-5c660135]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-5c660135]{background:#18b566!important;color:#fff}.u-info-hover[data-v-5c660135]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-5c660135]{background:#f29100!important;color:#fff}.u-error-hover[data-v-5c660135]{background:#dd6161!important;color:#fff}',""]),t.exports=e},c5ea:function(t,e,a){"use strict";a.r(e);var o=a("a270"),r=a.n(o);for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);e["default"]=r.a},cbd8:function(t,e,a){"use strict";a.r(e);var o=a("6df4"),r=a("c5ea");for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("018a");var i,l=a("f0c5"),c=Object(l["a"])(r["default"],o["b"],o["c"],!1,null,"1d2250a8",null,!1,o["a"],i);e["default"]=c.exports},f9b9:function(t,e,a){"use strict";a("c975"),a("a9e3"),a("d3b7"),a("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(a){var o=a[0];if(o.width&&o.width&&(o.targetWidth=o.height>o.width?o.height:o.width,o.targetWidth)){e.fields=o;var r="",n="";r=t.touches[0].clientX,n=t.touches[0].clientY,e.rippleTop=n-o.top-o.targetWidth/2,e.rippleLeft=r-o.left-o.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var a="";a=uni.createSelectorQuery().in(t),a.select(".u-btn").boundingClientRect(),a.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=o}}]);