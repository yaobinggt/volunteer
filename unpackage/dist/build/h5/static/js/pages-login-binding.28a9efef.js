(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-binding"],{"039f":function(e,t,a){var i=a("be43");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("51a9d2ff",i,!0,{sourceMap:!1,shadowMode:!1})},"0e04":function(e,t,a){"use strict";a.r(t);var i=a("7842"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},1478:function(e,t,a){"use strict";a.r(t);var i=a("328e"),n=a("b123");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("2f622");var r,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"1e76192b",null,!1,i["a"],r);t["default"]=s.exports},"175c":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+e.size,e.plain?"u-btn--"+e.type+"--plain":"",e.loading?"u-loading":"","circle"==e.shape?"u-round-circle":"",e.hairLine?e.showHairLineBorder:"u-btn--bold-border","u-btn--"+e.type,e.disabled?"u-btn--"+e.type+"--disabled":""],style:[e.customStyle,{overflow:e.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(e.hoverStartTime),"hover-stay-time":Number(e.hoverStayTime),disabled:e.disabled,"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,"send-message-title":e.sendMessageTitle,"send-message-path":"sendMessagePath",lang:e.lang,"data-name":e.dataName,"session-from":e.sessionFrom,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"hover-class":e.getHoverClass,loading:e.loading},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getphonenumber.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.getuserinfo.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.error.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.opensetting.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.launchapp.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.click(t)}}},[e._t("default"),e.ripple?a("v-uni-view",{staticClass:"u-wave-ripple",class:[e.waveActive?"u-wave-active":""],style:{top:e.rippleTop+"px",left:e.rippleLeft+"px",width:e.fields.targetWidth+"px",height:e.fields.targetWidth+"px","background-color":e.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):e._e()],2)},o=[]},"263d":function(e,t,a){var i=a("4232");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("b311ebf8",i,!0,{sourceMap:!1,shadowMode:!1})},"285a":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={uPopup:a("1017").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"u-select"},[a("u-popup",{attrs:{maskCloseAble:e.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:e.safeAreaInsetBottom,"z-index":e.uZIndex},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("v-uni-view",{staticClass:"u-select"},[a("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t)}}},[a("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:e.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getResult("cancel")}}},[e._v(e._s(e.cancelText))]),a("v-uni-view",{staticClass:"u-select__header__title"},[e._v(e._s(e.title))]),a("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:e.moving?e.cancelColor:e.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.getResult("confirm")}}},[e._v(e._s(e.confirmText))])],1),a("v-uni-view",{staticClass:"u-select__body"},[a("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:e.defaultSelector},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.columnChange.apply(void 0,arguments)},pickstart:function(t){arguments[0]=t=e.$handleEvent(t),e.pickstart.apply(void 0,arguments)},pickend:function(t){arguments[0]=t=e.$handleEvent(t),e.pickend.apply(void 0,arguments)}}},e._l(e.columnData,(function(t,i){return a("v-uni-picker-view-column",{key:i},e._l(t,(function(t,i){return a("v-uni-view",{key:i,staticClass:"u-select__body__picker-view__item"},[a("v-uni-view",{staticClass:"u-line-1"},[e._v(e._s(t[e.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},o=[]},"2f622":function(e,t,a){"use strict";var i=a("8bad"),n=a.n(i);n.a},3176:function(e,t,a){"use strict";var i=a("54f6"),n=a.n(i);n.a},"328e":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={uNavbar:a("55a0").default,uLoading:a("4446").default,uForm:a("3483").default,uFormItem:a("dc4f").default,uInput:a("2ca3").default,uButton:a("652c").default,uSelect:a("9f5a").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"wrap"},[a("u-navbar",{attrs:{"is-back":!1,title:"绑定考生信息"}}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-box"},[a("u-loading",{attrs:{show:e.loading}}),e._v("数据加载中...")],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"bindmain"},[a("u-form",{ref:"uForm",attrs:{model:e.form,rules:e.rules,errorType:e.errorType}},[a("u-form-item",{attrs:{"label-width":"160","label-position":e.labelPosition,label:"所在地区",prop:"provincename"}},[a("u-input",{attrs:{border:e.border,type:"select","select-open":e.provinceShow,placeholder:"请选所在省份"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.provinceShow=!0}},model:{value:e.form.provincename,callback:function(t){e.$set(e.form,"provincename",t)},expression:"form.provincename"}})],1),a("u-form-item",{attrs:{"label-width":"160","label-position":e.labelPosition,label:"学校名称",prop:"schoolname"}},[a("u-input",{attrs:{border:e.border,type:"select","select-open":e.schoolShow,placeholder:"请选择所在学校"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.schoolShowbox.apply(void 0,arguments)}},model:{value:e.form.schoolname,callback:function(t){e.$set(e.form,"schoolname",t)},expression:"form.schoolname"}})],1),a("u-form-item",{attrs:{"label-width":"160","label-position":e.labelPosition,label:"高考年份",prop:"yearname"}},[a("u-input",{attrs:{border:e.border,type:"select","select-open":e.selectYearShow,placeholder:"请选高考年份"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectYearShow=!0}},model:{value:e.form.yearname,callback:function(t){e.$set(e.form,"yearname",t)},expression:"form.yearname"}})],1),a("u-form-item",{attrs:{"label-width":"160","label-position":e.labelPosition,label:"考生姓名",prop:"name"}},[a("u-input",{attrs:{border:e.border,placeholder:"请输入姓名",type:"text"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.copyname.apply(void 0,arguments)}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("u-form-item",{attrs:{"label-width":"160","label-position":e.labelPosition,label:"身份证号",prop:"idcard"}},[a("u-input",{attrs:{border:e.border,placeholder:"请输入身份证号",type:"text"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.copyid.apply(void 0,arguments)}},model:{value:e.form.idcard,callback:function(t){e.$set(e.form,"idcard",t)},expression:"form.idcard"}})],1),a("u-form-item",{attrs:{"label-width":"160","label-position":e.labelPosition,label:"性别",prop:"gendername"}},[a("u-input",{attrs:{border:e.border,type:"select","select-open":e.actionSheetShow,placeholder:"请选择性别"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.actionSheetShow=!0}},model:{value:e.form.gendername,callback:function(t){e.$set(e.form,"gendername",t)},expression:"form.gendername"}})],1)],1),a("u-button",{staticClass:"mt-5",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("确定")])],1),a("u-select",{attrs:{mode:"mutil-column-auto",list:e.cityList},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.cityConfirm.apply(void 0,arguments)}},model:{value:e.provinceShow,callback:function(t){e.provinceShow=t},expression:"provinceShow"}}),a("u-select",{attrs:{mode:"single-column",list:e.schoolList},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.schoolConfirm.apply(void 0,arguments)}},model:{value:e.schoolShow,callback:function(t){e.schoolShow=t},expression:"schoolShow"}}),a("u-select",{attrs:{mode:"single-column",list:e.yearList},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.selectYearConfirm.apply(void 0,arguments)}},model:{value:e.selectYearShow,callback:function(t){e.selectYearShow=t},expression:"selectYearShow"}}),a("u-select",{attrs:{mode:"single-column",list:e.genderList},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.genderConfirm.apply(void 0,arguments)}},model:{value:e.actionSheetShow,callback:function(t){e.actionSheetShow=t},expression:"actionSheetShow"}})],1)},o=[]},"3a5c":function(e,t,a){"use strict";a.r(t);var i=a("4608"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},4232:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-loading-circle[data-v-1b741bef]{display:inline-flex;vertical-align:middle;width:%?28?%;height:%?28?%;background:0 0;border-radius:50%;border:2px solid;border-color:#e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;-webkit-animation:u-circle-data-v-1b741bef 1s linear infinite;animation:u-circle-data-v-1b741bef 1s linear infinite}.u-loading-flower[data-v-1b741bef]{width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:a 1s steps(12) infinite;animation:u-flower-data-v-1b741bef 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}@-webkit-keyframes u-flower-data-v-1b741bef{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes u-flower-data-v-1b741bef{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes u-circle-data-v-1b741bef{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),e.exports=t},4446:function(e,t,a){"use strict";a.r(t);var i=a("a3bf"),n=a("3a5c");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("b77e");var r,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"1b741bef",null,!1,i["a"],r);t["default"]=s.exports},4608:function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"u-loading",props:{mode:{type:String,default:"circle"},color:{type:String,default:"#c7c7c7"},size:{type:[String,Number],default:"34"},show:{type:Boolean,default:!0}},computed:{cricleStyle:function(){var e={};return e.width=this.size+"rpx",e.height=this.size+"rpx","circle"==this.mode&&(e.borderColor="#e4e4e4 #e4e4e4 #e4e4e4 ".concat(this.color?this.color:"#c7c7c7")),e}}};t.default=i},"4e86":function(e,t,a){"use strict";a.r(t);var i=a("f9b9"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"54f6":function(e,t,a){var i=a("bf80");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("11292f8e",i,!0,{sourceMap:!1,shadowMode:!1})},"55a0":function(e,t,a){"use strict";a.r(t);var i=a("c48b"),n=a("c096");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("3176");var r,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"6fefbe5a",null,!1,i["a"],r);t["default"]=s.exports},"652c":function(e,t,a){"use strict";a.r(t);var i=a("175c"),n=a("4e86");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("9206");var r,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"5c660135",null,!1,i["a"],r);t["default"]=s.exports},"68ec":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-select__action[data-v-60cbc1d1]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-60cbc1d1]{position:absolute;right:%?20?%;top:50%;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-60cbc1d1]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-60cbc1d1]{color:#606266}.u-select--border[data-v-60cbc1d1]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-60cbc1d1]{\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-60cbc1d1]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-60cbc1d1]{height:100%;box-sizing:border-box}.u-select__body__picker-view__item[data-v-60cbc1d1]{\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;font-size:%?32?%;color:#303133;padding:0 %?8?%}',""]),e.exports=t},"6a0c":function(e,t,a){"use strict";var i=a("4ea4");a("7db0"),a("ac1f"),a("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("1da1")),o={data:function(){var e=this;return{infoData:{signature:"123456789"},model:{signature:"123456789",district_id:"",city_id:"",conty_id:"",year:"",name:"",gender:"",school_name:"",id_card:""},csForm:{signature:"123456789"},form:{name:"",yearname:"",gendername:"",provincename:"",schoolname:"",idcard:""},provinceList:[],provinceList2:[],schoolList:[],yearList:[],genderList:[{value:"1",label:"男"},{value:"2",label:"女"}],rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:5,message:"姓名长度在3到5个字符",trigger:["change","blur"]},{validator:function(t,a,i){return e.$u.test.chinese(a)},message:"姓名必须为中文",trigger:["change","blur"]}],idcard:[{required:!0,message:"请输入身份证号",trigger:"blur"},{validator:function(t,a,i){return e.$u.test.idCard(a)},message:"请输入正确的身份证号",trigger:["change","blur"]}],gendername:[{required:!0,message:"请选择性别",trigger:"change"}],provincename:[{required:!0,message:"请选择所在地区",trigger:"change"}],schoolname:[{required:!0,message:"请选择学校名称",trigger:"change"}],yearname:[{required:!0,message:"请选择所高考年份",trigger:"change"}]},border:!1,check:!1,selectStatus:"close",provinceShow:!1,selectYearShow:!1,actionSheetShow:!1,schoolShow:!1,loading:!0,labelPosition:"left",codeTips:"",errorType:["message"],genderDefault:[],provinceDefault:[],yearDefault:[],cityList:null,schoolListRes:[]}},onLoad:function(){this.getInfo(),this.getCitySchool()},created:function(){},computed:{},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{submit:function(){var e=this;this.$refs.uForm.validate((function(t){t?(console.log("验证通过"),e.bindUserinfo()):console.log("验证失败")}))},schoolShowbox:function(){""==this.form.provincename?uni.showToast({icon:"none",title:"请先选择所在地区"}):this.schoolShow=!0},schoolConfirm:function(e){console.log(e),this.form.schoolname=e[0].label,this.model.school_name=e[0].label},cityConfirm:function(e){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var i,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.form.provincename=e[0].label+"-"+e[1].label+"-"+e[2].label,t.model.district_id=e[0].value,t.model.city_id=e[1].value,t.model.conty_id=e[2].value,a.t0=t.schoolListRes,a.next=7,function(t){return t.province_id===e[0].value};case 7:return a.t1=a.sent,i=a.t0.find.call(a.t0,a.t1),a.t2=i.city_list,a.next=12,function(t){return t.city_id===e[1].value};case 12:return a.t3=a.sent,n=a.t2.find.call(a.t2,a.t3),a.t4=n.area_list,a.next=17,function(t){return t.area_id===e[2].value};case 17:a.t5=a.sent,o=a.t4.find.call(a.t4,a.t5),t.schoolList=o.school_list;case 20:case"end":return a.stop()}}),a)})))()},genderConfirm:function(e){this.form.gendername=e[0].label,this.model.gender=e[0].value+"";for(var t=0,a=0;a<this.genderList.length;a++)if(this.genderList[a].label==e[0].label){t=a;break}this.genderDefault[0]=t},provinceConfirm:function(e){this.form.provincename=e[0].label,this.model.district_id=e[0].value+"";for(var t=0,a=0;a<this.provinceList.length;a++)if(this.provinceList[a].label==e[0].label){t=a;break}this.provinceDefault[0]=t},selectYearConfirm:function(e){this.form.yearname=e[0].label,this.model.year=e[0].value+"";for(var t=0,a=0;a<this.yearList.length;a++)if(this.yearList[a].label==e[0].label){t=a;break}this.yearDefault[0]=t},copyname:function(e){this.model.name=e},copyid:function(e){this.model.id_card=e},bindUserinfo:function(){var e=Object.assign(this.model,{});console.log(e),this.$api.bindUserinfo(e).then((function(e){setTimeout((function(){uni.switchTab({url:"/pages/tabbar/index/index",success:function(e){var t=getCurrentPages().pop();t&&t.onLoad(location.reload())}})}),350)}))},getCitySchool:function(){var e=this;this.loading=!0;var t=Object.assign(this.csForm,{});this.$api.getCitySchool(t).then((function(t){console.log(t),e.loading=!1;var a=JSON.parse(JSON.stringify(t).replace(/province/g,"label")),i=JSON.parse(JSON.stringify(a).replace(/city/g,"label")),n=JSON.parse(JSON.stringify(i).replace(/label_list/g,"children")),o=JSON.parse(JSON.stringify(n).replace(/area_list/g,"children")),r=JSON.parse(JSON.stringify(o).replace(/label_id/g,"value")),l=JSON.parse(JSON.stringify(r).replace(/area_id/g,"value"));e.cityList=JSON.parse(JSON.stringify(l).replace(/area_name/g,"label"));var s=JSON.parse(JSON.stringify(t).replace(/school_name/g,"label"));e.schoolListRes=JSON.parse(JSON.stringify(s).replace(/school_id/g,"value")),console.log(e.schoolListRes)}))},getInfo:function(){var e=this,t=Object.assign(this.infoData,{});this.$api.getInfo(t).then((function(t){if(console.log(t),t.district_list.length>1)for(var a=t.district_list,i=0;i<a.length;i++){var n={label:a[i].district_name,value:a[i].district_id};e.provinceList.push(n)}else uni.showToast({icon:"none",title:"暂无数据"});if(t.year_list.length>1){var o=t.year_list;for(i=0;i<o.length;i++){n={label:o[i].year_name,value:o[i].year_value};e.yearList.push(n)}}else uni.showToast({icon:"none",title:"暂无数据"})}))}}};t.default=o},7842:function(e,t,a){"use strict";a("cb29"),a("d81d"),a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(e){var t=this;e&&setTimeout((function(){return t.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var e=1,t=this.list;while(t[0][this.childName])t=t[0]?t[0][this.childName]:{},e++;this.columnNum=e}},setColumnData:function(){var e=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var t=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],a=0;a<this.columnNum;a++)0==a?(e[a]=this.list,t=t[this.childName]):(e[a]=t,t=t[this.defaultSelector[a]][this.childName]);else"single-column"==this.mode?e[0]=this.list:e=this.list;this.columnData=e},setSelectValue:function(){for(var e=null,t=0;t<this.columnNum;t++){e=this.columnData[t][this.defaultSelector[t]];var a={value:e?e[this.valueName]:null,label:e?e[this.labelName]:null};e&&e.extra&&(a.extra=e.extra),this.selectValue.push(a)}},columnChange:function(e){var t=this,a=null,i=e.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(e,t){e!=i[t]&&(a=t)})),this.defaultSelector=i;for(var n=a+1;n<this.columnNum;n++)this.columnData[n]=this.columnData[n-1][n-1==a?i[a]:0][this.childName],this.defaultSelector[n]=0;i.map((function(e,a){var n=t.columnData[a][i[a]],o={value:n?n[t.valueName]:null,label:n?n[t.labelName]:null};n&&void 0!==n.extra&&(o.extra=n.extra),t.selectValue.push(o)})),this.lastSelectIndex=i}else if("single-column"==this.mode){var o=this.columnData[0][i[0]],r={value:o?o[this.valueName]:null,label:o?o[this.labelName]:null};o&&void 0!==o.extra&&(r.extra=o.extra),this.selectValue.push(r)}else"mutil-column"==this.mode&&i.map((function(e,a){var n=t.columnData[a][i[a]],o={value:n?n[t.valueName]:null,label:n?n[t.labelName]:null};n&&void 0!==n.extra&&(o.extra=n.extra),t.selectValue.push(o)}))},close:function(){this.$emit("input",!1)},getResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&this.$emit(e,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};t.default=i},"8bad":function(e,t,a){var i=a("f3b5");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("b20c742e",i,!0,{sourceMap:!1,shadowMode:!1})},9206:function(e,t,a){"use strict";var i=a("039f"),n=a.n(i);n.a},"9f5a":function(e,t,a){"use strict";a.r(t);var i=a("285a"),n=a("0e04");for(var o in n)"default"!==o&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("bc53");var r,l=a("f0c5"),s=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"60cbc1d1",null,!1,i["a"],r);t["default"]=s.exports},a3bf:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("v-uni-view",{staticClass:"u-loading",class:"circle"==e.mode?"u-loading-circle":"u-loading-flower",style:[e.cricleStyle]}):e._e()},o=[]},a5c7:function(e,t,a){var i=a("68ec");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("2b33b6c6",i,!0,{sourceMap:!1,shadowMode:!1})},b123:function(e,t,a){"use strict";a.r(t);var i=a("6a0c"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},b77e:function(e,t,a){"use strict";var i=a("263d"),n=a.n(i);n.a},bc53:function(e,t,a){"use strict";var i=a("a5c7"),n=a.n(i);n.a},be43:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-btn[data-v-5c660135]::after{border:none}.u-btn[data-v-5c660135]{position:relative;border:0;display:inline-flex;overflow:visible;line-height:1;\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;box-sizing:border-box;transition:all .15s}.u-btn--bold-border[data-v-5c660135]{border:1px solid #fff}.u-btn--default[data-v-5c660135]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-5c660135]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-5c660135]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-5c660135]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-5c660135]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-5c660135]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-5c660135]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-5c660135]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-5c660135]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-5c660135]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-5c660135]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-5c660135]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-5c660135]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-5c660135]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-5c660135]:after{content:" ";position:absolute;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-5c660135]{z-index:0;position:absolute;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-5c660135]{opacity:0;-webkit-transform:scale(2);transform:scale(2);transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-5c660135]{border-radius:%?100?%}.u-round-circle[data-v-5c660135]::after{border-radius:%?100?%}.u-loading[data-v-5c660135]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-5c660135]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-5c660135]{display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-5c660135]{display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-5c660135]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-5c660135]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-5c660135]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-5c660135]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-5c660135]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-5c660135]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-5c660135]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-5c660135]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-5c660135]{background:#18b566!important;color:#fff}.u-info-hover[data-v-5c660135]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-5c660135]{background:#f29100!important;color:#fff}.u-error-hover[data-v-5c660135]{background:#dd6161!important;color:#fff}',""]),e.exports=t},bf80:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-navbar[data-v-6fefbe5a]{width:100%}.u-navbar-fixed[data-v-6fefbe5a]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-6fefbe5a]{width:100%}.u-navbar-inner[data-v-6fefbe5a]{\ndisplay:flex;flex-direction:row;\njustify-content:space-between;position:relative;align-items:center}.u-back-wrap[data-v-6fefbe5a]{\ndisplay:flex;flex-direction:row;\nalign-items:center;flex:1;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-6fefbe5a]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-6fefbe5a]{\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;flex-shrink:0}.u-navbar-centent-slot[data-v-6fefbe5a]{flex:1}.u-title[data-v-6fefbe5a]{line-height:%?60?%;font-size:%?32?%;flex:1}.u-navbar-right[data-v-6fefbe5a]{flex:1;\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:flex-end}.u-slot-content[data-v-6fefbe5a]{flex:1;\ndisplay:flex;flex-direction:row;\nalign-items:center}',""]),e.exports=t},c096:function(e,t,a){"use strict";a.r(t);var i=a("f164"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},c48b:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i}));var i={uIcon:a("cfcf").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{},[a("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":e.isFixed,"u-border-bottom":e.borderBottom},style:[e.navbarStyle]},[a("v-uni-view",{staticClass:"u-status-bar",style:{height:e.statusBarHeight+"px"}}),a("v-uni-view",{staticClass:"u-navbar-inner",style:[e.navbarInnerStyle]},[e.isBack?a("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-icon-wrap"},[a("u-icon",{attrs:{name:e.backIconName,color:e.backIconColor,size:e.backIconSize}})],1),e.backText?a("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[e.backTextStyle]},[e._v(e._s(e.backText))]):e._e()],1):e._e(),e.title?a("v-uni-view",{staticClass:"u-navbar-content-title",style:[e.titleStyle]},[a("v-uni-view",{staticClass:"u-title u-line-1",style:{color:e.titleColor,fontSize:e.titleSize+"rpx",fontWeight:e.titleBold?"bold":"normal"}},[e._v(e._s(e.title))])],1):e._e(),a("v-uni-view",{staticClass:"u-slot-content"},[e._t("default")],2),a("v-uni-view",{staticClass:"u-slot-right"},[e._t("right")],2)],1)],1),e.isFixed&&!e.immersive?a("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(e.navbarHeight)+e.statusBarHeight+"px"}}):e._e()],1)},o=[]},cb29:function(e,t,a){var i=a("23e7"),n=a("81d5"),o=a("44d2");i({target:"Array",proto:!0},{fill:n}),o("fill")},f164:function(e,t,a){"use strict";a("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=uni.getSystemInfoSync(),n={},o={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:i.statusBarHeight}},computed:{navbarInnerStyle:function(){var e={};return e.height=this.navbarHeight+"px",e},navbarStyle:function(){var e={};return e.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(e,this.background),e},titleStyle:function(){var e={};return e.left=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",e.right=(i.windowWidth-uni.upx2px(this.titleWidth))/2+"px",e.width=uni.upx2px(this.titleWidth)+"px",e},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};t.default=o},f3b5:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */uni-page-body[data-v-1e76192b]{background-color:#f6f6f6}.wrap[data-v-1e76192b]{padding:%?30?%}.agreement[data-v-1e76192b]{display:flex;align-items:center;margin:%?40?% 0}.agreement .agreement-text[data-v-1e76192b]{padding-left:%?8?%;color:#909399}body.?%PAGE?%[data-v-1e76192b]{background-color:#f6f6f6}',""]),e.exports=t},f9b9:function(e,t,a){"use strict";a("c975"),a("a9e3"),a("d3b7"),a("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var e="";return e=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",e},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(e){var t=this;this.$u.throttle((function(){!0!==t.loading&&!0!==t.disabled&&(t.ripple&&(t.waveActive=!1,t.$nextTick((function(){this.getWaveQuery(e)}))),t.$emit("click",e))}),this.throttleTime)},getWaveQuery:function(e){var t=this;this.getElQuery().then((function(a){var i=a[0];if(i.width&&i.width&&(i.targetWidth=i.height>i.width?i.height:i.width,i.targetWidth)){t.fields=i;var n="",o="";n=e.touches[0].clientX,o=e.touches[0].clientY,t.rippleTop=o-i.top-i.targetWidth/2,t.rippleLeft=n-i.left-i.targetWidth/2,t.$nextTick((function(){t.waveActive=!0}))}}))},getElQuery:function(){var e=this;return new Promise((function(t){var a="";a=uni.createSelectorQuery().in(e),a.select(".u-btn").boundingClientRect(),a.exec((function(e){t(e)}))}))},getphonenumber:function(e){this.$emit("getphonenumber",e)},getuserinfo:function(e){this.$emit("getuserinfo",e)},error:function(e){this.$emit("error",e)},opensetting:function(e){this.$emit("opensetting",e)},launchapp:function(e){this.$emit("launchapp",e)}}};t.default=i}}]);