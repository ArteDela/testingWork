(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{250:function(t,e,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(129).default)("a4293d64",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n(250)},252:function(t,e,n){var r=n(128)(!1);r.push([t.i,".table__inner-table{border:1px solid;width:100%;margin-bottom:10px}.table__list-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.table__list-header div{text-align:left;width:100%}.table__list-header div.table__inner-table-arrows{width:auto}.table__item{display:flex;align-items:center;justify-content:space-between;text-align:left;margin-bottom:10px;border-bottom:1px solid}.table__item-link{color:#000;text-decoration:none;text-align:left;display:block;width:100%;margin-right:15px}.table__pagination{display:flex}.table__pagination-page{width:20px;height:20px;text-align:center;border:1px solid;cursor:pointer;margin:0 5px;transition:.2s}.table__pagination-page:hover{border-color:red;transition:.2s}.table__inner-table-sorter{display:flex;align-items:center}.table__inner-table-sorter span{display:block;margin-right:5px}.table__inner-table-asc,.table__inner-table-desc{width:12px;height:12px}.table__inner-table-desc svg{width:100%;height:100%}.table__inner-table-asc svg{transform:rotate(180deg);width:100%;height:100%}.active{border-color:red}",""]),t.exports=r},253:function(t,e,n){"use strict";n.r(e);n(45),n(27),n(44),n(72),n(38),n(73);var r=n(36),l=(n(46),n(61));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={data:function(){return{elementsCountPages:10,pageNumber:1}},props:{elements:Array},computed:{pages:function(){return Math.round(this.elements.length/20)},pagElements:function(){var t=(this.pageNumber-1)*this.elementsCountPages,e=t+this.elementsCountPages;return this.elements.slice(t,e)}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({changePage:function(t){this.pageNumber=t}},Object(l.d)({sortByIdAsc:"element/sortByIdAsc",sortByIdDesc:"element/sortByIdDesc"})),mounted:function(){}},d=c,_=(n(251),n(47)),component=Object(_.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table"},[n("div",{staticClass:"table__list"},[n("div",{staticClass:"table__list-header"},[n("div",{staticClass:"table__inner-table-sorter"},[n("span",[t._v("id")]),t._v(" "),n("div",{staticClass:"table__inner-table-arrows"},[n("div",{staticClass:"table__inner-table-asc",on:{click:t.sortByIdAsc}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"}},[n("path",{attrs:{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"}}),n("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"}})])]),t._v(" "),n("div",{staticClass:"table__inner-table-desc",on:{click:t.sortByIdDesc}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"}},[n("path",{attrs:{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"}}),n("path",{attrs:{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"}})])])])]),t._v(" "),n("div",[t._v("name")]),t._v(" "),n("div",[t._v("email")])]),t._v(" "),t._l(t.pagElements,(function(e,r){return n("div",{staticClass:"table__item"},[n("NuxtLink",{staticClass:"table__item-link",attrs:{to:"detail/"+e.id}},[t._v(t._s(e.id))]),t._v(" "),n("NuxtLink",{staticClass:"table__item-link",attrs:{to:"detail/"+e.id}},[t._v(t._s(e.name))]),t._v(" "),n("NuxtLink",{staticClass:"table__item-link",attrs:{to:"detail/"+e.id}},[t._v(t._s(e.email))])],1)}))],2),t._v(" "),n("div",{staticClass:"table__pagination"},t._l(t.pages,(function(e,r){return n("div",{key:r,staticClass:"table__pagination-page",class:{active:e===t.pageNumber},on:{click:function(n){return t.changePage(e)}}},[t._v(t._s(e))])})),0)])}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,n){"use strict";n.r(e);n(45),n(27),n(44),n(72),n(38),n(73);var r=n(10),l=n(36),o=(n(60),n(253)),c=n(61);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{Table:o.default},methods:_({},Object(c.b)("element",["GET_ELEMENTS"])),computed:_({},Object(c.c)("element",["ELEMENTS"])),fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.GET_ELEMENTS();case 2:case"end":return e.stop()}}),e)})))()}},h=n(47),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Table",{attrs:{elements:t.ELEMENTS}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:n(253).default})}}]);