(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91c52c86"],{"0874":function(t,i,n){"use strict";n.r(i);n("99af"),n("4160"),n("d81d"),n("0d03"),n("b0c0"),n("a9e3"),n("d3b7"),n("e25e"),n("ac1f"),n("25f0"),n("5319"),n("159b");var e=n("2909"),r=n("ade3"),a={},o={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in a||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".')+"\nPlease make sure you have imported this icon before using it."),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String,tabindex:[Number,String]},data:function(){return{id:h(),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t="undefined"===typeof t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return Object(r["a"])({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,i=t.width,n=t.height;return Math.max(i,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,i={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(function(t,n,e){var r=h();return i[e]=r,' id="'.concat(r,'"')})),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(function(t,n,e,r){var a=n||r;return a&&i[a]?"#".concat(i[a]):t})),t},focusable:function(){var t=this.tabindex;if(null==t)return"false";var i="string"===typeof t?parseInt(t,10):t;return i>=0?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var t=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var i=0,n=0;this.$children.forEach((function(e){e.outerScale=t.normalizedScale,i=Math.max(i,e.width),n=Math.max(n,e.height)})),this.childrenWidth=i,this.childrenHeight=n,this.$children.forEach((function(t){t.x=(i-t.width)/2,t.y=(n-t.height)/2}))}}else console.warn('Invalid prop: prop "name" is required.')}},render:function(t){if(null===this.name)return t();var i={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":String(!(this.label||this.title)),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}},n="vat-".concat(this.id);if(this.title&&(i.attrs["aria-labelledby"]=n),this.raw){var r=this.raw;this.title&&(r='<title id="'.concat(n,'">').concat(u(this.title),"</title>").concat(r)),i.domProps={innerHTML:r}}var a=this.title?[t("title",{attrs:{id:n}},this.title)]:[];return t("svg",i,this.raw?null:a.concat(this.$slots["default"]||[].concat(Object(e["a"])(this.icon.paths.map((function(i,n){return t("path",{attrs:i,key:"path-".concat(n)})}))),Object(e["a"])(this.icon.polygons.map((function(i,n){return t("polygon",{attrs:i,key:"polygon-".concat(n)})}))))))},register:function(t){for(var i in t){var n=t[i],e=n.paths,r=void 0===e?[]:e,o=n.d,c=n.polygons,h=void 0===c?[]:c,l=n.points;o&&r.push({d:o}),l&&h.push({points:l}),a[i]=s({},n,{paths:r,polygons:h})}},icons:a};function s(t){for(var i=arguments.length,n=new Array(i>1?i-1:0),e=1;e<i;e++)n[e-1]=arguments[e];return n.forEach((function(i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])})),t}var c=870711;function h(){return"va-".concat((c++).toString(16))}var l={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function u(t){return t.replace(/[<>"&]/g,(function(t){return l[t]||t}))}var f,d,p=o,b=(n("df9a"),n("2877")),v=Object(b["a"])(p,f,d,!1,null,null,null);i["default"]=v.exports},2909:function(t,i,n){"use strict";n.d(i,"a",(function(){return c}));n("277d");var e=n("6b75");function r(t){if(Array.isArray(t))return Object(e["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||a(t)||Object(o["a"])(t)||s()}},7442:function(t,i,n){},a9e3:function(t,i,n){"use strict";var e=n("83ab"),r=n("da84"),a=n("94ca"),o=n("6eeb"),s=n("5135"),c=n("c6b6"),h=n("7156"),l=n("c04e"),u=n("d039"),f=n("7c73"),d=n("241c").f,p=n("06cf").f,b=n("9bf2").f,v=n("58a8").trim,g="Number",m=r[g],y=m.prototype,w=c(f(y))==g,S=function(t){var i,n,e,r,a,o,s,c,h=l(t,!1);if("string"==typeof h&&h.length>2)if(h=v(h),i=h.charCodeAt(0),43===i||45===i){if(n=h.charCodeAt(2),88===n||120===n)return NaN}else if(48===i){switch(h.charCodeAt(1)){case 66:case 98:e=2,r=49;break;case 79:case 111:e=8,r=55;break;default:return+h}for(a=h.slice(2),o=a.length,s=0;s<o;s++)if(c=a.charCodeAt(s),c<48||c>r)return NaN;return parseInt(a,e)}return+h};if(a(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var I,N=function(t){var i=arguments.length<1?0:t,n=this;return n instanceof N&&(w?u((function(){y.valueOf.call(n)})):c(n)!=g)?h(new m(S(i)),n,N):S(i)},x=e?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;x.length>E;E++)s(m,I=x[E])&&!s(N,I)&&b(N,I,p(m,I));N.prototype=y,y.constructor=N,o(r,g,N)}},df9a:function(t,i,n){"use strict";var e=n("7442"),r=n.n(e);r.a}}]);
//# sourceMappingURL=chunk-91c52c86.ba20b0e9.js.map