(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ranking-salarySort-salarySort"],{"01e8":function(t,e,i){"use strict";i.r(e);var a=i("2de2"),l=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=l.a},"07c0":function(t,e,i){"use strict";i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uIcon:i("cfcf").default,uSelect:i("9f5a").default,rankSalary:i("563d").default},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"sort-select flex-between px-3"},[i("v-uni-text",[t._v("排行筛选条件")]),i("v-uni-view",{staticClass:"select-box"},[i("v-uni-view",{staticClass:"btn-sel flex-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.districtShow=!0}}},[i("v-uni-text",[t._v(t._s(t.districtName))]),i("u-icon",{attrs:{name:"../../../static/icon-down.png",color:"#787878",size:"32"}})],1),i("v-uni-view",{staticClass:"btn-sel flex-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.levelShow=!0}}},[i("v-uni-text",[t._v(t._s(t.levelName))]),i("u-icon",{attrs:{name:"../../../static/icon-down.png",color:"#787878",size:"32"}})],1),i("u-select",{staticClass:"score-select",attrs:{"default-value":t.districtDefault,mode:"single-column",list:t.districtList},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.districtConfirm.apply(void 0,arguments)}},model:{value:t.districtShow,callback:function(e){t.districtShow=e},expression:"districtShow"}}),i("u-select",{staticClass:"score-select",attrs:{"default-value":t.levelDefault,mode:"single-column",list:t.levelList},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.levelConfirm.apply(void 0,arguments)}},model:{value:t.levelShow,callback:function(e){t.levelShow=e},expression:"levelShow"}})],1)],1),i("rankSalary",{attrs:{collegeList:t.collegeList}})],1)},n=[]},"0e04":function(t,e,i){"use strict";i.r(e);var a=i("7842"),l=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=l.a},"167e":function(t,e,i){"use strict";i.r(e);var a=i("07c0"),l=i("01e8");for(var n in l)"default"!==n&&function(t){i.d(e,t,(function(){return l[t]}))}(n);i("dfb8");var s,c=i("f0c5"),o=Object(c["a"])(l["default"],a["b"],a["c"],!1,null,"7e59ffd5",null,!1,a["a"],s);e["default"]=o.exports},"285a":function(t,e,i){"use strict";i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var a={uPopup:i("1017").default},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-select"},[i("u-popup",{attrs:{maskCloseAble:t.maskCloseAble,mode:"bottom",popup:!1,length:"auto",safeAreaInsetBottom:t.safeAreaInsetBottom,"z-index":t.uZIndex},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[i("v-uni-view",{staticClass:"u-select"},[i("v-uni-view",{staticClass:"u-select__header",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"u-select__header__cancel u-select__header__btn",style:{color:t.cancelColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getResult("cancel")}}},[t._v(t._s(t.cancelText))]),i("v-uni-view",{staticClass:"u-select__header__title"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"u-select__header__confirm u-select__header__btn",style:{color:t.moving?t.cancelColor:t.confirmColor},attrs:{"hover-class":"u-hover-class","hover-stay-time":150},on:{touchmove:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.getResult("confirm")}}},[t._v(t._s(t.confirmText))])],1),i("v-uni-view",{staticClass:"u-select__body"},[i("v-uni-picker-view",{staticClass:"u-select__body__picker-view",attrs:{value:t.defaultSelector},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.columnChange.apply(void 0,arguments)},pickstart:function(e){arguments[0]=e=t.$handleEvent(e),t.pickstart.apply(void 0,arguments)},pickend:function(e){arguments[0]=e=t.$handleEvent(e),t.pickend.apply(void 0,arguments)}}},t._l(t.columnData,(function(e,a){return i("v-uni-picker-view-column",{key:a},t._l(e,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-select__body__picker-view__item"},[i("v-uni-view",{staticClass:"u-line-1"},[t._v(t._s(e[t.labelName]))])],1)})),1)})),1)],1)],1)],1)],1)},n=[]},"2de2":function(t,e,i){"use strict";i("ac1f"),i("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{from:{signature:"72947e99b7ceb35436cd241443f3e70a",district_id:0,level_id:0},collegeList:[],districtList:[],levelList:[],districtName:"全国",levelName:"不限",districtShow:!1,levelShow:!1,districtDefault:[0],levelDefault:[0]}},created:function(){this.getList()},methods:{getList:function(){var t=this,e=Object.assign(this.from,{});this.$api.getSalary(e).then((function(e){if(t.collegeList=e.list,console.log(e),e.search.district_list.length>1)for(var i=e.search.district_list,a=0;a<i.length;a++){var l={label:i[a].district_name,value:i[a].district_id};t.districtList.push(l)}else uni.showToast({icon:"none",title:"暂无数据"});if(e.search.level_list.length>1){var n=e.search.level_list;for(a=0;a<n.length;a++){l={label:n[a].label_name,value:n[a].label_id};t.levelList.push(l)}}else uni.showToast({icon:"none",title:"暂无数据"});console.log(t.districtList,t.famousList,t.levelList)}))},getListTwo:function(){var t=this,e=Object.assign(this.from,{});this.$api.getSalary(e).then((function(e){t.collegeList=e.list,console.log(e.list)}))},districtConfirm:function(t){console.log(t),this.districtName=t[0].label,this.from.district_id=t[0].value;for(var e=0,i=0;i<this.districtList.length;i++)if(this.districtList[i].label==t[0].label){e=i;break}this.districtDefault[0]=e,console.log(this.from),this.getListTwo()},levelConfirm:function(t){this.levelName=t[0].label,this.from.level_id=t[0].value;for(var e=0,i=0;i<this.levelList.length;i++)if(this.levelList[i].label==t[0].label){e=i;break}this.levelDefault[0]=e,this.getListTwo()}}};e.default=a},"3f82":function(t,e,i){"use strict";var a=i("7f7c"),l=i.n(a);l.a},"40a1":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"rankSalary",props:{collegeList:{type:Array,default:[]}},data:function(){return{}}};e.default=a},"563d":function(t,e,i){"use strict";i.r(e);var a=i("dc98"),l=i("95bf");for(var n in l)"default"!==n&&function(t){i.d(e,t,(function(){return l[t]}))}(n);i("3f82");var s,c=i("f0c5"),o=Object(c["a"])(l["default"],a["b"],a["c"],!1,null,"0bb41d60",null,!1,a["a"],s);e["default"]=o.exports},"56d1":function(t,e,i){t.exports=i.p+"static/img/bj.9e045dde.jpg"},"68ec":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.u-select__action[data-v-60cbc1d1]{position:relative;line-height:%?70?%;height:%?70?%}.u-select__action__icon[data-v-60cbc1d1]{position:absolute;right:%?20?%;top:50%;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.u-select__action__icon--reverse[data-v-60cbc1d1]{-webkit-transform:rotate(-180deg) translateY(50%);transform:rotate(-180deg) translateY(50%)}.u-select__hader__title[data-v-60cbc1d1]{color:#606266}.u-select--border[data-v-60cbc1d1]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-select__header[data-v-60cbc1d1]{\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:space-between;height:%?80?%;padding:0 %?40?%}.u-select__body[data-v-60cbc1d1]{width:100%;height:%?500?%;overflow:hidden;background-color:#fff}.u-select__body__picker-view[data-v-60cbc1d1]{height:100%;box-sizing:border-box}.u-select__body__picker-view__item[data-v-60cbc1d1]{\ndisplay:flex;flex-direction:row;\nalign-items:center;justify-content:center;font-size:%?32?%;color:#303133;padding:0 %?8?%}',""]),t.exports=e},7842:function(t,e,i){"use strict";i("cb29"),i("d81d"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{list:{type:Array,default:function(){return[]}},border:{type:Boolean,default:!0},value:{type:Boolean,default:!1},cancelColor:{type:String,default:"#606266"},confirmColor:{type:String,default:"#2979ff"},zIndex:{type:[String,Number],default:0},safeAreaInsetBottom:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},defaultValue:{type:Array,default:function(){return[0]}},mode:{type:String,default:"single-column"},valueName:{type:String,default:"value"},labelName:{type:String,default:"label"},childName:{type:String,default:"children"},title:{type:String,default:""},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确认"}},data:function(){return{defaultSelector:[0],columnData:[],selectValue:[],lastSelectIndex:[],columnNum:0,moving:!1}},watch:{value:{immediate:!0,handler:function(t){var e=this;t&&setTimeout((function(){return e.init()}),10)}}},computed:{uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{pickstart:function(){},pickend:function(){},init:function(){this.setColumnNum(),this.setDefaultSelector(),this.setColumnData(),this.setSelectValue()},setDefaultSelector:function(){this.defaultSelector=this.defaultValue.length==this.columnNum?this.defaultValue:Array(this.columnNum).fill(0),this.lastSelectIndex=this.$u.deepClone(this.defaultSelector)},setColumnNum:function(){if("single-column"==this.mode)this.columnNum=1;else if("mutil-column"==this.mode)this.columnNum=this.list.length;else if("mutil-column-auto"==this.mode){var t=1,e=this.list;while(e[0][this.childName])e=e[0]?e[0][this.childName]:{},t++;this.columnNum=t}},setColumnData:function(){var t=[];if(this.selectValue=[],"mutil-column-auto"==this.mode)for(var e=this.list[this.defaultSelector.length?this.defaultSelector[0]:0],i=0;i<this.columnNum;i++)0==i?(t[i]=this.list,e=e[this.childName]):(t[i]=e,e=e[this.defaultSelector[i]][this.childName]);else"single-column"==this.mode?t[0]=this.list:t=this.list;this.columnData=t},setSelectValue:function(){for(var t=null,e=0;e<this.columnNum;e++){t=this.columnData[e][this.defaultSelector[e]];var i={value:t?t[this.valueName]:null,label:t?t[this.labelName]:null};t&&t.extra&&(i.extra=t.extra),this.selectValue.push(i)}},columnChange:function(t){var e=this,i=null,a=t.detail.value;if(this.selectValue=[],"mutil-column-auto"==this.mode){this.lastSelectIndex.map((function(t,e){t!=a[e]&&(i=e)})),this.defaultSelector=a;for(var l=i+1;l<this.columnNum;l++)this.columnData[l]=this.columnData[l-1][l-1==i?a[i]:0][this.childName],this.defaultSelector[l]=0;a.map((function(t,i){var l=e.columnData[i][a[i]],n={value:l?l[e.valueName]:null,label:l?l[e.labelName]:null};l&&void 0!==l.extra&&(n.extra=l.extra),e.selectValue.push(n)})),this.lastSelectIndex=a}else if("single-column"==this.mode){var n=this.columnData[0][a[0]],s={value:n?n[this.valueName]:null,label:n?n[this.labelName]:null};n&&void 0!==n.extra&&(s.extra=n.extra),this.selectValue.push(s)}else"mutil-column"==this.mode&&a.map((function(t,i){var l=e.columnData[i][a[i]],n={value:l?l[e.valueName]:null,label:l?l[e.labelName]:null};l&&void 0!==l.extra&&(n.extra=l.extra),e.selectValue.push(n)}))},close:function(){this.$emit("input",!1)},getResult:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&this.$emit(t,this.selectValue),this.close()},selectHandler:function(){this.$emit("click")}}};e.default=a},"78e5":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.rank-salary .top[data-v-0bb41d60]{background-color:#eee}.rank-salary .top .text-rank[data-v-0bb41d60]{width:%?100?%}.rank-salary .list .item[data-v-0bb41d60]{border-bottom:solid %?1?% #e3e3e3}.rank-salary .list .item .sort[data-v-0bb41d60]{width:%?100?%}.rank-salary .list .item .box[data-v-0bb41d60]{align-items:center}.rank-salary .list .item .box uni-image[data-v-0bb41d60]{width:%?100?%;height:%?100?%;margin-right:%?10?%}.rank-salary .list .item .box .desc .name[data-v-0bb41d60]{font-size:%?32?%}.rank-salary .list .item .box .desc .level[data-v-0bb41d60]{font-size:%?26?%;color:#909399}.rank-salary .list .item .score[data-v-0bb41d60]{width:%?120?%;align-items:center;text-align:right;justify-content:flex-end;padding-right:%?20?%}',""]),t.exports=e},"7f7c":function(t,e,i){var a=i("78e5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var l=i("4f06").default;l("299bb31c",a,!0,{sourceMap:!1,shadowMode:!1})},"95bf":function(t,e,i){"use strict";i.r(e);var a=i("40a1"),l=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=l.a},"9f5a":function(t,e,i){"use strict";i.r(e);var a=i("285a"),l=i("0e04");for(var n in l)"default"!==n&&function(t){i.d(e,t,(function(){return l[t]}))}(n);i("bc53");var s,c=i("f0c5"),o=Object(c["a"])(l["default"],a["b"],a["c"],!1,null,"60cbc1d1",null,!1,a["a"],s);e["default"]=o.exports},a5c7:function(t,e,i){var a=i("68ec");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var l=i("4f06").default;l("2b33b6c6",a,!0,{sourceMap:!1,shadowMode:!1})},b285:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */.select-box[data-v-7e59ffd5]{height:%?88?%;display:flex;align-items:center}.select-box .btn-sel[data-v-7e59ffd5]{border:solid %?1?% #c0c4cc;border-radius:%?40?%;padding:%?6?% %?5?% %?6?% %?15?%;font-size:%?24?%;color:#787878;margin-left:%?10?%}',""]),t.exports=e},bc53:function(t,e,i){"use strict";var a=i("a5c7"),l=i.n(a);l.a},cb29:function(t,e,i){var a=i("23e7"),l=i("81d5"),n=i("44d2");a({target:"Array",proto:!0},{fill:l}),n("fill")},dc98:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return l})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"rank-salary"},[a("v-uni-view",{staticClass:"top flex p-2"},[a("v-uni-view",{staticClass:"text-rank"},[t._v("排名")]),a("v-uni-view",{staticClass:"text-name flex-1"},[t._v("院校")]),a("v-uni-view",{staticClass:"text-score"},[t._v("薪资")])],1),a("v-uni-view",{staticClass:"list"},t._l(t.collegeList,(function(e,l){return a("v-uni-view",{key:l,staticClass:"item flex py-3"},[a("v-uni-view",{staticClass:"sort flex-center"},[t._v(t._s(e.sort))]),a("v-uni-view",{staticClass:"box flex flex-1"},[a("v-uni-image",{attrs:{src:i("56d1"),mode:"widthFix"}}),a("v-uni-view",{staticClass:"desc"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.school_name))]),a("v-uni-view",{staticClass:"level"},[t._v(t._s(e.school_level))])],1)],1),a("v-uni-view",{staticClass:"score flex"},[t._v(t._s(e.salary))])],1)})),1)],1)},n=[]},dfb8:function(t,e,i){"use strict";var a=i("fc22"),l=i.n(a);l.a},fc22:function(t,e,i){var a=i("b285");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var l=i("4f06").default;l("27bd3f50",a,!0,{sourceMap:!1,shadowMode:!1})}}]);