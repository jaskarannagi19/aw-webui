(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c69271e4","chunk-91c52c86"],{"0418":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"fixed-top-padding":t.fixedTopMenu}},[i("b-navbar",{staticClass:"aw-navbar",attrs:{toggleable:"lg",fixed:t.fixedTopMenu?"top":null}},[i("b-navbar-nav",{staticClass:"d-block d-lg-none"},[i("b-navbar-brand",{staticStyle:{"background-color":"transparent"},attrs:{to:"/"}},[i("img",{staticClass:"aligh-middle",staticStyle:{height:"1.5em"},attrs:{src:"/static/logo.png"}}),i("span",{staticClass:"ml-2 align-middle",staticStyle:{"font-size":"1em",color:"#000"}},[t._v("ActivityWatch")])])],1),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",[t._l(t.activityViews,(function(e){return 1===t.activityViews.length?i("b-nav-item",{key:e.name,attrs:{to:e.pathUrl}},[i("div",{staticClass:"px-2 px-lg-1"},[i("icon",{attrs:{name:"calendar-day"}}),t._v("Activity")],1)]):t._e()})),1!==t.activityViews.length?i("b-nav-item-dropdown",[i("template",{slot:"button-content"},[i("div",{staticClass:"d-inline px-2 px-lg-1"},[i("icon",{attrs:{name:"calendar-day"}}),t._v("Activity")],1)]),t.activityViews.length<=0?i("b-dropdown-item",{attrs:{disabled:""}},[t._v("No activity reports available"),i("br"),i("small",[t._v("Make sure you have both an AFK and window watcher running")])]):t._e(),t._l(t.activityViews,(function(e){return i("b-dropdown-item",{key:e.name,attrs:{to:e.pathUrl}},[i("icon",{attrs:{name:e.icon}}),t._v(t._s(e.name))],1)}))],2):t._e(),i("b-nav-item",{staticStyle:{"font-color":"#000"},attrs:{to:"/timeline"}},[i("div",{staticClass:"px-2 px-lg-1"},[i("icon",{attrs:{name:"stream"}}),t._v("Timeline")],1)]),i("b-nav-item",{attrs:{to:"/stopwatch"}},[i("div",{staticClass:"px-2 px-lg-1"},[i("icon",{attrs:{name:"stopwatch"}}),t._v("Stopwatch")],1)])],2),i("b-navbar-nav",{staticClass:"abs-center d-none d-lg-block"},[i("b-navbar-brand",{staticStyle:{"background-color":"transparent"},attrs:{to:"/"}},[i("img",{staticClass:"ml-0 aligh-middle",staticStyle:{height:"1.5em"},attrs:{src:"/static/logo.png"}}),i("span",{staticClass:"ml-2 align-middle",staticStyle:{"font-size":"1.0em",color:"#000"}},[t._v("ActivityWatch")])])],1),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-nav-item-dropdown",[i("template",{slot:"button-content"},[i("div",{staticClass:"d-inline px-2 px-lg-1"},[i("icon",{attrs:{name:"tools"}}),t._v("Tools")],1)]),i("b-dropdown-item",{attrs:{to:"/search"}},[i("icon",{attrs:{name:"search"}}),t._v("Search")],1),i("b-dropdown-item",{attrs:{to:"/query"}},[i("icon",{attrs:{name:"code"}}),t._v("Query")],1)],2),i("b-nav-item",{attrs:{to:"/buckets"}},[i("div",{staticClass:"px-2 px-lg-1"},[i("icon",{attrs:{name:"database"}}),t._v("Raw Data")],1)]),i("b-nav-item",{attrs:{to:"/settings"}},[i("div",{staticClass:"px-2 px-lg-1"},[i("icon",{attrs:{name:"cog"}}),t._v("Settings")],1)])],1)],1)],1)],1)},n=[],c=(i("caad"),i("2532"),i("96cf"),i("1da1")),r=i("c641"),s=i.n(r),o=i("0874");o["default"].register({"calendar-day":{width:448,height:512,paths:[{d:"M0 464v-272h448v272c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48zM64 272v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16zM400 64c26.5 0 48 21.5 48 48v48h-448v-48c0-26.5 21.5-48 48-48h48v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h128v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48z"}]}}),o["default"].register({"calendar-week":{width:448,height:512,paths:[{d:"M0 464v-272h448v272c0 26.5-21.5 48-48 48h-352c-26.5 0-48-21.5-48-48zM64 272v64c0 8.8 7.2 16 16 16h288c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-288c-8.8 0-16 7.2-16 16zM400 64c26.5 0 48 21.5 48 48v48h-448v-48c0-26.5 21.5-48 48-48h48v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h128v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48z"}]}}),o["default"].register({stream:{width:512,height:512,paths:[{d:"M16 128c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-416zM496 208c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h416zM432 384c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-416c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h416z"}]}}),o["default"].register({database:{width:448,height:512,paths:[{d:"M448 73.1v45.7c0 40.3-100.3 73.1-224 73.1s-224-32.9-224-73.1v-45.7c0-40.3 100.3-73.1 224-73.1s224 32.9 224 73.1zM448 176v102.9c0 40.3-100.3 73.1-224 73.1s-224-32.9-224-73.1v-102.9c48.1 33.1 136.2 48.6 224 48.6s175.9-15.4 224-48.6zM448 336v102.9c0 40.3-100.3 73.1-224 73.1s-224-32.9-224-73.1v-102.9c48.1 33.1 136.2 48.6 224 48.6s175.9-15.4 224-48.6z"}]}});i("2d65");o["default"].register({code:{width:640,height:512,paths:[{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9l136.5-470.2c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9l-136.5 470.2c-1.9 6.4-8.5 10.1-14.9 8.2zM164.9 399.3c-4.5 4.9-12.1 5.1-17 0.5l-144.1-135.1c-5.1-4.7-5.1-12.8 0-17.5l144.1-135c4.9-4.6 12.5-4.3 17 0.5l43.5 46.4c4.7 4.9 4.3 12.7-0.8 17.2l-90.6 79.7 90.6 79.7c5.1 4.5 5.4 12.3 0.8 17.2zM492.1 399.9c-4.9 4.5-12.5 4.3-17-0.6l-43.5-46.4c-4.7-4.9-4.3-12.7 0.8-17.2l90.6-79.7-90.6-79.8c-5.1-4.5-5.4-12.3-0.8-17.2l43.5-46.4c4.6-4.8 12.2-5 17-0.5l144.1 135.2c5.1 4.7 5.1 12.8 0 17.5z"}]}}),o["default"].register({stopwatch:{width:448,height:512,paths:[{d:"M432 304c0 114.9-93.1 208-208 208s-208-93.1-208-208c0-104 76.3-190.2 176-205.5v-34.5h-28c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-0.6 0.6c21.2 32.4 33.5 71.3 33.5 113.1zM256 340v-151.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v151.5c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"}]}});i("a917");o["default"].register({tools:{width:512,height:512,paths:[{d:"M501.1 395.7c14.5 14.5 14.5 38.1 0 52.7l-52.7 52.7c-14.5 14.6-38.1 14.6-52.7 0l-117.1-117.1c-23.1-23.1-27.5-57.6-13.9-85.4l-106.6-106.6h-62.1l-96-128 64-64 128 96v62.1l106.6 106.6c27.8-13.7 62.3-9.2 85.4 13.9zM331.7 225c-8.2 0-16.6 1-24.7 2.9l-82.1-82.1c-0.7-37.5 12.7-75.1 41.2-103.6 37-37 89.2-49.6 136.6-37.9 9.1 2.3 12.3 13.6 5.7 20.2l-74.4 74.4 11.3 67.9 67.9 11.3 74.4-74.4c6.6-6.6 17.9-3.5 20.1 5.5 11.8 47.4-0.8 99.6-37.9 136.7-13 13-28 22.6-43.8 29.5l-19.4-19.4c-20-20-46.6-31-74.9-31zM227.8 307c-4.9 21.1-2.6 42.8 5 62.7l-123.6 123.6c-25 25-65.5 25-90.5 0s-25-65.5 0-90.5l152.4-152.5zM64 472c13.3 0 24-10.8 24-24 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 13.2 10.8 24 24 24z"}]}}),o["default"].register({mobile:{width:320,height:512,paths:[{d:"M272 0c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48h-224c-26.5 0-48-21.5-48-48v-416c0-26.5 21.5-48 48-48h224zM160 480c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"}]}}),o["default"].register({desktop:{width:576,height:512,paths:[{d:"M528 0c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48h-192l16 48h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-272c-13.3 0-24-10.7-24-24s10.7-24 24-24h72l16-48h-192c-26.5 0-48-21.5-48-48v-320c0-26.5 21.5-48 48-48h480zM512 352v-288h-448v288h448z"}]}});var l={name:"Header",data:function(){return{activityViews:[],fixedTopMenu:this.$isAndroid}},mounted:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,i,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$aw.getBuckets();case 2:e=t.sent,i={},s()(e,(function(t){i[t.hostname]=i[t.hostname]||{},i[t.hostname].afk|="afkstatus"==t.type,i[t.hostname].window|="currentwindow"==t.type,i[t.hostname].android|="currentwindow"==t.type&&t.id.includes("android")})),s()(i,(function(t,e){"unknown"!=e&&a.activityViews.push({name:e,hostname:e,type:"default",pathUrl:"/activity/".concat(e),icon:"desktop"}),t.android&&a.activityViews.push({name:"".concat(e," (Android)"),hostname:e,type:"android",pathUrl:"/activity/".concat(e),icon:"mobile"})}));case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},h=l,d=(i("72f1"),i("d5c5"),i("bbbd"),i("2877")),u=Object(d["a"])(h,a,n,!1,null,"0661ebfe",null);e["default"]=u.exports},"0874":function(t,e,i){"use strict";i.r(e);i("99af"),i("4160"),i("d81d"),i("0d03"),i("b0c0"),i("a9e3"),i("d3b7"),i("e25e"),i("ac1f"),i("25f0"),i("5319"),i("159b");var a=i("2909"),n=i("ade3"),c={},r={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in c||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".')+"\nPlease make sure you have imported this icon before using it."),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String,tabindex:[Number,String]},data:function(){return{id:l(),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t="undefined"===typeof t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return Object(n["a"])({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?c[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,i=t.height;return Math.max(e,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(function(t,i,a){var n=l();return e[a]=n,' id="'.concat(n,'"')})),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(function(t,i,a,n){var c=i||n;return c&&e[c]?"#".concat(e[c]):t})),t},focusable:function(){var t=this.tabindex;if(null==t)return"false";var e="string"===typeof t?parseInt(t,10):t;return e>=0?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var t=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var e=0,i=0;this.$children.forEach((function(a){a.outerScale=t.normalizedScale,e=Math.max(e,a.width),i=Math.max(i,a.height)})),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach((function(t){t.x=(e-t.width)/2,t.y=(i-t.height)/2}))}}else console.warn('Invalid prop: prop "name" is required.')}},render:function(t){if(null===this.name)return t();var e={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":String(!(this.label||this.title)),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}},i="vat-".concat(this.id);if(this.title&&(e.attrs["aria-labelledby"]=i),this.raw){var n=this.raw;this.title&&(n='<title id="'.concat(i,'">').concat(d(this.title),"</title>").concat(n)),e.domProps={innerHTML:n}}var c=this.title?[t("title",{attrs:{id:i}},this.title)]:[];return t("svg",e,this.raw?null:c.concat(this.$slots["default"]||[].concat(Object(a["a"])(this.icon.paths.map((function(e,i){return t("path",{attrs:e,key:"path-".concat(i)})}))),Object(a["a"])(this.icon.polygons.map((function(e,i){return t("polygon",{attrs:e,key:"polygon-".concat(i)})}))))))},register:function(t){for(var e in t){var i=t[e],a=i.paths,n=void 0===a?[]:a,r=i.d,o=i.polygons,l=void 0===o?[]:o,h=i.points;r&&n.push({d:r}),h&&l.push({points:h}),c[e]=s({},i,{paths:n,polygons:l})}},icons:c};function s(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),a=1;a<e;a++)i[a-1]=arguments[a];return i.forEach((function(e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})),t}var o=870711;function l(){return"va-".concat((o++).toString(16))}var h={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function d(t){return t.replace(/[<>"&]/g,(function(t){return h[t]||t}))}var u,v,f=r,p=(i("df9a"),i("2877")),b=Object(p["a"])(f,u,v,!1,null,null,null);e["default"]=b.exports},"1c4e":function(t,e,i){},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("277d");var a=i("6b75");function n(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=i("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t){return n(t)||c(t)||Object(r["a"])(t)||s()}},"2d65":function(t,e,i){"use strict";var a=i("0874");a["default"].register({search:{width:512,height:512,paths:[{d:"M505 442.7c9.3 9.4 9.3 24.6-0.1 34l-28.3 28.3c-9.3 9.4-24.5 9.4-33.9 0l-99.7-99.7c-4.5-4.5-7-10.6-7-17v-16.3c-35.3 27.6-79.7 44-128 44-114.9 0-208-93.1-208-208s93.1-208 208-208 208 93.1 208 208c0 48.3-16.4 92.7-44 128h16.3c6.4 0 12.5 2.5 17 7zM208 336c70.8 0 128-57.3 128-128 0-70.8-57.3-128-128-128-70.8 0-128 57.3-128 128 0 70.8 57.3 128 128 128z"}]}})},"38d6":function(t,e,i){},"72f1":function(t,e,i){"use strict";var a=i("9a06"),n=i.n(a);n.a},7442:function(t,e,i){},"9a06":function(t,e,i){},a917:function(t,e,i){"use strict";var a=i("0874");a["default"].register({cog:{width:512,height:512,paths:[{d:"M487.4 315.7c4.9 2.8 7.1 8.6 5.6 14.1-11.1 35.7-30 67.9-54.7 94.6-3.8 4.2-9.9 5.1-14.8 2.3l-42.6-24.6c-18 15.3-38.6 27.2-60.8 35.1v49.2c0 5.6-3.9 10.5-9.4 11.7-34.9 7.8-72.5 8.2-109.2 0-5.5-1.2-9.4-6.1-9.4-11.7v-49.2c-22.3-7.8-42.9-19.7-60.8-35.1l-42.6 24.6c-4.8 2.8-11 1.8-14.8-2.3-24.7-26.8-43.6-59-54.7-94.6-1.6-5.4 0.6-11.2 5.5-14l42.6-24.6c-4.3-23.2-4.3-47 0-70.2l-42.6-24.6c-4.9-2.8-7.2-8.6-5.5-14 11.1-35.7 30-67.9 54.7-94.6 3.8-4.2 9.9-5.1 14.8-2.3l42.5 24.6c18-15.3 38.6-27.2 60.8-35.1v-49.2c0-5.6 3.9-10.5 9.4-11.7 34.9-7.8 72.5-8.2 109.2 0 5.5 1.2 9.4 6.1 9.4 11.7v49.1c22.3 7.8 42.9 19.7 60.8 35.1l42.6-24.6c4.8-2.8 11-1.8 14.8 2.3 24.7 26.8 43.6 59 54.7 94.6 1.6 5.4-0.6 11.2-5.5 14l-42.6 24.6c4.3 23.2 4.3 47 0 70.2zM256 336c44.1 0 80-35.9 80-80s-35.9-80-80-80-80 35.9-80 80 35.9 80 80 80z"}]}})},a9e3:function(t,e,i){"use strict";var a=i("83ab"),n=i("da84"),c=i("94ca"),r=i("6eeb"),s=i("5135"),o=i("c6b6"),l=i("7156"),h=i("c04e"),d=i("d039"),u=i("7c73"),v=i("241c").f,f=i("06cf").f,p=i("9bf2").f,b=i("58a8").trim,g="Number",m=n[g],w=m.prototype,y=o(u(w))==g,z=function(t){var e,i,a,n,c,r,s,o,l=h(t,!1);if("string"==typeof l&&l.length>2)if(l=b(l),e=l.charCodeAt(0),43===e||45===e){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+l}for(c=l.slice(2),r=c.length,s=0;s<r;s++)if(o=c.charCodeAt(s),o<48||o>n)return NaN;return parseInt(c,a)}return+l};if(c(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var M,x=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof x&&(y?d((function(){w.valueOf.call(i)})):o(i)!=g)?l(new m(z(e)),i,x):z(e)},S=a?v(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;S.length>k;k++)s(m,M=S[k])&&!s(x,M)&&p(x,M,f(m,M));x.prototype=w,w.constructor=x,r(n,g,x)}},bbbd:function(t,e,i){"use strict";var a=i("38d6"),n=i.n(a);n.a},d5c5:function(t,e,i){"use strict";var a=i("1c4e"),n=i.n(a);n.a},df9a:function(t,e,i){"use strict";var a=i("7442"),n=i.n(a);n.a}}]);
//# sourceMappingURL=chunk-c69271e4.786b549e.js.map