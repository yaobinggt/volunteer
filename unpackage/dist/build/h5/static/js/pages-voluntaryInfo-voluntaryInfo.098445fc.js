(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-voluntaryInfo-voluntaryInfo"],{"0c75":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uNavbar:i("55a0").default,uIcon:i("cfcf").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"voluntaryInfo"},[i("u-navbar",{attrs:{"is-back":!1,title:""}},[i("v-uni-view",{staticClass:"flex-1 slot-wrap flex-between px-3"},[i("u-icon",{attrs:{name:"arrow-left",color:"#666",size:"32"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"title"},[t._v("模拟志愿表详情")]),i("v-uni-view",{staticClass:"vicon"})],1)],1),i("v-uni-view",{staticClass:"top p-2 mt-2"},[i("v-uni-view",{staticClass:"title mb-1"},[t._v(t._s(t.info.volunteer_name))]),i("v-uni-text",[t._v("科目："+t._s(t.info.elective))]),i("br"),i("v-uni-text",[t._v("总分："+t._s(t.info.fraction)+"分")])],1),i("v-uni-view",{staticClass:"list p-2"},[i("v-uni-view",{staticClass:"item title flex-between"},[i("v-uni-view",{staticClass:"flex-2"},[t._v("序列")]),i("v-uni-view",{staticClass:"flex-5"},[t._v("院校")]),i("v-uni-view",{staticClass:"flex-5"},[t._v("专业")])],1),t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item flex-between"},[i("v-uni-view",{staticClass:"flex-2"},[t._v(t._s(n+1))]),i("v-uni-view",{staticClass:"flex-5"},[t._v("["+t._s(e.school_code)+"]"+t._s(e.school_name))]),i("v-uni-view",{staticClass:"flex-5"},[t._v("["+t._s(e.school_specialty_code)+"]"+t._s(e.specialty_name))])],1)}))],2)],1)},s=[]},3176:function(t,e,i){"use strict";var n=i("54f6"),a=i.n(n);a.a},"54f6":function(t,e,i){var n=i("bf80");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("11292f8e",n,!0,{sourceMap:!1,shadowMode:!1})},"55a0":function(t,e,i){"use strict";i.r(e);var n=i("c48b"),a=i("c096");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("3176");var o,l=i("f0c5"),u=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"6fefbe5a",null,!1,n["a"],o);e["default"]=u.exports},6093:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{form:{signature:"1234567890",id:""},list:[],info:[]}},onLoad:function(t){this.form.id=t.id},created:function(){this.getVoluntaryInfo()},methods:{getVoluntaryInfo:function(){var t=this,e=Object.assign(this.form,{});this.$api.getVoluntaryInfo(e).then((function(e){console.log(e),t.list=e.list,t.info=e.info}))},goBack:function(){uni.switchTab({url:"/pages/tabbar/fill/fill",success:function(t){var e=getCurrentPages().pop();e&&e.onLoad(location.reload())}})}}};e.default=n},"6c75":function(t,e,i){"use strict";i.r(e);var n=i("0c75"),a=i("aa23");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("a93d");var o,l=i("f0c5"),u=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"33d5899c",null,!1,n["a"],o);e["default"]=u.exports},a93d:function(t,e,i){"use strict";var n=i("c996"),a=i.n(n);a.a},aa23:function(t,e,i){"use strict";i.r(e);var n=i("6093"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},bf80:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-navbar[data-v-6fefbe5a]{width:100%}.u-navbar-fixed[data-v-6fefbe5a]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-6fefbe5a]{width:100%}.u-navbar-inner[data-v-6fefbe5a]{\ndisplay:flex;flex-direction:row;\njustify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-6fefbe5a]{\ndisplay:flex;flex-direction:row;\nalign-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-6fefbe5a]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-6fefbe5a]{\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-6fefbe5a]{flex:1}.u-title[data-v-6fefbe5a]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-6fefbe5a]{flex:1;\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:flex-end}.u-slot-content[data-v-6fefbe5a]{flex:1;\ndisplay:flex;flex-direction:row;\nalign-items:center}',""]),t.exports=e},c096:function(t,e,i){"use strict";i.r(e);var n=i("f164"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},c48b:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uIcon:i("cfcf").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx",fontWeight:t.titleBold?"bold":"normal"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},s=[]},c996:function(t,e,i){var n=i("f2da");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6ce0e2af",n,!0,{sourceMap:!1,shadowMode:!1})},f164:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),a={},s={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:a,statusBarHeight:n.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(n.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=s},f2da:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.slot-wrap .vicon[data-v-33d5899c]{width:%?34?%;height:%?34?%;display:flex;justify-items:center;align-items:center}.slot-wrap .title[data-v-33d5899c]{font-size:%?32?%}.voluntaryInfo .top uni-text[data-v-33d5899c]{font-size:%?26?%;color:#606266}.voluntaryInfo .list .title[data-v-33d5899c]{color:#212529!important}.voluntaryInfo .list .title uni-view[data-v-33d5899c]{padding:%?20?% 0!important}.voluntaryInfo .list .item[data-v-33d5899c]{color:#606266}.voluntaryInfo .list .item uni-view[data-v-33d5899c]{display:flex;justify-content:center;align-items:center;padding:%?10?% 0;border-right:solid %?1?% #fff}.voluntaryInfo .list .item uni-view[data-v-33d5899c]:nth-child(2){padding-left:%?10?%;padding-right:%?10?%}.voluntaryInfo .list .item uni-view[data-v-33d5899c]:nth-child(3){padding-left:%?10?%;padding-right:%?10?%}.voluntaryInfo .list uni-view.item[data-v-33d5899c]:nth-of-type(odd){background-color:#ecf5ff}',""]),t.exports=e}}]);